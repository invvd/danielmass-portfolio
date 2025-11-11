import NginxIcon from "../icons/NginxIcon";

export default function NginxBadge() {
  return (
    <span className="bg-[#019639]/20 px-2 rounded-full text-sm flex items-center gap-2 shadow-lg font-light">
      Nginx <NginxIcon className="size-4" />
    </span>
  );
}
