import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Politique de confidentialité</h1>
          <p className="mt-4 text-brand-gray-600">
            Page en cours de finalisation. Pour toute demande, contactez{" "}
            <Link
              href="mailto:contact@epsiloncapital.ma"
              className="text-brand-orange hover:underline"
            >
              contact@epsiloncapital.ma
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
