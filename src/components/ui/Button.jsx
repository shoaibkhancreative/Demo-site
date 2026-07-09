import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-ink text-white hover:bg-[#1c2340] shadow-[0_1px_2px_rgba(16,21,43,0.06)]",
  gold:
    "bg-gold text-white hover:bg-gold-deep shadow-[0_4px_14px_-4px_rgba(184,134,61,0.55)]",
  outline:
    "bg-transparent text-ink border border-line-strong hover:border-ink hover:bg-surface",
  ghost: "bg-transparent text-ink-soft hover:text-ink",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} strokeWidth={2.25} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} strokeWidth={2.25} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
