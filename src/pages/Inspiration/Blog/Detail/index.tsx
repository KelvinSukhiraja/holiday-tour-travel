import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { client } from "@/lib/sanityClient";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

type Topic = {
  topic: string;
  description: PortableTextBlock[];
  photos: {
    asset: {
      url: string;
    };
  }[];
};

type Post = {
  _id: string;
  title: string;
  topic: Topic[];
};

export function BlogDetail() {
  const { id, region } = useParams<{ region: string; id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // useRef to store refs of all topic sections
  const topicRefs = useRef<Array<HTMLDivElement | null>>([]);
  topicRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !topicRefs.current.includes(el)) {
      topicRefs.current.push(el);
    }
  };

  useEffect(() => {
    const query = `*[_type == "blog" && _id == "${id}"][0]{
      _id,
      title,
      topic[] {
        topic,
        description,
        photos[] { asset->{ url } }
      }
    }`;

    client.fetch(query).then((data: Post) => {
      setPost(data);
      setLoading(false);
    });
  }, [id]);

  useLayoutEffect(() => {
    if (topicRefs.current.length > 0) {
      topicRefs.current.forEach((topicRef, index) => {
        const q = gsap.utils.selector(topicRef);
        const isEven = index % 2 === 0;

        // Animate the content (text)
        gsap.fromTo(
          q(".topic-content"),
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: topicRef,
              start: "top 50%",
              end: "center center",
              scrub: 1,
            },
          }
        );

        // Animate the photos
        gsap.fromTo(
          q(".topic-photos img"),
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2, // Stagger for multiple photos
            scrollTrigger: {
              trigger: topicRef,
              start: "top 50%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      });
    }
  }, [post]);

  if (loading) return <p className="text-center">Loading blog...</p>;
  if (!post) return <p className="text-center">Blog not found</p>;

  const photos = (t: Topic, isEven: boolean) => {
    const justifyClass = isEven ? "justify-start" : "justify-end";
    const absoluteClass = isEven ? "right-0" : "left-0";

    if (t.photos?.length > 1)
      return (
        <div className={`relative w-full flex ${justifyClass}`}>
          <img
            src={t.photos?.[0].asset.url}
            className="w-4/5 cursor-pointer"
            onClick={() => setSelectedImage(t.photos?.[0].asset.url)}
          />
          <img
            src={t.photos?.[1].asset.url}
            className={`absolute top-10 md:top-50 cursor-pointer ${absoluteClass}`}
            onClick={() => setSelectedImage(t.photos?.[1].asset.url)}
          />
        </div>
      );
    else
      return (
        <img
          src={t.photos?.[0].asset.url}
          className="w-full cursor-pointer"
          onClick={() => setSelectedImage(t.photos?.[0].asset.url)}
        />
      );
  };

  return (
    <section>
      <div className="px-8 md:px-32 py-20 text-A">
        <div className="py-10">
          <span className="fourth-text text-gray-b capitalize">
            <Link to="/inspiration" className="hover:text-A the-transition">
              Inspiration
            </Link>{" "}
            &gt;{" "}
            <Link
              to={`/blogs/${region}`}
              className="hover:text-A the-transition"
            >
              {region}
            </Link>{" "}
            &gt; {post.title}
          </span>
          <h1 className="first-text">{post.title}</h1>
        </div>

        <div>
          {post.topic?.map((t, index) => {
            const isEven = index % 2 === 0;
            const reverseClass = isEven ? "order-first" : "md:order-last";

            return (
              <div
                key={index}
                ref={addToRefs} // Add ref to the topic container
                className={`grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 relative ${
                  index > 0 ? "md:-mt-10" : ""
                }`}
              >
                <div className={`topic-photos ${reverseClass}`}>
                  {photos(t, isEven)}
                </div>
                <div
                  className={`topic-content flex flex-col md:justify-center gap-5 w-4/5 ${
                    isEven ? "justify-self-end" : ""
                  }`}
                >
                  <h2 className="second-text">{t.topic}</h2>
                  <p className="fourth-text max-w-md">
                    <PortableText value={t.description} />
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 backdrop-brightness-[15%] flex items-center justify-center z-50 p-5"
            onClick={() => setSelectedImage(null)}
          >
            <X className="absolute top-5 right-5 stroke-white-a cursor-pointer" />
            <img
              src={selectedImage}
              alt="Full"
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </section>
  );
}
