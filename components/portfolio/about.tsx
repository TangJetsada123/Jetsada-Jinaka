"use client";

import { Radio, Satellite, Server, Signal } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    category: "Satellite Systems",
    icon: Satellite,
    items: ["Telemetry Processing", "Orbit Determination", "RF Engineering"],
  },
  {
    category: "Ground Station",
    icon: Radio,
    items: ["Antenna Control", "Signal Processing"],
  },
  {
    category: "Web & Management",
    icon: Server,
    items: ["Modern Websites", "Admin Dashboards", "Internal Tools", "Content Management"],
  },
  {
    category: "Software",
    icon: Server,
    items: ["React / TypeScript", "C# .NET", "Python", "Go"],
  },
  {
    category: "Infrastructure",
    icon: Signal,
    items: ["Docker", "Proxmox VE", "Ubuntu server", "PostgreSQL", "MongoDB", "Grafana"],
  },
];


export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      {/* Subtle divider line */}
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase">// 01. About</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Mission Profile
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          {/* Profile & Bio */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="group relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5" style={{ width: "200px", height: "200px", boxShadow: "0 0 30px rgba(0,229,255,0.05)" }}>
                <Image
                  src="/profile2.jpg"
                  alt="Jetsada Jinaka"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110  hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </div>

              <div className="space-y-4">
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  I am graduated with a bachelor's degree in computer engineering at Chiangmai University. Now, I am
                  Ground station Software Engineer at the Thai Space Consortium (TSC) under the National Astronomical
                  Research Institute of Thailand (NARIT).
                </p>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  I am passionate about the program and coding. I am keen to
                  continue learning new skills and enjoy working in software and learning new things.
                </p>
              </div>
            </div>
          </div>

          {/* Skill cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="group rounded border border-border bg-card p-5 transition-all hover:border-primary/40"
                style={{ boxShadow: "inset 0 1px 0 rgba(0,229,255,0.04)" }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded bg-primary/10 p-2">
                    <skill.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <span className="text-primary/60">{">"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
