"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-black">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-transparent" />
      <div className="section-padding relative">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Collaborer avec Epsilon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Epsilon développe un réseau de consultants et d&apos;experts mobilisés
            selon les besoins des missions. Nous collaborons avec des
            professionnels expérimentés partageant une même exigence de
            rigueur, d&apos;adaptation et d&apos;impact opérationnel.
          </p>
          <Button
            href="mailto:contact@epsiloncapital.ma?subject=Rejoindre%20le%20r%C3%A9seau%20d'experts%20Epsilon%20Capital"
            variant="outline"
            size="lg"
            className="mt-8"
            icon={<ArrowRight size={18} strokeWidth={2} />}
          >
            Rejoindre notre réseau d&apos;experts
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
