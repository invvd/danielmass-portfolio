import { ChevronDown } from "lucide-react";
import AstroBadge from "../../components/AstroBadge";
import TailwindBadge from "../../components/badges/TailwindBadge";
import ExternalLinkIcon from "../../components/icons/ExternalLinkIcon";
import GitHubIcon from "../../components/icons/GitHubIcon";
import PrimaryButton from "../../components/PrimaryButton";
import NextJSBadge from "../../components/badges/NextJSBadge";
import ExpressJSBadge from "../../components/badges/ExpressJSBadge";
import DockerBadge from "../../components/badges/DockerBadge";
import RedisBadge from "../../components/badges/RedisBadge";
import NginxBadge from "../../components/badges/NginxBadge";
import PostgreSQLBadge from "../../components/badges/PostgreSQLBadge";

const projects = [
  {
    title: "Chatbot con IA para atención automatizada",
    description:
      "Sistema que responde automáticamente en WhatsApp y Facebook, reduciendo tiempo de respuesta a menos de 1 minuto y liberando más de 15 horas semanales.",
    result: "80% de consultas resueltas automáticamente",
    technologies: [ExpressJSBadge, DockerBadge, NginxBadge, PostgreSQLBadge],
    projectId: "chatbot-autonomas",
  },
  {
    title: "Sistema de captación automática para empresa de servicios",
    description:
      "Integración completa de web con WhatsApp, CRM y respuestas automáticas que permitió captar 3x más contactos mensuales.",
    result: "300% más contactos en 30 días",
    technologies: [
      ExpressJSBadge,
      DockerBadge,
      RedisBadge,
      NginxBadge,
      PostgreSQLBadge,
    ],
    projectId: "chatbot-autonomas",
  },
  {
    title: "Landing optimizada para conversión",
    description:
      "Sitio web rápido y optimizado para SEO que aumentó las conversiones en un 150% y carga en menos de 1 segundo.",
    result: "150% más conversiones",
    technologies: [NextJSBadge, TailwindBadge],
    visitLink: "https://inproco.cl",
    projectId: "landing-inproco",
    codeLink: "https://github.com/invvd/inproco.cl",
  },
  {
    title: "Web moderna con captación de leads",
    description:
      "Landing page responsiva con formularios inteligentes y análisis integrado para captar y organizar contactos automáticamente.",
    result: "Captura de contactos 24/7",
    imageAlt: "Captura de pantalla de la landing page de Autónomas",
    imageSrc: "/images/projects/autonomas_landing.webp",
    technologies: [AstroBadge, TailwindBadge],
    visitLink: "https://autonomas.cl",
    projectId: "landing-autonomas",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-24 bg-black/20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2>Casos de éxito</h2>
        <p className="text-base md:text-lg text-white/70 mt-2">
          Resultados reales que he ayudado a conseguir a otros negocios
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const {
    title,
    description,
    result,
    imageSrc,
    imageAlt,
    technologies,
    visitLink,
    codeLink,
    projectId,
  } = project;
  return (
    <div className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 flex flex-col backdrop-blur-lg backdrop-brightness-75 shadow-lg shadow-black/20 border border-white/5">
      {/* Screenshot */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title || "Project screenshot"}
          className="rounded-xl mb-4"
          loading="lazy"
        />
      )}

      <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>

      {/* Result Badge */}
      {result && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-3 w-fit">
          <span>✓</span>
          {result}
        </div>
      )}

      <p className="text-white/80 text-sm md:text-base mb-4">{description}</p>

      {/* Technologies - Minimizadas */}
      <div className="flex flex-wrap gap-2 mb-4 opacity-60">
        {technologies.slice(0, 3).map((Technology, index) => (
          <Technology key={index} />
        ))}
        {technologies.length > 3 && (
          <span className="text-xs text-white/50">
            +{technologies.length - 3}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div>
        <div className="flex gap-2">
          {visitLink && (
            <PrimaryButton
              className="flex-1 justify-center mb-4"
              cta="Visitar"
              Icon={ExternalLinkIcon}
              href={visitLink || ""}
              disabled={visitLink ? false : true}
            />
          )}
          {codeLink && (
            <PrimaryButton
              className="flex-1 justify-center mb-4"
              cta="Ver código"
              Icon={GitHubIcon}
              href={codeLink}
            />
          )}
        </div>
        <a
          className="flex-1 bg-black/30 hover:bg-black/50 transition text-center flex justify-center items-center gap-2 p-1 rounded-full group border border-white/5"
          href={`/projects/${projectId}`}
        >
          Saber más
          <ChevronDown className="size-5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
