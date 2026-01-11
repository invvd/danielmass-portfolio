import { motion } from "motion/react";
import { MessageCircle, Calendar, Phone } from "lucide-react";
import PrimaryButton from "../../components/PrimaryButton";
import { config } from "../../config";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-b from-black/20 to-black/40 rounded-3xl my-4"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden p-12 rounded-3xl border border-primary/30 bg-linear-to-br from-primary/20 via-primary/10 to-black/40 backdrop-blur-lg shadow-2xl shadow-primary/10"
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
              ¿Quieres saber si esto sirve para tu negocio?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Agenda una llamada y revisamos tu caso sin compromiso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <PrimaryButton
                Icon={Calendar}
                cta="Agendar llamada"
                href={config.calendlyUrl}
                className="text-lg px-8 py-4 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
