import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/data";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-mono text-sm font-semibold">
          {siteConfig.name.toLowerCase().replace(" ", ".")}
        </a>
        <div className="flex items-center gap-2">
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground mr-4">
            <a href="#background" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
