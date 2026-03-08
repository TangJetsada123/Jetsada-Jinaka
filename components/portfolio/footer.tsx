"use client";

import { Github, Linkedin, Mail, Satellite, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,229,255,0.015) 4px, rgba(0,229,255,0.015) 5px)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Socials */}
          <div className="flex items-center gap-6">
            {[
              { href: "https://github.com/TangJetsada123", Icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/jetsada-jinaka-72b986230/", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:jetsada_jinaka@hotmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                aria-label={label}
                className="text-muted-foreground transition-all hover:text-primary"
                style={{ transition: "color 0.2s, filter 0.2s" }}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Satellite
              className="h-3.5 w-3.5 text-primary"
              style={{ filter: "drop-shadow(0 0 5px rgba(0,229,255,0.5))" }}
            />
            <span>Designed &amp; Built by Jetsada Jinaka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
