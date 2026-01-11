import { motion } from "motion/react";
import { Check, Sparkles, Clock, TrendingUp } from "lucide-react";
import PrimaryButton from "../../components/PrimaryButton";
import ChatBubbleIcon from "../../components/icons/ChatBubbleIcon";

const benefits = [
  "Landing page o web optimizada para conversión",
  "Formularios inteligentes que captan contactos",
  "Automatización de WhatsApp y/o Email",
  "Integración con planillas o CRM",
  "Seguimiento automático de clientes",
  "Chatbot con IA (opcional)",
];

const results = [
  {
    icon: TrendingUp,
    title: "Más contactos",
    description: "Tu negocio recibe leads calificados 24/7",
  },
  {
    icon: Clock,
    title: "Menos tiempo manual",
    description: "Automatiza respuestas y procesos repetitivos",
  },
  {
    icon: Sparkles,
    title: "Mejor experiencia",
    description: "Respuestas instantáneas para tus clientes",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Sistema de Captación Automática
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Todo lo que necesitas para conseguir más clientes y ahorrar tiempo,
            en un solo sistema
          </p>
        </motion.div>

        {/* Beneficios Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-white/5 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                  <Icon className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                <p className="text-white/70">{result.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Qué incluye */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            ¿Qué incluye?
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 p-1 rounded-full bg-green-500/20">
                  <Check className="size-5 text-green-400" />
                </div>
                <span className="text-white/90">{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <div className="text-center space-y-4">
            <p className="text-white/60">
              <span className="text-primary font-semibold">
                Tiempo de implementación:
              </span>{" "}
              7 a 14 días
            </p>
            <p className="text-white/70 text-lg">
              Simple, rápido y efectivo para tu negocio
            </p>
            <div className="pt-4">
              <PrimaryButton
                Icon={ChatBubbleIcon}
                cta="Solicita un diagnóstico gratuito"
                href="#contact"
                className="text-lg px-6 py-3"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
