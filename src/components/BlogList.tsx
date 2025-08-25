import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { type PortableTextBlock } from "@portabletext/react";
import { Link } from "react-router-dom";

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

export function BlogList({ continent }: { continent: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(continent);

  useEffect(() => {
    const query = `*[_type == "blog" && continent == "${continent}"]{
  _id,
  title,
  topic[] {
    topic,
    description,
    photos[] { asset->{ url } }
  }
}`;

    client
      .fetch(query)
      .then((data: Post[]) => {
        setPosts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="px-8 md:px-32 py-20 flex gap-5 overflow-x-auto scroll-auto">
      {posts.map((post) => (
        <Link
          to={`/blogs/${continent}/${post._id}`}
          key={post._id}
          className="w-1/4 flex flex-col gap-3 flex-shrink-0"
        >
          {/* {post.topic?.map((t, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-gray-700">
                {t.topic}
              </h2>
              {t.photos && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {t.photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo.asset.url}
                      alt={t.topic}
                      className="rounded-xl object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))} */}
          <img
            className="w-full aspect-[6/7] object-cover object-center"
            src={post.topic?.[0]?.photos?.[0]?.asset.url}
          />
          <h2 className="text-center second-text text-A">
            {post.title}
            {/* 5 of the best places to visit in Asia */}
          </h2>
        </Link>
      ))}
    </div>
  );
}

{
  /* {post.topic?.map((t, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-gray-700">
                {t.topic}
              </h2>

              <div className="prose prose-lg max-w-none">
                <PortableText value={t.description} />
              </div>

              {t.photos && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {t.photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo.asset.url}
                      alt={t.topic}
                      className="rounded-xl object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))} */
}
