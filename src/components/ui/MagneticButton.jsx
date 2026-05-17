import { Link } from "react-router-dom";
import { useMagnetic } from "../../hooks/useMagnetic";

/**
 * Drop-in magnetic wrapper. Pass `as="a"`, `href` for anchor, `to` for Link, or default button.
 */
export default function MagneticButton({
  as,
  to,
  href,
  className = "",
  children,
  strength = 0.3,
  ...rest
}) {
  const ref = useMagnetic({ strength });
  const inner = (
    <span className="inline-flex items-center gap-3" data-magnetic-inner>
      {children}
    </span>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={className} {...rest}>
        {inner}
      </Link>
    );
  }
  if (href || as === "a") {
    return (
      <a ref={ref} href={href} className={className} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button ref={ref} className={className} {...rest}>
      {inner}
    </button>
  );
}
