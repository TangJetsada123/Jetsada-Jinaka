"use client";

import { ExternalLink, Folder, Github, Radio, Satellite, Signal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Mission Ground Control",
    description:
      "Real-time satellite monitoring dashboard with telemetry visualization, pass predictions, and command scheduling. Handles multiple satellites simultaneously.",
    technologies: ["React", "TypeScript", "WebSocket", "Golang", "PostgreSQL", "MongoDB"],
    github: "#",
    external: "#",
    image: "/mgs.jpg",
  },
  {
    title: "Ground Station Virtualization and monitoring",
    description:
      "Comprehensive monitoring solution for ground station server infrastructure using Prometheus and Node Exporter to track system health and performance metrics in real-time.",
    technologies: ["Prometheus", "Grafana", "Node Exporter"],
    github: "#",
    external: "#",
    image: "/grafana.png",
  },
  {
    title: "Antenna Software Control",
    description:
      "Automated antenna control system with predictive tracking and seamless satellite handoff. Integrated with Spacetrack and N2YO for real-time orbit data.",
    technologies: ["React", "Golang", "TailwindCSS"],
    github: "#",
    external: "#",
    image: "/antenna-control.png",
  },
];

const otherProjects = [
  {
    title: "Orbit Visualizer",
    description: "3D orbit visualization tool using CesiumJS and TLE data for constellation management.",
    technologies: ["React", "CesiumJS", "Three.js"],
    github: "#",
    external: "#",
  },
  {
    title: "CMU ACAD(Senior Project)",
    description: "Academic calendar management system for Chiang Mai University, streamlining course scheduling and registration processes.",
    technologies: ["React", "NestJS", "MySQL"],
    github: "#",
  },
  {
    title: "NFT Marketplace (Intern Project)",
    description: "NFT marketplace clone for creating, buying, and selling digital assets.",
    technologies: ["ReactJS", "NestJS", "MongoDB"],
    github: "https://github.com/TangJetsada123/nft-marketplace-front-end",
    external: "https://github.com/TangJetsada123/nft-marketplace-service",
  },
  {
    title: "Upload Image AWS S3",
    description: "Upload Image to AWS S3 and get the URL.",
    technologies: ["NestJS", "AWS S3", "TypeScript"],
    github: "https://github.com/TangJetsada123/upload-image-aws-s3"
  },
  {
    title: "PDF Password Checker",
    description: "The PDF Password Checker is a Python script that checks a directory for password-protected PDF files and provides information about them.",
    technologies: ["Python",],
    github: "https://github.com/TangJetsada123/pdf-password-checker"
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase">// 03. Projects</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Mission Archive
          </h2>
        </div>

        {/* Featured */}
        <div className="mb-24 space-y-16">
          {featuredProjects.map((project, i) => (
            <div
              key={project.title}
              className={`group grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Visual panel */}
              <div
                className={`relative flex aspect-video items-center justify-center overflow-hidden rounded border border-border bg-card transition-all group-hover:border-primary/40 ${i % 2 === 1 ? "lg:col-start-2" : ""}`}
                style={{ boxShadow: "inset 0 1px 0 rgba(0,229,255,0.05)" }}
              >
                {/* Scan-line overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.5) 2px, rgba(0,229,255,0.5) 3px)",
                  }}
                  aria-hidden="true"
                />
                {/* Corner brackets */}
                <div className="absolute z-10 left-3 top-3 h-4 w-4 border-l border-t border-primary/40" aria-hidden="true" />
                <div className="absolute z-10 right-3 top-3 h-4 w-4 border-r border-t border-primary/40" aria-hidden="true" />
                <div className="absolute z-10 bottom-3 left-3 h-4 w-4 border-b border-l border-primary/40" aria-hidden="true" />
                <div className="absolute z-10 bottom-3 right-3 h-4 w-4 border-b border-r border-primary/40" aria-hidden="true" />
                <Image
                  src={project.image || "/placeholder.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 "
                />
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:text-right" : ""}>
                <p className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase">Featured Mission</p>
                <h3 className="mb-4 text-2xl font-bold text-foreground">{project.title}</h3>
                <div
                  className="mb-4 rounded border border-border bg-card p-5"
                  style={{ boxShadow: "inset 0 1px 0 rgba(0,229,255,0.04)" }}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
                <div className={`mb-4 flex flex-wrap gap-3 ${i % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground/70">{tech}</span>
                  ))}
                </div>
                {/* <div className={`flex gap-5 ${i % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.github && (
                    <Link href={project.github} aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                  {project.external && (
                    <Link href={project.external} aria-label="External link" className="text-muted-foreground transition-colors hover:text-primary">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="mb-10 text-center">
          <h3 className="font-mono text-lg font-bold text-foreground">Other Missions</h3>
          <p className="mt-1 font-mono text-xs text-muted-foreground">More things I have built</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded border border-border bg-card p-6 transition-all hover:border-primary/40"
              style={{ boxShadow: "inset 0 1px 0 rgba(0,229,255,0.04)" }}
            >
              <div className="mb-4 flex items-start justify-between">
                <Folder className="h-8 w-8 text-primary/70" style={{ filter: "drop-shadow(0 0 8px rgba(0,229,255,0.3))" }} />
                <div className="flex gap-3">
                  {project.github && (
                    <Link href={project.github} aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Link>
                  )}
                  {project.external && (
                    <Link href={project.external} aria-label="External" className="text-muted-foreground transition-colors hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
              <h4 className="mb-2 font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h4>
              <p className="mb-4 flex-grow text-xs leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-muted-foreground/60">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
