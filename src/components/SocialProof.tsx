"use client";

import { Section, SectionHeader } from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/FadeIn";

const stats = [
  { value: "15", suffix: " ans", label: "d'expertise en conseil" },
  { value: "50", suffix: "+", label: "missions réalisées" },
  { value: "6", suffix: "", label: "secteurs d'intervention" },
];

const clientLogos = [
  "Ministère",
  "Groupe industriel",
  "Université",
  "Association",
  "Hôpital public",
  "Réseau hôtelier",
];

export function SocialProof() {
  return (
    <Section bg="gray" id="references">
      <SectionHeader
        title="Ils nous font confiance"
        subtitle="Des organisations publiques et privées nous confient leurs projets de transformation."
      />

      <Stagger className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {clientLogos.map((name) => (
          <StaggerItem key={name}>
            <div className="flex h-20 items-center justify-center rounded-xl border border-brand-gray-200 bg-white px-4 transition-all duration-300 hover:border-brand-gray-300 hover:shadow-card">
              <span className="text-center text-xs font-semibold uppercase tracking-wider text-brand-gray-400">
                {name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger className="grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="rounded-2xl border border-brand-gray-200 bg-white p-8 text-center transition-all duration-300 hover:border-brand-orange/30 hover:shadow-card">
              <p className="text-4xl font-bold tracking-tight text-brand-black md:text-5xl">
                {stat.value}
                <span className="text-brand-orange">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-brand-gray-600">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
