"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12 lg:px-16 lg:pb-24 lg:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <FadeIn className="max-w-xl">
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3rem]">
            Nous accompagnons les organisations dans leurs{" "}
            <span className="text-brand-orange">transformations.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-brand-gray-600 md:text-lg">
            De l&apos;analyse stratégique à la mise en œuvre opérationnelle, nous
            accompagnons les organisations pour structurer, optimiser et
            développer leurs activités.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[5/4]">
            <Image
              src="/photo.png"
              alt="Réunion de travail — conseil et accompagnement organisationnel"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
