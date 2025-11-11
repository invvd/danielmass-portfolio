import TailwindCSSIcon from "../icons/TailwindCSSIcon";

export default function TailwindBadge() {
  return (
    <span className="bg-[#00BCFF]/20 px-2 rounded-full text-sm flex items-center gap-2 shadow-lg font-light">
      Tailwind <TailwindCSSIcon className="size-3" />
    </span>
  );
}
