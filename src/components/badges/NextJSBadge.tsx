import NextJSIcon from "../icons/NextJSIcon";

export default function NextJSBadge() {
  return (
    <span className="bg-black/40 px-2 rounded-full text-sm flex items-center gap-2 shadow-lg font-light">
      Next.js <NextJSIcon className="size-4" />
    </span>
  );
}
