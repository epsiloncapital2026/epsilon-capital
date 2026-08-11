"use client";

import {
  Building2,
  Landmark,
  Users,
  GraduationCap,
  HeartPulse,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/FadeIn";

interface Sector {
  icon: LucideIcon;
  label: string;
}

const sectors: Sector[] = [
  { icon: Building2, label: "Entreprises" },
  { icon: Landmark, label: "Institutions publiques" },
  { icon: Users, label: "Associations & ONG" },
  { icon: GraduationCap, label: "Établissements de formation" },
  { icon: HeartPulse, label: "Santé" },
  { icon: Briefcase, label: "Tourisme & Hôtellerie" },
];

export function Sectors() {
  return (
    <Section bg="gray" id="secteurs">
      <SectionHeader title="Nos secteurs d'intervention" />

      <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {sectors.map((sector) => (
          <StaggerItem key={sector.label}>
            <article className="group flex h-full min-h-[160px] flex-col items-center justify-center rounded-2xl border border-brand-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-light transition-colors duration-300 group-hover:bg-brand-orange/10">
                <sector.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-brand-orange"
                />
              </div>
              <h3 className="text-sm font-medium leading-snug">{sector.label}</h3>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
