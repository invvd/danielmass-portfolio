import { motion } from "motion/react";
import { MessageCircle, Lightbulb, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Analizo tu negocio y procesos actuales",
    description:
      "Conversamos sobre cómo funciona tu negocio hoy y qué se puede mejorar.",
  },
  {
    icon: Lightbulb,
    number: "2",
    title: "Diseño la solución de automatización",
    description:
      "Creo un plan claro con las herramientas y procesos que implementaremos.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Implemento y pruebo el sistema",
    description:
      "Desarrollo todo en 7-14 días, manteniéndote al tanto del progreso.",
  },
  {
    icon: CheckCircle,
    number: "4",
    title: "Te explico cómo usarlo de forma simple",
    description:
      "Capacitación directa para que puedas usar el sistema sin dependencia técnica.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black/20 rounded-3xl my-4">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Cómo trabajamos juntos
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Un proceso simple y transparente, sin complicaciones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-white/5 bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm"
              >
                {/* Número del paso */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">
                  {step.number}
                </div>

                <div className="flex items-start gap-4 mt-2">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
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
          className="mt-12 text-center"
        >
          <p className="text-white/80 text-lg">
            Sin procesos complejos ni dependencia técnica
          </p>
        </motion.div>
      </div>
    </section>
  );
}
