export function Background() {
  return (
    <section id="background" className="py-16">
      <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
        Background
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
        <p>
          I&apos;m currently a Software Engineer at{" "}
          <a
            href="https://github.com/tarkalabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Tarka Labs
          </a>
          , building cloud infrastructure for the Yamaha Creators Platform using Terraform and AWS. I
          graduated from{" "}
          <a
            href="https://www.gtu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Gujarat Technological University
          </a>{" "}
          in 2017 with a B.Tech in Computer Science.
        </p>
        <p>
          As a software engineer, I enjoy building open-source software, developer tools, and
          exploring systems programming. I built the entire{" "}
          <a
            href="https://github.com/supabase-community"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Swift SDK ecosystem for Supabase
          </a>
          , and I&apos;m currently deep into compiler engineering — building a Swift compiler from
          scratch and working with LLVM, C++20 modules, and low-level compression algorithms.
        </p>
      </div>
    </section>
  );
}
