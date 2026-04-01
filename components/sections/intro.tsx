import { siteConfig } from "@/lib/data";

export function Intro() {
  return (
    <header className="py-20 md:py-32">
      <p className="font-mono text-sm text-muted-foreground mb-4">Hi, my name is</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        {siteConfig.name}
      </h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground font-normal max-w-2xl mb-8 leading-relaxed">
        Software Engineer building systems across the full stack — from iOS apps and backend services to compiler engineering and cloud infrastructure. A decade of shipping code in{" "}
        <span className="text-foreground font-medium">Swift, Go, TypeScript, Rust, and C++</span>.
      </h2>
      <a
        href={`mailto:${siteConfig.email}`}
        className="font-mono text-sm border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        Get In Touch
      </a>
    </header>
  );
}
