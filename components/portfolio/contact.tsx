"use client";

import { Mail, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-border" />

      {/* Background pulse glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(0,229,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase">// 04. Contact</p>
        <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
          Establish Connection
        </h2>

        <p className="mb-10 text-pretty text-base leading-relaxed text-muted-foreground">
          Open to new opportunities in satellite systems and aerospace software.
          Whether you have a question about ground station tech or just want to
          say hello — my inbox is always open.
        </p>

        {/* Terminal card */}
        <div
          className="mb-10 rounded border border-border bg-card p-6 text-left"
          style={{ boxShadow: "inset 0 1px 0 rgba(0,229,255,0.06), 0 0 40px rgba(0,229,255,0.04)" }}
        >
          {/* Window controls */}
          <div className="mb-5 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary/50" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">contact.sh</span>
          </div>

          <div className="font-mono text-sm leading-7">
            <p>
              <span className="text-primary/70">$</span>{" "}
              <span className="text-muted-foreground">whoami</span>
            </p>
            <p className="text-foreground">Jetsada Jinaka</p>
            <p className="mt-1">
              <span className="text-primary/70">$</span>{" "}
              <span className="text-muted-foreground">cat contact.txt</span>
            </p>
            <p className="text-foreground">email<span className="text-primary/50">:</span> jetsada_jinaka@hotmail.com</p>
            <p className="text-foreground">location<span className="text-primary/50">:</span> Earth (for now)</p>
            <p className="text-foreground">status<span className="text-primary/50">:</span>{" "}
              <span className="text-primary" style={{ textShadow: "0 0 10px rgba(0,229,255,0.5)" }}>
                accepting_missions
              </span>
            </p>
            <p className="mt-2">
              <span className="text-primary/70">$</span>{" "}
              <span className="animate-pulse text-primary">█</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/20"
            style={{ boxShadow: "0 0 20px rgba(0,229,255,0.2)" }}
          >
            <Mail className="h-4 w-4" />
            Send Message
          </Link>
          <Link
            href="/Jetsada_resume.pdf"
            className="inline-flex items-center gap-2 rounded border border-border bg-transparent px-6 py-3 font-mono text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <Send className="h-4 w-4" />
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
