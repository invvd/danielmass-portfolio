import { motion } from "motion/react";
import { MessageCircle, Calendar } from "lucide-react";
import ArrowDownIcon from "../../components/icons/ArrowDownIcon";
import PrimaryButton from "../../components/PrimaryButton";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="w-dvw relative min-h-lvh flex flex-col items-center justify-center p-10 text-center gap-2 pb-24 pt-24"
    >
      <motion.div
        className="flex flex-col gap-4 items-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <StatusTag status="Disponible" />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Ayudo a negocios en Chile a conseguir más clientes con automatización
          e IA
        </h1>
      </motion.div>
      <motion.p
        className="text-balance max-w-3xl text-lg md:text-xl text-white/80 mt-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Desarrollo sistemas digitales que captan clientes automáticamente,
        responden al instante y te ahorran horas de trabajo manual cada semana.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center"
      >
        <PrimaryButton
          Icon={MessageCircle}
          cta="Solicita un diagnóstico gratuito"
          href="#contact"
          className="text-lg px-6 py-3"
        />
        <PrimaryButton
          Icon={Calendar}
          cta="Agenda una llamada"
          href="#contact"
          className="text-lg px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-white/60 text-sm mt-4"
      >
        ✓ Implementación en 7-14 días · ✓ Sin contratos eternos · ✓ Atención
        directa
      </motion.p>
      <a
        aria-label="Ver más información"
        href="/#problems"
        className="absolute bottom-16 hover:bg-primary/10 p-2 rounded-full transition animate-pulse"
      >
        <ArrowDownIcon className="size-8 text-white/80" />
      </a>
    </motion.section>
  );
}

function StatusTag({ status }: { status: "Disponible" | "No disponible" }) {
  return (
    <div
      className={`bg-gradient-to-tr from-black to-white/10 w-fit rounded-full text-sm py-1 px-3 flex items-center mx-auto gap-2 shadow shadow-primary/10`}
    >
      <span>{status}</span>
      <div className={`bg-green-500 size-1.5 rounded-full`} />
    </div>
  );
}
