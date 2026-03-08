"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "2024 — Present",
    title: "Ground Station Software Engineer",
    company: "National Astronomical Research Institute of Thailand",
    companyUrl: "https://www.narit.or.th/th",
    description:
      "Leading developement and designed software systems for the Mission Ground Control to enable communication with satellites, including the development of onboard satellite software. The work encompassed the complete design of the Mission Control Software system for data transmission over satellite frequency bands. It also included the development of software to control RF modules for encoding and decoding Telemetry, Tracking, and Command (TT&C) data of the satellite",
    technologies: ["React", "TypeScript", "Python", "Golang", "PostgreSQL", "MongoDB", "Grafana", "Docker"],
  },
  {
    period: "2023 — 2024",
    title: "Software Developer",
    company: "Heng Leasing Capital Limited",
    companyUrl: "https://www.hengleasing.com/",
    description:
      "Develop and enhance the Heng Leasing Service focusing on Heng Credit Customer Risk and the Heng Digital Platform, using Next.js with LINE LIFF integration and building APIs with .NET Core",
    technologies: ["NextJS", ".Net Core"],
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase">// 02. Experience</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Flight Log
          </h2>
        </div>

        <div className="relative space-y-0">
          {/* Timeline spine */}
          <div className="absolute left-0 top-2 h-full w-px bg-border md:left-[136px]" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative grid gap-4 pb-12 pl-8 md:grid-cols-[136px_1fr] md:gap-8 md:pl-0"
            >
              {/* Period */}
              <div className="md:pt-5 md:text-right">
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>

              {/* Glowing dot */}
              <div
                className="absolute left-[-4px] top-5 h-2.5 w-2.5 rounded-full border border-primary bg-background md:left-[130px]"
                style={{ boxShadow: "0 0 8px rgba(0,229,255,0.5)" }}
              />

              {/* Card */}
              <div
                className="rounded border border-border bg-card p-6 transition-all hover:border-primary/40"
                style={{ boxShadow: "inset 0 1px 0 rgba(0,229,255,0.04)" }}
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-foreground">{exp.title}</h3>
                  <span className="text-muted-foreground/50">@</span>
                  <Link
                    href={exp.companyUrl}
                    className="inline-flex items-center gap-1 font-mono text-sm text-primary hover:underline"
                  >
                    {exp.company}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-primary/20 bg-primary/8 px-2 py-0.5 font-mono text-xs text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
