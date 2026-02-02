export default function PrimaryButton({
  href,
  cta,
  Icon,
  className,
  disabled,
  target,
  rel,
}: {
  href?: string;
  cta: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
}) {
  if (href) {
    return (
      <a
        rel={rel}
        target={target}
        aria-disabled={disabled}
        {...(href ? { href } : {})}
        className={`bg-linear-to-r from-primary/10 to-primary/30 border border-white/5 text-white/80 px-2 py-1 rounded-full hover:to-primary/30 hover:text-white shadow-lg transition-all items-center flex gap-2 group ${className}`}
      >
        {cta} {Icon && <Icon className="size-5" />}
      </a>
    );
  }

  return (
    <div
      className={`bg-linear-to-r from-primary/10 to-primary/30 border border-white/5 text-white/80 px-2 py-1 rounded-full shadow-lg transition-all items-center flex gap-2 group ${className}`}
    >
      <div
        className={`flex items-center gap-2 ${disabled ? "cursor-not-allowed opacity-25" : ""}`}
      >
        {cta} {Icon && <Icon className="size-5" />}
      </div>
    </div>
  );
}
