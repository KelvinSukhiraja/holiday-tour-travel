import { useParams, Navigate } from "react-router-dom";
import { sections } from "@/lib/utils";
import InspirationHero from "@/components/InspirationHero";
import { BlogList } from "@/components/BlogList";

const Blog = () => {
  const { region } = useParams<{ region: string }>();
  const section = sections.find((s) => s.id === region);

  if (!section) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <section className="h-screen">
        <img
          src={section.image}
          alt={section.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <InspirationHero currentSection={section} />
      </section>
      <BlogList continent={section.id} />
    </>
  );
};

export default Blog;
