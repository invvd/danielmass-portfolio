import { motion } from "motion/react";
import RocketIcon from "../../icons/RocketIcon";
import ArrowDownIcon from "../../icons/ArrowDownIcon";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="w-dvw relative h-lvh flex flex-col items-center justify-center p-10 bg-gradient-to-b from-black/60 via-black/60 via-60% to-transparent text-center gap-4"
    >
      <motion.div
        className="flex flex-col-reverse gap-2 md:items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Soy Daniel Mass, desarrollador web full stack 💻.</h1>
        <StateTag text="Disponible" color="green" />
      </motion.div>
      <motion.p
        className="text-balance max-w-2xl text-white/80"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Transformo tus ideas en soluciones digitales funcionales, rápidas y
        escalables.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row gap-4 mt-6 items-center justify-center"
      >
        <a
          className="rounded-full px-4 py-1 text-lg flex items-center w-fit shadow hover:shadow-lg bg-gradient-to-r from-primary/20 to-primary/30 hover:from-primary/20 hover:to-primary/40 transition-colors duration-200 border border-white/5"
          href="#contact"
        >
          <span>Solicita tu web!</span>
          <RocketIcon className="inline-block size-5 ml-2" />
        </a>
      </motion.div>
      <a
        href="/#services"
        className="absolute bottom-20 hover:bg-primary/10 p-2 rounded-full transition animate-pulse"
      >
        <ArrowDownIcon className="size-8 text-white/80" />
      </a>
    </motion.section>
  );
}

function StateTag({ text, color }: { text: string; color: string }) {
  return (
    <div
      className={`bg-gradient-to-tr from-black to-white/10 w-fit rounded-full text-sm py-1 px-3 flex items-center mx-auto gap-2 shadow shadow-primary/10`}
    >
      <span>{text}</span>
      <div className={`bg-${color}-500 size-1.5 rounded-full`} />
    </div>
  );
}
