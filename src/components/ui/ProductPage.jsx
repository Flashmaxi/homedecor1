import PageLayout from "./PageLayout";
import Gallery from "./Gallery";
import { Nazad } from "../nazad/Nazad";
import { useReveal } from "../../hooks/useReveal";

export default function ProductPage({
  eyebrow,
  title,
  paragraphs = [],
  image,
  photos = [],
}) {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <PageLayout title={`Home Decor | ${title}`}>
      <section ref={ref} className="section bg-cream-50 relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-center mb-20 lg:mb-32">
            <div className="xl:col-span-7 order-2 xl:order-none">
              {eyebrow && (
                <span data-reveal className="eyebrow mb-6 inline-flex items-center">
                  <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                  {eyebrow}
                </span>
              )}
              <h1 data-reveal className="display-2 mb-8">{title}</h1>
              <div data-reveal className="h-px w-20 bg-accent mb-8" />
              <div className="space-y-5 max-w-2xl">
                {paragraphs.map((p, i) => (
                  <p key={i} data-reveal className="lead">{p}</p>
                ))}
              </div>
            </div>

            <div className="xl:col-span-5 order-1 xl:order-none">
              <div
                data-reveal
                className="relative aspect-[4/5] frame-luxe"
                style={{ borderTopRightRadius: "140px", borderBottomLeftRadius: "100px" }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {photos.length > 0 && (
            <div data-reveal>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-accent" />
                  <span className="eyebrow">Galerija</span>
                </div>
                <span className="hidden md:block text-xs uppercase tracking-widest text-ink-500">
                  {photos.length} slik{photos.length === 1 ? "a" : photos.length < 5 ? "e" : "a"}
                </span>
              </div>
              <Gallery photos={photos} />
            </div>
          )}
        </div>
        <Nazad />
      </section>
    </PageLayout>
  );
}
