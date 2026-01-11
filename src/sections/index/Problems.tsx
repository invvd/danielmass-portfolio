import { motion } from "motion/react";
import { Clock, Users, TrendingDown, MessageCircleX } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Pocos clientes nuevos",
    description: "Tu negocio necesita más contactos calificados cada mes.",
  },
  {
    icon: Clock,
    title: "Demasiado tiempo manual",
    description:
      "Respondes las mismas preguntas todo el día, perdiendo tiempo valioso.",
  },
  {
    icon: MessageCircleX,
    title: "Respuestas lentas",
    description:
      "Los clientes escriben y tienes que esperar para responder, perdiendo oportunidades.",
  },
  {
    icon: TrendingDown,
    title: "Sin seguimiento",
    description:
      "Los contactos se pierden porque no hay un sistema para organizarlos.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-black/20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Muchos negocios en Chile enfrentan estos problemas todos los días
          </p>
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
      </div>
    </section>
  );
}
