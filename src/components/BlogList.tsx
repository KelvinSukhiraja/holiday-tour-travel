import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

type Topic = {
  topic: string;
  description: PortableTextBlock[];
  photos: {
    asset: {
      _ref: string;
      _type: string;
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

  useEffect(() => {
    const query = `*[_type == "blog"]{
      _id,
      title,
      topic[]{
        topic,
        description,
        photos[]{asset->{url}}
      }
    }`;
    client.fetch(query).then(setPosts);
  }, []);

  return (
    <ul className="flex justify-center items-center flex-col max-w-xl">
      {posts.map((post) => (
        <li key={post._id}>
          <h1>{post.title}</h1>
          {post.topic?.map((t, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-4xl">{t.topic}</h2>
              <PortableText value={t.description} className="text-2xl " />
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
}
