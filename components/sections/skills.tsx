import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const categories = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks", items: skills.frameworks },
  { label: "Infrastructure & Tools", items: skills.tools },
  { label: "Architecture & Systems", items: skills.design },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold mb-3">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <Badge key={item} variant="secondary" className="font-mono text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
