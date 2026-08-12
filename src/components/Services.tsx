"use client";

import {
  Search,
  Layers,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/FadeIn";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: Search,
    title: "Études & Conseil",
    description: "Analyser les enjeux pour éclairer les décisions.",
    items: [
      "Études stratégiques",
      "Diagnostics organisationnels",
      "Évaluations et analyses",
    ],
  },
  {
    icon: Layers,
    title: "Organisation & Transformation",
    description:
      "Structurer et transformer les organisations pour améliorer leur performance.",
    items: [
      "Structuration organisationnelle",
      "Optimisation des processus",
      "Conduite du changement",
    ],
  },
  {
    icon: TrendingUp,
    title: "Formation & Développement des compétences",
    description:
      "Développer les compétences nécessaires à la transformation.",
    items: [
      "Formations sur mesure",
      "Ateliers pratiques",
      "Accompagnement humain",
    ],
  },
];

export function Services() {
  return (
    <Section id="expertises">
      <SectionHeader
        title="Nos expertises"
        subtitle="Trois expertises complémentaires pour comprendre, structurer et accompagner vos transformations."
      />

      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <article className="group flex h-full flex-col rounded-xl border border-brand-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-card-hover md:p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange-light">
                <service.icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-brand-orange"
                />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                {service.description}
              </p>
              <div className="my-5 h-px w-12 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              <ul className="mt-auto space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-brand-gray-600"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
