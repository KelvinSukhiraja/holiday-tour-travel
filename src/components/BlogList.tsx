import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
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

export function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = `*[_type == "blog"]{
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
    <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto p-4">
      {posts.map((post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>

          {/* {post.topic?.map((t, index) => (
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
          ))} */}
        </div>
      ))}
    </div>
  );
}
