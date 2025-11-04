// components/ServicesGrid.jsx
import { Code, ShoppingCart, Database, Zap, Shield, Brush } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    name: "Landing / Sitio",
    icon: Code,
    pitch: "Convierte visitas en clientes con velocidad y SEO técnico.",
    bullets: [
      "1–5 secciones, responsive",
      "WhatsApp + Analytics",
      "CWV 90+ de base",
    ],
    cta: "Cotizar este paquete",
    href: "#contact",
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    pitch: "Catálogo, checkout y pagos integrados listos para vender.",
    bullets: [
      "Checkout + medios de pago",
      "Emails transaccionales",
      "Optimización de conversión",
    ],
    cta: "Cotizar este paquete",
    href: "#contact",
  },
  {
    name: "App Web + API",
    icon: Database,
    pitch: "Paneles y APIs escalables con auth y BD robusta.",
    bullets: ["Auth + roles", "REST/GraphQL documentada", "Postgres/Prisma"],
    cta: "Agendar reunión",
    href: "#contact",
  },
  {
    name: "Optimización & Mantenimiento",
    icon: Shield,
    pitch: "Sube rendimiento, SEO y seguridad de tu sitio actual.",
    bullets: ["Auditoría CWV", "Hardening y backups", "Soporte continuo"],
    cta: "Quiero optimizar",
    href: "#contact",
  },
  {
    name: "Integraciones & Automatización",
    icon: Zap,
    pitch: "Conecta tu web con CRM/ERP y automatiza tareas.",
    bullets: [
      "Zapier/Make/HubSpot",
      "Webhooks y sincronización",
      "Reportes operativos",
    ],
    cta: "Conectar sistemas",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="services-title" className="text-3xl md:text-4xl font-semibold">
          Servicios
        </h2>
        <p className="text-base md:text-lg text-white/70 mt-2">
          Desarrollo plataformas web a medida que impulsan negocios de cualquier
          tamaño.
        </p>

        <ul
          role="list"
          aria-label="Lista de servicios"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => {
            const Card = motion.div;
            const Icon = s.icon;
            return (
              <li key={s.name}>
                <Card
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-gradient-to-r from-primary/10 to-primary/20 text-white/80 p-6 border-l-0 transition-colors font-medium rounded-xl border border-white/5 shadow-xl shadow-black/20 flex flex-col gap-2 h-full overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-10 min-h-10 items-center bg-gradient-to-l from-primary/10 to-primary/15 justify-center rounded-xl border border-white/5">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-medium">{s.name}</h3>
                  </div>

                  <p className="text-white/70 text-sm mt-3">{s.pitch}</p>

                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={s.href}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/5 px-4 py-2 text-sm duration-300 bg-gradient-to-l from-primary/10 to-primary/15 transition shadow hover:shadow-lg hover:shadow-black/20"
                    data-analytics="click_cta_servicio"
                  >
                    {s.cta}
                  </a>
                </Card>
              </li>
            );
          })}

          <li>
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.4, delay: services.length * 0.05 }}
              className="text-white/80 p-6 transition-colors font-medium rounded-xl border border-white/5 flex flex-col shadow-xl shadow-black/20 gap-2 h-full overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex min-w-10 min-h-10 items-center justify-center rounded-xl border border-white/5">
                  <Brush className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-medium">Proyecto personalizado</h3>
              </div>

              <p className="text-white/70 text-sm mt-3">
                Armemos juntos una solución a tu medida.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="mt-1">•</span>
                  <span>Completa flexibilidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1">•</span>
                  <span>Integraciones únicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="mt-1">•</span>
                  <span>Soporte dedicado</span>
                </li>
              </ul>

              <a
                href="/#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/5 px-4 py-2 text-sm duration-300 bg-gradient-to-l from-primary/10 to-primary/15 transition shadow hover:shadow-lg hover:shadow-black/20"
                data-analytics="click_cta_servicio"
              >
                Hablemos de mi proyecto
              </a>
            </motion.div>
          </li>
        </ul>
      </div>
    </section>
  );
}
