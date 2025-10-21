import { motion } from "motion/react";
import RocketIcon from "../../icons/RocketIcon";

export default function Hero() {
  return (
    <section className="w-dvw h-lvh bg-black/80 flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-3xl font-bold text-balance"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Soy Daniel Mass, desarrollador web full stack 💻.
      </motion.h1>
      <motion.p
        className="mt-2 text-balance max-w-2xl text-white/80"
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
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-4 mt-6 items-center justify-center"
      >
        <motion.a
          initial={false}
          style={{
            backgroundColor: "rgba(102, 51, 238, .1 )",
            color: "rgba(255,255,255,0.8)",
          }}
          whileHover={{
            backgroundColor: "rgba(255,255,255,1)",
            color: "rgba(0,0,0,1)",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="rounded-full px-4 py-1 text-lg flex items-center w-fit"
          href="#contact"
        >
          <span>Comenzar!</span>
          <RocketIcon className="inline-block size-5 ml-2" />
        </motion.a>
        <motion.a
          initial={false}
          style={{
            backgroundColor: "rgba(255,255,255,0)",
            color: "rgba(255,255,255,0.8)",
            borderColor: "rgba(255,255,255,0.6)",
            borderWidth: 1,
          }}
          whileHover={{
            backgroundColor: "rgba(255,255,255,1)",
            color: "rgba(0,0,0,1)",
            borderColor: "rgba(255,255,255,1)",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="rounded-full px-4 py-1 text-lg flex items-center w-fit"
          href="#contact"
        >
          <span>Solicita tu web!</span>
          <RocketIcon className="inline-block size-5 ml-2" />
        </motion.a>
      </motion.div>
    </section>
  );
}
