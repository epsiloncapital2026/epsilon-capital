"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16 lg:px-16 lg:pb-32 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="max-w-xl">
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-[3.25rem]">
            Nous accompagnons les organisations dans leurs{" "}
            <span className="text-brand-orange">transformations.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-gray-600 md:text-lg">
            De l&apos;analyse stratégique à la mise en œuvre opérationnelle, nous
            intervenons aux côtés de dirigeants et équipes pour structurer,
            optimiser et développer leurs organisations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#expertises"
              size="lg"
              icon={<ArrowRight size={18} strokeWidth={2} />}
            >
              Découvrir nos expertises
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Échanger avec un consultant
            </Button>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-brand-gray-100 pt-8 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-2 text-sm text-brand-gray-600">
              <CheckCircle2
                size={18}
                className="shrink-0 text-brand-orange"
                strokeWidth={1.5}
              />
              <span>
                <strong className="font-semibold text-brand-black">+50</strong>{" "}
                organisations accompagnées
              </span>
            </div>
            <div className="hidden h-4 w-px bg-brand-gray-200 sm:block" />
            <div className="flex items-center gap-4 opacity-60 grayscale">
              {["Institution", "Entreprise", "ONG", "Formation"].map((name) => (
                <span
                  key={name}
                  className="text-xs font-semibold uppercase tracking-wider text-brand-gray-400"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
            {/* Abstract brand gradient illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-light via-white to-brand-gray-100" />
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-brand-orange/15 blur-2xl" />

            {/* Geometric pattern */}
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.07]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1" fill="#0A0A0A" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Concentric circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[70%] w-[70%]">
                {[100, 75, 50, 25].map((size, i) => (
                  <div
                    key={size}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-gray-200/60"
                    style={{
                      width: `${size}%`,
                      height: `${size}%`,
                      opacity: 1 - i * 0.2,
                    }}
                  />
                ))}
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange shadow-lg shadow-brand-orange/30" />
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="absolute bottom-6 left-6 rounded-xl border border-white/80 bg-white/90 px-4 py-3 shadow-card backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-400">
                Expertise
              </p>
              <p className="mt-0.5 text-sm font-semibold">Transformation</p>
            </div>
            <div className="absolute right-6 top-6 rounded-xl border border-white/80 bg-white/90 px-4 py-3 shadow-card backdrop-blur-sm">
              <p className="text-2xl font-bold text-brand-orange">15+</p>
              <p className="text-xs text-brand-gray-600">ans d&apos;expérience</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
