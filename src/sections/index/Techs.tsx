import Nextjs from "../../components/logos/Nextjs";
import ReactLogo from "../../components/logos/ReactLogo";
import Typescript from "../../components/logos/Typescript";
import Astro from "../../components/logos/astro";
import PostgreSQL from "../../components/logos/PostgreSQL";
import MongoDB from "../../components/logos/MongoDB";
import MySQL from "../../components/logos/MySQL";
import TailwindCSS from "../../components/logos/TailwindCSS";
import Strapi from "../../components/logos/Strapi";
import N8n from "../../components/logos/N8n";
import Python from "../../components/logos/Python";
import Wordpress from "../../components/logos/Wordpress";
import Git from "../../components/logos/git";

const techs = [
  {
    name: "React",
    Logo: ReactLogo,
  },
  {
    name: "Next.js",
    Logo: Nextjs,
  },
  {
    name: "Typescript",
    Logo: Typescript,
  },
  {
    name: "Astro",
    Logo: Astro,
  },
  {
    name: "PostgreSQL",
    Logo: PostgreSQL,
  },
  {
    name: "MongoDB",
    Logo: MongoDB,
  },
  {
    name: "MySQL",
    Logo: MySQL,
  },
  {
    name: "TailwindCSS",
    Logo: TailwindCSS,
  },
  {
    name: "Git",
    Logo: Git,
  },
  {
    name: "Strapi",
    Logo: Strapi,
  },
  {
    name: "N8n",
    Logo: N8n,
  },
  {
    name: "Python",
    Logo: Python,
  },
  {
    name: "WordPress",
    Logo: Wordpress,
  },
];

export default function Techs() {
  return (
    <section id="services" aria-labelledby="services-title" className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="services-title" className="text-3xl md:text-4xl font-semibold">
          Tecnologías
        </h2>

        <ul
          role="list"
          aria-label="Lista de tecnologías"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <li>
            {techs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
}

function TechCard({
  tech,
}: {
  tech: {
    name: string;
    Logo: React.ComponentType<any>;
  };
}) {
  return (
    <div className="flex flex-col border border-white/5 rounded-full p-6 gap-4 items-center text-center hover:bg-white/5 transition">
      <div className="flex">
        <tech.Logo />
      </div>
      <span className="text-lg font-medium">{tech.name}</span>
    </div>
  );
}
