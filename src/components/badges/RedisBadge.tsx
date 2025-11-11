import RedisIcon from "../icons/RedisIcon";

export default function RedisBadge() {
  return (
    <span className="bg-[#C6302B]/20 px-2 rounded-full text-sm flex items-center gap-2 shadow-lg font-light">
      Redis <RedisIcon className="size-4" />
    </span>
  );
}
