"use client";

import { Github, Linkedin, Mail, Satellite } from "lucide-react";
import Link from "next/link";
import { OrbitRing } from "./orbit-ring";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <OrbitRing className="-left-56 -top-28 h-[560px] w-[560px] opacity-60" />
      <OrbitRing className="-bottom-36 -right-56 h-[640px] w-[640px] opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-3 text-balance font-mono text-6xl font-bold tracking-tight text-foreground md:text-8xl">
          <span className="text-primary" style={{ textShadow: "0 0 32px rgba(0,229,255,0.5)" }}>
            Jetsada Jinaka
          </span>
        </h1>

        <p className="mb-2 font-mono text-lg tracking-widest text-primary/90 uppercase md:text-xl">
          Software Engineer
        </p>

        <p className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Full-stack developer with a passion for building innovative and user-friendly applications with real-time, robust and scalable backend systems.
        </p>

        {/* Tech pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {[
            "C# .NET", "TypeScript", "Next.js", "React", "NestJS", "Golang",
            "PostgreSQL", "MongoDB", "Docker", "Ubuntu", "Proxmox VE", "Jenkins", "Grafana"
          ].map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/20"
            style={{ boxShadow: "0 0 20px rgba(0,229,255,0.2)" }}
          >
            <Satellite className="h-4 w-4" />
            View Missions
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-border bg-transparent px-6 py-3 font-mono text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="mt-12 flex items-center justify-center gap-7">
          <Link href="https://github.com/TangJetsada123" target="_blank" aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/jetsada-jinaka-72b986230/" target="_blank" aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:jetsada_jinaka@hotmail.com" aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
