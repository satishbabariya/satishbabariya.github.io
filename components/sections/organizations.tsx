import { organizations } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function Organizations() {
  return (
    <section id="organizations" className="py-16">
      <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">
        Organizations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {organizations.map((org) => (
          <a
            key={org.name}
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border rounded-lg p-5 hover:border-primary/50 hover:bg-accent/30 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {org.name}
              </h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{org.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {org.roles.map((role) => (
                <Badge key={role} variant="secondary" className="font-mono text-xs">
                  {role}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
