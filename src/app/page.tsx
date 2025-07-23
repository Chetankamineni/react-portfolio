import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";

export default function HomePage() {
  // Dummy data for now. We'll fetch this from the database later.
  const projects = [
    {
      slug: "blog",
      title: "Blog",
      description: "A simple full-stack blog.",
      imageUrl: "https://placehold.co/600x400/111827/4b5563?text=Blog",
    },
    {
      slug: "projects",
      title: "Projects",
      description: "All my projects in one place.",
      imageUrl: "https://placehold.co/600x400/111827/4b5563?text=Projects",
    },
  ];

  return (
    <div>
      <Hero />
      <section id="projects" className="py-16 md:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl mb-12">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
