import { motion } from "motion/react";
import { MapPin, Users, Award, Zap } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "100% en Chile",
    description:
      "Entiendo el mercado local, hablo tu idioma y estoy en tu zona horaria. Reuniones presenciales si lo necesitas.",
  },
  {
    icon: Users,
    title: "Atención directa",
    description:
      "Hablas directo conmigo, sin intermediarios. Respuestas rápidas y soluciones personalizadas para tu negocio.",
  },
  {
    icon: Award,
    title: "Resultados comprobados",
    description:
      "He ayudado a negocios a automatizar procesos, conseguir más clientes y ahorrar tiempo con soluciones reales.",
  },
  {
    icon: Zap,
    title: "Implementación rápida",
    description:
      "No proyectos eternos. Te entrego sistemas funcionando en 7-14 días, listos para generar resultados.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            ¿Por qué trabajar conmigo?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            No soy una agencia grande con procesos complejos. Soy un profesional
            independiente enfocado en resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white/70">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm text-center"
        >
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Trabajo directo contigo (o tu equipo) para crear soluciones que
            realmente funcionen
          </p>
          <p className="text-white/70">
            Sin complicaciones, sin contratos eternos, sin mensualidades
            ocultas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
