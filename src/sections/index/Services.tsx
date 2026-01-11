import { Code, MessageCircle, Zap } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    name: "Automatización de atención al cliente",
    icon: MessageCircle,
    pitch: "Chatbots y flujos automáticos para responder y captar datos 24/7.",
    bullets: [
      "Respuestas automáticas en WhatsApp",
      "Captura de información de clientes",
      "Atención 24/7 sin personal adicional",
    ],
    cta: "Quiero automatizar atención",
    href: "#contact",
  },
  {
    name: "Automatización de procesos",
    icon: Zap,
    pitch:
      "Optimización de tareas repetitivas para ahorrar tiempo y reducir errores.",
    bullets: [
      "Automatización de emails",
      "Integración con planillas y CRM",
      "Eliminación de tareas manuales",
    ],
    cta: "Quiero automatizar procesos",
    href: "#contact",
  },
  {
    name: "Desarrollo web orientado a conversión",
    icon: Code,
    pitch:
      "Webs y landings pensadas para generar contactos, no solo verse bien.",
    bullets: [
      "Landing pages optimizadas",
      "Formularios inteligentes",
      "SEO y velocidad optimizada",
    ],
    cta: "Quiero mi web",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-24 rounded-3xl my-4"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="services-title" className="text-3xl md:text-4xl font-semibold">
          Servicios
        </h2>
        <p className="text-base md:text-lg text-white/70 mt-2">
          Todos los servicios se integran en sistemas completos según cada
          negocio
        </p>

        <ul
          role="list"
          aria-label="Lista de servicios"
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.name}>
                <ServiceCard
                  title={s.name}
                  subtitle={s.pitch}
                  features={s.bullets}
                  cta={s.cta}
                  Icon={Icon}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  subtitle,
  features,
  cta,
  Icon,
}: {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.2, delay: services.length * 0.03 }}
      className="text-white/80 p-6 transition-colors font-medium rounded-xl justify-between border border-white/5 flex flex-col shadow-xl shadow-black/20 gap-2 h-full overflow-hidden"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex min-w-10 min-h-10 items-center justify-center rounded-xl border bg-linear-to-r from-primary/15 to-primary/10 border-white/5">
          <Icon className="size-5" />
        </span>
        <h3 className="text-xl">{title}</h3>
      </div>

      <p className="text-white/70 text-sm mt-3">{subtitle}</p>

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="/#contact"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/5 px-4 py-2 text-sm duration-300 bg-linear-to-l from-primary/10 to-primary/15 transition shadow hover:shadow-lg hover:shadow-black/20"
        data-analytics="click_cta_servicio"
      >
        {cta}
      </a>
    </motion.div>
  );
}
