import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Notre approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-gray-900 text-white">
      <div className="section-padding pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Logo height={80} variant="dark" />
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Cabinet de conseil en stratégie, organisation, transformation et
                développement des compétences.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Liens rapides
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contact@epsiloncapital.ma"
                    className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Mail size={16} strokeWidth={1.5} />
                    contact@epsiloncapital.ma
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.epsiloncapital.ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Globe size={16} strokeWidth={1.5} />
                    www.epsiloncapital.ma
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/40">
              © 2026 Epsilon Capital. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/40 transition-colors hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
