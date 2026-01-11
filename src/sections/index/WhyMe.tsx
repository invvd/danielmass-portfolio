import { motion } from "motion/react";
import { MapPin, Users, Award, Zap } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Trato directo, sin intermediarios",
    description:
      "Hablas conmigo directamente. Sin pasar por equipos ni esperar respuestas.",
  },
  {
    icon: Award,
    title: "Enfoque en resultados, no en tecnología",
    description:
      "Me importa que tu negocio crezca, no impresionarte con palabras técnicas.",
  },
  {
    icon: Zap,
    title: "Soluciones simples y escalables",
    description:
      "Sistemas que puedes usar fácilmente hoy y que crecen con tu negocio.",
  },
  {
    icon: MapPin,
    title: "Experiencia real automatizando procesos",
    description:
      "He ayudado a negocios reales en Chile a ahorrar tiempo y conseguir más clientes.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 rounded-3xl my-4">
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
                className="p-6 rounded-xl border border-white/5 bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 border border-primary/20">
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
          className="mt-12 p-8 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-primary/5 backdrop-blur-sm text-center"
        >
          <p className="text-lg md:text-xl text-white/90">
            Trabajo contigo como partner digital, no como proveedor distante
          </p>
        </motion.div>
      </div>
    </section>
  );
}
