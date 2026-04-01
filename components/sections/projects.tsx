import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, GitBranch } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">
        Other Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border rounded-lg p-5 hover:border-primary/50 hover:bg-accent/30 transition-all flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <GitBranch className="h-5 w-5 text-muted-foreground" />
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-mono text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="font-mono text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
