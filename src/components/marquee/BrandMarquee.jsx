const BRANDS = [
  "Adeko",
  "FD",
  "Keops",
  "Dali",
  "Akar",
  "Gunflex",
  "English Decor",
  "Hohmann",
  "FR-One",
  "Rasch",
  "Marburg",
  "Living Walls",
  "Casa Deco",
];

export default function BrandMarquee() {
  // Double the list for a seamless loop
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="py-14 lg:py-20 bg-cream-100 border-y border-accent/15 overflow-x-clip relative">
      <div className="container mx-auto mb-8 lg:mb-10">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="eyebrow">Partneri i brendovi</span>
          <span className="h-px w-10 bg-accent" />
        </div>
      </div>

      <div
        className="relative py-4"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee gap-12 lg:gap-20 items-center">
          {items.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-12 lg:gap-20 shrink-0"
            >
              <span
                className="font-primary text-3xl lg:text-5xl text-primary/40 hover:text-accent transition-colors duration-700 whitespace-nowrap italic"
                style={{ lineHeight: 1.3, paddingBottom: "0.15em" }}
              >
                {brand}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
