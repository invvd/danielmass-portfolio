import { motion } from "motion/react";
import { Clock, Users, TrendingDown, MessageCircleX } from "lucide-react";

const problems = [
  {
    icon: MessageCircleX,
    title: "Te escriben por WhatsApp y no alcanzas a responder a tiempo",
    description:
      "Los clientes esperan respuestas inmediatas y pierdes oportunidades.",
  },
  {
    icon: TrendingDown,
    title: "Pierdes clientes por respuestas tardías",
    description: "Cuando finalmente respondes, ya eligieron a tu competencia.",
  },
  {
    icon: Users,
    title: "Tienes datos desordenados en Excel o planillas",
    description: "No sabes quién es quién ni cómo hacer seguimiento efectivo.",
  },
  {
    icon: Clock,
    title: "Haces tareas repetitivas que te quitan horas cada semana",
    description: "Contestar lo mismo una y otra vez consume tu tiempo valioso.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-black/20 rounded-3xl my-4">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            ¿Estos problemas te suenan familiares?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <Icon className="size-6 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-white/70">{problem.description}</p>
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
          <p className="text-lg md:text-xl text-white/90">
            Si alguno de estos problemas ocurre en tu negocio,{" "}
            <span className="font-semibold text-primary">
              se puede automatizar
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
