import AstroIcon from "./icons/AstroIcon";

export default function AstroBadge() {
  return (
    <span className="from-[#DA3440]/20 to-[#EF40F5]/20 bg-gradient-to-r px-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
      Astro <AstroIcon className="size-3" />
    </span>
  );
}
