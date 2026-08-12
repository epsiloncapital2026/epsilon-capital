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
  { icon: Briefcase, label: "Tourisme & hôtellerie" },
];

export function Sectors() {
  return (
    <Section bg="gray" id="secteurs" className="!py-12 md:!py-16 lg:!py-20">
      <SectionHeader title="Nos secteurs d'intervention" />

      <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {sectors.map((sector) => (
          <StaggerItem key={sector.label}>
            <article className="group flex h-full min-h-[140px] flex-col items-center justify-center rounded-xl border border-brand-gray-200 bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-card-hover">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange-light transition-colors duration-300 group-hover:bg-brand-orange/10">
                <sector.icon
                  size={22}
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
