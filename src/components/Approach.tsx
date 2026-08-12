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
      "Conception de solutions adaptées, définition du plan d'action et structuration de la feuille de route.",
  },
  {
    icon: TrendingUp,
    title: "Développer",
    description:
      "Accompagnement à la mise en œuvre, développement des compétences et suivi des actions.",
  },
];

export function Approach() {
  return (
    <Section id="approche" className="!py-12 md:!py-16 lg:!py-20">
      <SectionHeader
        title="Notre approche"
        subtitle="Une démarche structurée en trois étapes pour accompagner des transformations durables."
      />

      <Stagger className="grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <StaggerItem key={step.title} className="relative">
            <article className="flex h-full flex-col items-center rounded-xl border border-brand-gray-200 bg-white p-6 text-center transition-all duration-300 hover:border-brand-orange/30 hover:shadow-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light">
                <step.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-brand-orange"
                />
              </div>
              <span className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Étape {index + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                {step.description}
              </p>
            </article>

            {index < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block lg:-right-4">
                <ArrowRight
                  size={18}
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
