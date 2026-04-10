import { Github, ExternalLink } from 'lucide-react'; // Instala lucide-react o usa SVGs

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export default function ProjectCard({ title, description, image, tags, githubUrl, demoUrl }: ProjectProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800 hover:border-x-orange-700 transition-all duration-300 shadow-xl">
      {/* Contenedor de Imagen */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium text-secondary bg-blue-400/10 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm line-clamp-3 mb-6">
          {description}
        </p>

        {/* Botones */}
        <div className="flex items-center gap-4">
          <a
            href={demoUrl}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-secondary/90 hover:bg-secondary/80 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <ExternalLink size={16} /> Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors border border-slate-700"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
