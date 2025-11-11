import DockerIcon from "../icons/DockerIcon";

export default function DockerBadge() {
  return (
    <span className="bg-[#008FE2]/20 px-2 rounded-full text-sm flex items-center gap-2 font-light shadow-lg">
      Docker <DockerIcon className="size-4" />
    </span>
  );
}
