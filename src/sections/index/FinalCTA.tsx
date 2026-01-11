import { motion } from "motion/react";
import { MessageCircle, Calendar, Phone } from "lucide-react";
import PrimaryButton from "../../components/PrimaryButton";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black/20 to-black/40"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden p-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-black/40 backdrop-blur-lg shadow-2xl shadow-primary/10"
        >
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              ¿Listo para conseguir más clientes?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Conversemos sin compromiso sobre cómo puedo ayudar a tu negocio a
              crecer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <PrimaryButton
                Icon={MessageCircle}
                cta="Hablemos por WhatsApp"
                href="https://wa.me/56912345678" // Reemplaza con tu número de WhatsApp
                className="text-lg px-8 py-4 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
              />
              <PrimaryButton
                Icon={Calendar}
                cta="Agenda una llamada gratuita"
                href="https://calendly.com/danielmass" // Reemplaza con tu link de Calendly
                className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-white/60 text-sm"
            >
              <Phone className="size-4" />
              <span>Respondo en menos de 24 horas</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-white/50 mt-8 text-sm"
        >
          Sin presión, sin contratos largos. Solo una conversación para ver si
          puedo ayudarte.
        </motion.p>
      </div>
    </section>
  );
}
