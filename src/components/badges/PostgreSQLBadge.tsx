import PostgreSQLIcon from "../icons/PostgreSQLIcon";

export default function PostgreSQLBadge() {
  return (
    <span className="bg-[#336791]/20 px-2 rounded-full text-sm flex items-center gap-2 shadow-lg font-light">
      PostgreSQL <PostgreSQLIcon className="size-4" />
    </span>
  );
}
