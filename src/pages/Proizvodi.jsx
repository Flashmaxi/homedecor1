import PageLayout from "../components/ui/PageLayout";
import Service from "../components/Usluge/Service";
import { Nazad } from "../components/nazad/Nazad";
import { useReveal } from "../hooks/useReveal";

export default function Proizvodi() {
  const ref = useReveal();

  return (
    <PageLayout>
      <section ref={ref} className="pt-16 lg:pt-24 pb-0 bg-cream-50 relative">
        <div className="container mx-auto text-center max-w-3xl">
          <span data-reveal className="eyebrow mb-5 inline-flex items-center">
            <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
            Katalog
            <span className="inline-block w-6 h-px bg-accent align-middle ml-3" />
          </span>
          <h1 data-reveal className="display-1 mb-6">Naši proizvodi</h1>
          <p data-reveal className="lead">
            Pažljivo birana kolekcija tekstila i dekorativnih elemenata —
            zavese, draperije, tapete, venecijaneri i hotelski program.
          </p>
        </div>
      </section>
      <Service />
      <Nazad />
    </PageLayout>
  );
}
