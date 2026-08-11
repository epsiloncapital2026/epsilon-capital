"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Globe, Linkedin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

const quickLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Notre approche", href: "#approche" },
  { label: "Références", href: "#references" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-brand-gray-900 text-white">
      <div className="section-padding pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* À propos */}
            <div>
              <Logo size={52} variant="image" />
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Cabinet de conseil en transformation organisationnelle.
                Études stratégiques, organisation et formation.
              </p>
              <p className="mt-4 text-sm italic text-white/40">
                growth <span className="text-brand-orange">engendered</span>.
              </p>
            </div>

            {/* Liens rapides */}
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

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+212522000000"
                    className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Phone size={16} strokeWidth={1.5} />
                    +212 5 22 00 00 00
                  </a>
                </li>
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

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Restez informé
              </h3>
              <p className="mb-4 text-sm text-white/60">
                Recevez nos actualités et insights sur la transformation
                organisationnelle.
              </p>
              {submitted ? (
                <p className="text-sm text-brand-orange">
                  Merci pour votre inscription !
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-orange/50"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="w-full sm:w-auto"
                    icon={<ArrowRight size={16} strokeWidth={2} />}
                  >
                    S&apos;inscrire
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Epsilon Capital. Tous droits réservés.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-brand-orange"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
