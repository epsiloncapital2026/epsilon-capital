"use client";

import { Target, Puzzle, Eye, CheckCircle, type LucideIcon } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/FadeIn";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueProp[] = [
  {
    icon: Target,
    title: "Approche analytique",
    description: "Des diagnostics rigoureux fondés sur des données et une connaissance terrain.",
  },
  {
    icon: Puzzle,
    title: "Solutions adaptées",
    description: "Des recommandations sur mesure, alignées avec votre contexte et vos enjeux.",
  },
  {
    icon: Eye,
    title: "Vision stratégique",
    description: "Une lecture globale qui relie enjeux organisationnels et objectifs business.",
  },
  {
    icon: CheckCircle,
    title: "Résultats mesurables",
    description: "Un suivi concret des indicateurs de performance et de la mise en œuvre.",
  },
];

export function ValueProps() {
  return (
    <Section bg="gray">
      <SectionHeader title="Notre valeur ajoutée" />

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <StaggerItem key={value.title}>
            <article className="group h-full rounded-2xl border border-brand-gray-200 bg-white p-6 transition-all duration-300 hover:border-brand-orange/30 hover:shadow-card">
              <value.icon
                size={24}
                strokeWidth={1.5}
                className="text-brand-orange"
              />
              <h3 className="mt-4 font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                {value.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
