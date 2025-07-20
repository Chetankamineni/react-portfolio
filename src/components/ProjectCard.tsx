import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group block bg-gray-800 border border-gray-700 rounded-xl p-4 transition-all hover:border-purple-400">
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-gray-400">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};