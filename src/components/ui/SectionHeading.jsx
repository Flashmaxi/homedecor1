export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} max-w-3xl mx-auto`}>
      {eyebrow && (
        <span
          data-reveal
          className={`eyebrow mb-5 ${light ? "text-accent-light" : "text-accent"}`}
        >
          <span className="inline-block w-6 h-px bg-current align-middle mr-3" />
          {eyebrow}
        </span>
      )}
      <h2
        data-reveal
        className={`display-2 ${light ? "text-cream-50" : "text-primary"} mb-6`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          data-reveal
          className={`lead max-w-2xl ${light ? "text-cream-200/80" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
