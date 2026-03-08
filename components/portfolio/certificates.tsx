"use client";

import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const certificates = [
    {
        title: "Thai Amateur Radio License | Call Sign: E25YUU",
        issuer: "Intermediate Level (กสทช., Thailand)",
        date: "2024",
        credentialUrl: "#",
        badgeUrl: "/placeholder-logo.png",
    },
    {
        title: "U.S. Amateur Radio License (HAM) | Call Sign: KO6EME",
        issuer: " General level (FCC, USA)",
        date: "2024",
        credentialUrl: "#",
        badgeUrl: "/placeholder-logo.png",
    }
];

export function Certificates() {
    return (
        <section id="certificates" className="relative px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <p className="mb-2 font-mono text-xs tracking-widest text-primary/70 uppercase">// 04. Certifications</p>
                    <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                        Mission Credentials
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert) => (
                        <div
                            key={cert.title}
                            className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-white/2 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/4 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10 flex flex-1 flex-col">
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    {cert.credentialUrl !== "#" && (
                                        <Link
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            className="text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </Link>
                                    )}
                                </div>

                                <div className="mt-auto space-y-2">
                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground pt-2">
                                        <span className="text-primary/70">{cert.issuer}</span>
                                        <span className="h-1 w-1 rounded-full bg-border" />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
