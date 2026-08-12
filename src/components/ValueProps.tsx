"use client";

import {
  BarChart3,
  Puzzle,
  Network,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/FadeIn";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueProp[] = [
  {
    icon: BarChart3,
    title: "Approche analytique",
    description:
      "Des diagnostics rigoureux fondés sur les données, l'analyse des enjeux et la compréhension du terrain.",
  },
  {
    icon: Puzzle,
    title: "Solutions adaptées",
    description:
      "Des recommandations construites selon le contexte, les contraintes et les priorités de chaque organisation.",
  },
  {
    icon: Network,
    title: "Vision systémique",
    description:
      "Une lecture globale reliant stratégie, organisation, processus et compétences.",
  },
  {
    icon: ClipboardList,
    title: "Orientation opérationnelle",
    description:
      "Des recommandations traduites en priorités, plans d'action et modalités de suivi.",
  },
];

export function ValueProps() {
  return (
    <Section bg="gray">
      <SectionHeader title="Notre valeur ajoutée" />

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <StaggerItem key={value.title}>
            <article className="group h-full rounded-xl border border-brand-gray-200 bg-white p-5 transition-all duration-300 hover:border-brand-orange/30 hover:shadow-card md:p-6">
              <value.icon
                size={22}
                strokeWidth={1.5}
                className="text-brand-orange"
              />
              <h3 className="mt-3 font-semibold">{value.title}</h3>
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
