import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">
        Experience
      </h2>
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-primary transition-colors"
                >
                  {job.company}
                </a>
                <p className="text-sm text-muted-foreground">{job.position}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                {job.time}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {job.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary mt-0.5">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
