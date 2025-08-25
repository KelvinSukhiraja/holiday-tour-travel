import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

type Topic = {
  topic: string;
  description: PortableTextBlock[];
  photos?: {
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

  //   console.log(post);

  if (loading) return <p className="text-center">Loading blog...</p>;
  if (!post) return <p className="text-center">Blog not found</p>;

  return (
    <div className="px-8 md:px-32 py-20 text-A">
      <span className="fourth-text text-gray-b capitalize">
        Inspiration &gt; {region} &gt; {post.title}
      </span>
      <h1 className="first-text">{post.title}</h1>

      {post.topic?.map((t, index) => (
        <div key={index} className="">
          {/* {console.log(t)} */}
          <h2 className="second-text">{t.topic}</h2>
          <div className="">
            <PortableText value={t.description} />
            {t.photos?.length > 1 && (
              <div className="relative w-1/2">
                <img src={t.photos?.[0].asset.url} className="w-full" />
                <img
                  src={t.photos?.[1].asset.url}
                  className="absolute top-50 right-0"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// {t.photos && (
//             <div className="">
//               {t.photos.map((photo, i) => (
//                 <img key={i} src={photo.asset.url} alt={t.topic} className="" />
//               ))}
//             </div>
//           )}
