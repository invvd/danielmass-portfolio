import { Code, ShoppingCart, Database, Zap, Shield, Brush } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    name: "Web o Landing Page",
    icon: Code,
    pitch:
      "Tu negocio online con formularios para captar contactos y respuestas automáticas por WhatsApp.",
    bullets: [
      "Web rápida y profesional",
      "Captura de contactos 24/7",
      "Optimizada para Google",
    ],
    cta: "Quiero mi web",
    href: "#contact",
  },
  {
    name: "Sistema de captación automática",
    icon: Zap,
    pitch:
      "Todo integrado: web, formularios, respuestas automáticas y seguimiento de clientes.",
    bullets: [
      "WhatsApp automatizado",
      "Emails automáticos",
      "Organización de contactos",
    ],
    cta: "Quiero automatizar",
    href: "#contact",
  },
  {
    name: "Tienda online",
    icon: ShoppingCart,
    pitch: "Vende 24/7 con catálogo, carrito de compra y pagos integrados.",
    bullets: [
      "Medios de pago integrados",
      "Gestión de productos",
      "Emails de confirmación",
    ],
    cta: "Quiero vender online",
    href: "#contact",
  },
  {
    name: "Optimización y soporte",
    icon: Shield,
    pitch:
      "Mejora tu web actual: hazla más rápida, más visible en Google y más segura.",
    bullets: [
      "Acelerar tu web",
      "Mejorar posición en Google",
      "Respaldos automáticos",
    ],
    cta: "Quiero optimizar",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="services-title" className="text-3xl md:text-4xl font-semibold">
          Otros servicios
        </h2>
        <p className="text-base md:text-lg text-white/70 mt-2">
          Soluciones específicas según lo que necesite tu negocio
        </p>

        <ul
          role="list"
          aria-label="Lista de servicios"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
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

        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 hover:border-primary/50 transition-colors text-lg"
          >
            Cuéntame qué necesitas
          </a>
        </div>
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
        <span className="inline-flex min-w-10 min-h-10 items-center justify-center rounded-xl border bg-gradient-to-r from-primary/15 to-primary/10 border-white/5">
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
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/5 px-4 py-2 text-sm duration-300 bg-gradient-to-l from-primary/10 to-primary/15 transition shadow hover:shadow-lg hover:shadow-black/20"
        data-analytics="click_cta_servicio"
      >
        {cta}
      </a>
    </motion.div>
  );
}
