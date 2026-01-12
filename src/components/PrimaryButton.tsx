export default function PrimaryButton({
  href,
  cta,
  Icon,
  className,
  disabled,
  target,
}: {
  href: string;
  cta: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  disabled?: boolean;
  target?: string;
}) {
  if (disabled) {
    return (
      <div
        className={`bg-linear-to-r from-primary/10 to-primary/30 border border-white/5 text-white/80 px-2 py-1 rounded-full shadow-lg transition-all items-center flex gap-2 group ${className}`}
      >
        <div className="opacity-25 flex items-center gap-2 cursor-not-allowed">
          {cta} <Icon className="size-5" />
        </div>
      </div>
    );
  }

  return (
    <a
      target={target}
      aria-disabled={disabled}
      href={href}
      className={`bg-linear-to-r from-primary/10 to-primary/30 border border-white/5 text-white/80 px-2 py-1 rounded-full hover:to-primary/30 hover:text-white shadow-lg transition-all items-center flex gap-2 group ${className}`}
    >
      {cta} <Icon className="size-5" />
    </a>
  );
}
