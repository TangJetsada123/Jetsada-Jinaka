"use client";

export function OrbitRing({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <svg viewBox="0 0 500 500" className="h-full w-full">
        <defs>
          {/* Outer orbit stroke gradient */}
          <linearGradient id="og1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#00e5ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </linearGradient>
          {/* Inner ring gradient */}
          <linearGradient id="og2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ellipse orbit — tilted */}
        <ellipse
          cx="250" cy="250" rx="230" ry="70"
          fill="none"
          stroke="url(#og1)"
          strokeWidth="1"
          className="animate-[spin_80s_linear_infinite]"
          style={{ transformOrigin: "250px 250px", transform: "rotate(-18deg)" }}
        />

        {/* Inner ellipse — counter rotate, purple */}
        <ellipse
          cx="250" cy="250" rx="160" ry="48"
          fill="none"
          stroke="url(#og2)"
          strokeWidth="0.8"
          strokeDasharray="8 14"
          className="animate-[spin_50s_linear_infinite_reverse]"
          style={{ transformOrigin: "250px 250px", transform: "rotate(-18deg)" }}
        />

        {/* Satellite dot on outer orbit */}
        <circle
          cx="480" cy="250" r="5"
          fill="#00e5ff"
          filter="url(#glow)"
          className="animate-[spin_80s_linear_infinite]"
          style={{ transformOrigin: "250px 250px", transform: "rotate(-18deg)" }}
        />
        {/* Second smaller dot on inner orbit */}
        <circle
          cx="410" cy="250" r="3"
          fill="#a855f7"
          filter="url(#glow)"
          className="animate-[spin_50s_linear_infinite_reverse]"
          style={{ transformOrigin: "250px 250px", transform: "rotate(-18deg)" }}
        />
      </svg>
    </div>
  );
}
