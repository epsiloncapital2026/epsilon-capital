"use client";

import { Search, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/FadeIn";

const steps = [
  {
    icon: Search,
    title: "Étudier",
    description:
      "Diagnostic approfondi, analyse des enjeux et identification des leviers de transformation.",
  },
  {
    icon: Layers,
    title: "Structurer",
    description:
      "Conception de solutions adaptées, plan d'action et feuille de route opérationnelle.",
  },
  {
    icon: TrendingUp,
    title: "Développer",
    description:
      "Accompagnement à la mise en œuvre, formation des équipes et suivi des résultats.",
  },
];

export function Approach() {
  return (
    <Section id="approche">
      <SectionHeader
        title="Notre approche"
        subtitle="Une méthodologie éprouvée en trois étapes pour garantir des transformations durables."
      />

      <Stagger className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <StaggerItem key={step.title} className="relative">
            <article className="flex h-full flex-col items-center rounded-2xl border border-brand-gray-200 bg-white p-8 text-center transition-all duration-300 hover:border-brand-orange/30 hover:shadow-card">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange-light">
                <step.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-brand-orange"
                />
              </div>
              <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Étape {index + 1}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">
                {step.description}
              </p>
            </article>

            {index < steps.length - 1 && (
              <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:block">
                <ArrowRight
                  size={20}
                  className="text-brand-orange/40"
                  strokeWidth={1.5}
                />
              </div>
            )}
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
