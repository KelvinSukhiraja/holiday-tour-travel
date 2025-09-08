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
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link
            to={`/blogs/${continent}/${post._id}`}
            key={post._id}
            className="w-3/4 md:w-1/4 flex flex-col gap-3 flex-shrink-0"
          >
            <img
              className="w-full aspect-[6/7] object-cover object-center"
              src={post.topic?.[0]?.photos?.[0]?.asset.url}
            />
            <h2 className="text-center second-text text-A">{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="third-text text-A italic">No blogs available.</div>
      )}
    </div>
  );
}
