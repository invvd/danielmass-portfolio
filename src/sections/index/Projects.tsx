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
    title: "Integración de Chatbot IA para Autónomas",
    description:
      "Integración de Chatwoot con API personalizada para el flujo del cliente utilizando OpenAI, Google Sheets y Meta Business.",
    technologies: [ExpressJSBadge, DockerBadge, NginxBadge, PostgreSQLBadge],
    projectId: "chatbot-autonomas",
  },
  {
    title: "Integración de Chatbot IA para Emisolve",
    description:
      "Integración de Chatwoot con API personalizada para el flujo del cliente utilizando OpenAI, Google Sheets y Meta Business.",
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
    title: "Landing Page para INPROCO",
    description: "Landing page responsiva y optimizada para SEO para INPROCO",
    technologies: [NextJSBadge, TailwindBadge],
    visitLink: "https://inproco.cl",
    projectId: "landing-inproco",
    codeLink: "https://github.com/invvd/inproco.cl",
  },
  {
    title: "Landing Page para Autónomas",
    description: "Landing page responsiva y optimizada para SEO para Autónomas",
    imageAlt: "Captura de pantalla de la landing page de Autónomas",
    imageSrc: "/images/projects/autonomas_landing.webp",
    technologies: [AstroBadge, TailwindBadge],
    visitLink: "https://autonomas.cl",
    projectId: "landing-autonomas",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2>Proyectos</h2>
        <p className="text-base md:text-lg text-white/70 mt-2">
          Explora mis proyectos: diseño moderno, código limpio y alto
          rendimiento.
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
    imageSrc,
    imageAlt,
    technologies,
    visitLink,
    codeLink,
    projectId,
  } = project;
  return (
    <div className="p-4 rounded-xl hover:shadow-lg transition-shadow duration-200 flex flex-col backdrop-blur-lg backdrop-brightness-75 shadow-lg shadow-black/20">
      {/* Screenshot */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title || "Project screenshot"}
          className="rounded-xl mb-2"
          loading="lazy"
        />
      )}

      <h3 className="text-xl mb-2">{title}</h3>
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((Technology, index) => (
          <Technology key={index} />
        ))}
      </div>
      <p className="text-white/80 text-sm mb-6">{description}</p>

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
