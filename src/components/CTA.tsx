"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-black">
      <div className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Collaborer avec Epsilon
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Epsilon développe un réseau de consultants et d&apos;experts mobilisés
              selon les besoins des missions. Nous collaborons avec des
              professionnels expérimentés partageant une même exigence de
              rigueur, d&apos;adaptation et d&apos;impact opérationnel.
            </p>
            <Button
              href="mailto:contact@epsiloncapital.ma?subject=Rejoindre%20le%20r%C3%A9seau%20d'experts%20Epsilon%20Capital"
              variant="outline"
              size="lg"
              className="mt-7"
              icon={<ArrowRight size={18} strokeWidth={2} />}
            >
              Rejoindre notre réseau d&apos;experts
            </Button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-800 via-brand-black to-brand-orange/20" />
              <svg
                className="absolute inset-0 h-full w-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="mesh"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 60 0 L 0 0 0 60"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mesh)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 p-8">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-white/30"
                      style={{ opacity: 0.3 + (i % 3) * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
