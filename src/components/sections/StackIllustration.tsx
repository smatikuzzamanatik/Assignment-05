import * as React from "react"
import { cn } from "@/lib/utils"

export type StackIllustrationProps = React.ComponentProps<"div">

/** Renders an isometric multi-tiered development stack illustration with glowing circuits and layers. */
export function StackIllustration({
  className,
  ...props
}: StackIllustrationProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none",
        className
      )}
      {...props}
    >
      <div className="absolute -inset-4 -z-10 animate-pulse rounded-3xl bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-600/20 opacity-70 blur-2xl" />
      <svg
        viewBox="0 0 480 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[420px] drop-shadow-2xl"
        role="img"
        aria-label="Layered 3D isometric architecture stack illustration"
      >
        <defs>
          <linearGradient
            id="neonGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="glowViolet" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="plateTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Layer / Database & Infrastructure Layer */}
        <g transform="translate(240, 310)">
          {/* Base platform */}
          <path
            d="M 0 -70 L 170 15 L 0 100 L -170 15 Z"
            fill="url(#plateTop)"
            stroke="url(#neonGradient1)"
            strokeWidth="3"
          />
          {/* Base platform depth */}
          <path
            d="M -170 15 L 0 100 L 0 120 L -170 35 Z"
            fill="#090d16"
            stroke="#6366f1"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <path
            d="M 0 100 L 170 15 L 170 35 L 0 120 Z"
            fill="#030712"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Database server canisters */}
          <g transform="translate(-80, -10)">
            <ellipse
              cx="0"
              cy="0"
              rx="28"
              ry="14"
              fill="#0284c7"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <path
              d="M -28 0 v 18 c 0 7.7 12.5 14 28 14 s 28 -6.3 28 -14 v -18"
              fill="#0369a1"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <ellipse
              cx="0"
              cy="9"
              rx="24"
              ry="10"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </g>

          <g transform="translate(0, 20)">
            <ellipse
              cx="0"
              cy="0"
              rx="32"
              ry="16"
              fill="#7c3aed"
              stroke="#c084fc"
              strokeWidth="2"
            />
            <path
              d="M -32 0 v 22 c 0 8.8 14.3 16 32 16 s 32 -7.2 32 -16 v -22"
              fill="#6d28d9"
              stroke="#c084fc"
              strokeWidth="2"
            />
            <ellipse
              cx="0"
              cy="11"
              rx="28"
              ry="12"
              fill="none"
              stroke="#e9d5ff"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </g>

          <g transform="translate(80, -10)">
            <ellipse
              cx="0"
              cy="0"
              rx="28"
              ry="14"
              fill="#059669"
              stroke="#34d399"
              strokeWidth="2"
            />
            <path
              d="M -28 0 v 18 c 0 7.7 12.5 14 28 14 s 28 -6.3 28 -14 v -18"
              fill="#047857"
              stroke="#34d399"
              strokeWidth="2"
            />
            <ellipse
              cx="0"
              cy="9"
              rx="24"
              ry="10"
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </g>

          {/* Glowing circuit lines */}
          <path
            d="M -90 10 L -40 35 L 40 35 L 90 10"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="4 4"
            filter="url(#glowFilter)"
          />
        </g>

        {/* Pillars connecting Base to Middle Layer */}
        <line
          x1="90"
          y1="280"
          x2="90"
          y2="200"
          stroke="#818cf8"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="390"
          y1="280"
          x2="390"
          y2="200"
          stroke="#f472b6"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Middle Layer / Backend Services Layer */}
        <g transform="translate(240, 200)">
          <path
            d="M 0 -65 L 150 10 L 0 85 L -150 10 Z"
            fill="url(#plateTop)"
            stroke="url(#glowViolet)"
            strokeWidth="3"
          />
          <path
            d="M -150 10 L 0 85 L 0 100 L -150 25 Z"
            fill="#090d16"
            stroke="#6366f1"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <path
            d="M 0 85 L 150 10 L 150 25 L 0 100 Z"
            fill="#030712"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Microchips & Nodes */}
          <rect
            x="-40"
            y="-15"
            width="80"
            height="40"
            rx="8"
            fill="#1e1b4b"
            stroke="#a855f7"
            strokeWidth="2"
          />
          <path
            d="M -25 5 L 25 5"
            stroke="#f43f5e"
            strokeWidth="3"
            filter="url(#glowFilter)"
          />
          <circle cx="-15" cy="5" r="4" fill="#38bdf8" />
          <circle cx="15" cy="5" r="4" fill="#ec4899" />
        </g>

        {/* Pillars connecting Middle to Top Layer */}
        <line
          x1="110"
          y1="180"
          x2="110"
          y2="110"
          stroke="#38bdf8"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="370"
          y1="180"
          x2="370"
          y2="110"
          stroke="#a855f7"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Top Layer / Frontend & UI Layer */}
        <g transform="translate(240, 95)">
          <path
            d="M 0 -60 L 135 10 L 0 80 L -135 10 Z"
            fill="url(#plateTop)"
            stroke="url(#cyanGlow)"
            strokeWidth="3.5"
          />
          <path
            d="M -135 10 L 0 80 L 0 95 L -135 25 Z"
            fill="#090d16"
            stroke="#0284c7"
            strokeWidth="1.5"
          />
          <path
            d="M 0 80 L 135 10 L 135 25 L 0 95 Z"
            fill="#030712"
            stroke="#0369a1"
            strokeWidth="1.5"
          />

          {/* Central Processor / Core Chip with Aa typography icon */}
          <g transform="translate(0, 10)">
            <rect
              x="-35"
              y="-30"
              width="70"
              height="50"
              rx="10"
              fill="url(#neonGradient1)"
              filter="url(#glowFilter)"
              opacity="0.9"
            />
            <rect
              x="-30"
              y="-25"
              width="60"
              height="40"
              rx="8"
              fill="#0f172a"
            />
            <text
              x="0"
              y="2"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="20"
              fontWeight="bold"
            >
              Aa
            </text>
          </g>

          {/* Floating UI orbit elements */}
          <circle
            cx="-75"
            cy="0"
            r="10"
            fill="#38bdf8"
            filter="url(#glowFilter)"
          />
          <circle
            cx="75"
            cy="5"
            r="12"
            fill="#ec4899"
            filter="url(#glowFilter)"
          />
          <circle
            cx="0"
            cy="-35"
            r="8"
            fill="#f97316"
            filter="url(#glowFilter)"
          />
        </g>
      </svg>
    </div>
  )
}
