import {
  MessageCircle,
  Calendar,
  AlertCircle,
  Settings,
  CheckCircle,
  Clock,
  Bot,
  DollarSign,
  ShoppingCart,
  Smartphone,
  Zap,
  Package,
} from "lucide-react";
import PrimaryButton from "../../components/PrimaryButton";
import { motion } from "motion/react";

const projects = [
  {
    title: "Empresa de conducción para mujeres",
    service: "Automatización de atención al cliente y ventas multicanal",
    problem:
      "Mensajes desde múltiples canales generaban respuestas lentas, conversaciones desordenadas y pérdida de oportunidades de venta.",
    solution:
      "Sistema centralizado que responde automáticamente 24/7, clasifica conversaciones por etapa de venta y deriva ventas listas y casos críticos a agentes humanas.",
    results: [
      "Atención continua sin aumentar personal",
      "Conversaciones ordenadas y fáciles de gestionar",
      "Equipo humano enfocado solo en cierres",
      "Proceso de ventas claro y controlado",
    ],
    metrics: [
      { icon: Clock, label: "Respuesta inmediata" },
      { icon: Bot, label: "+80% de casos atendidos automáticamente" },
      { icon: Clock, label: "Ahorro de tiempo operativo" },
      { icon: DollarSign, label: "Reducción de costos operativos" },
    ],
    ctaText: "Quiero una solución similar",
  },
  {
    title: "Programa de intercambio de estufas a leña por aire",
    service:
      "Automatización avanzada de procesos y seguimiento de postulaciones",
    problem:
      "Alto volumen de postulaciones con conversaciones abandonadas, datos incompletos y consultas constantes sobre el estado de inscripción.",
    solution:
      "Sistema automatizado que mantiene el contexto de cada conversación, envía recordatorios automáticos, recopila datos paso a paso y permite consultar el estado de la postulación sin intervención humana.",
    results: [
      "Menos postulaciones perdidas",
      "Datos completos y ordenados automáticamente",
      "Reducción significativa de carga operativa",
      "Seguimiento claro de cada caso",
    ],
    metrics: [
      { icon: Clock, label: "Respuesta inmediata" },
      { icon: Bot, label: "+80% de casos atendidos automáticamente" },
      { icon: Clock, label: "Ahorro de tiempo operativo" },
      { icon: DollarSign, label: "Reducción de costos operativos" },
    ],
    ctaText: "Quiero automatizar mi proceso",
  },
  {
    title: "Tienda chilena de streetwear",
    service: "Desarrollo web y ecommerce orientado a conversión",
    problem:
      "La marca no contaba con una tienda online profesional para vender de forma constante y escalar su negocio.",
    solution:
      "Desarrollo de un ecommerce completo, alineado a la identidad de la marca, con un proceso de compra simple y enfocado en conversión.",
    results: [
      "Presencia online profesional",
      "Nuevo canal de ventas activo",
      "Mejor experiencia de compra para los clientes",
      "Base digital lista para escalar",
    ],
    metrics: [
      { icon: ShoppingCart, label: "Canal de ventas online activo" },
      { icon: Smartphone, label: "Experiencia de compra optimizada" },
      { icon: Zap, label: "Proceso de compra simple y rápido" },
      { icon: Package, label: "Operación digital centralizada" },
    ],
    ctaText: "Quiero vender online",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-24 bg-black/20 rounded-3xl my-4"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Casos reales de automatización y desarrollo digital
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Sistemas implementados para empresas en Chile, enfocados en orden,
            automatización y resultados.
          </p>
        </motion.div>

        {/* Grid de Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Nota de confianza */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white/60 text-sm mt-12 max-w-3xl mx-auto"
        >
          Todos los sistemas fueron implementados y personalizados según las
          necesidades de cada negocio. Algunos proyectos no pueden mostrarse en
          detalle por motivos de confidencialidad.
        </motion.p>

        {/* CTA de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-primary/5 backdrop-blur-sm text-center"
        >
          <p className="text-lg md:text-xl text-white/90 mb-6">
            ¿Quieres implementar un sistema similar en tu negocio?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PrimaryButton
              Icon={MessageCircle}
              cta="Hablar por WhatsApp"
              href="#contact"
              className="text-lg px-6 py-3"
            />
            <PrimaryButton
              Icon={Calendar}
              cta="Agendar llamada gratuita"
              href="#contact"
              className="text-lg px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { title, service, problem, solution, results, metrics, ctaText } =
    project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-xl backdrop-blur-lg backdrop-brightness-75 shadow-lg shadow-black/20 border border-white/5 flex flex-col h-full"
    >
      {/* Encabezado */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-primary/80 text-sm font-medium">{service}</p>
      </div>

      <div className="flex flex-col grow justify-evenly">
        {/* Problema */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="size-5 text-orange-400/80" />
            <h4 className="text-base font-semibold text-white/90">Problema</h4>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">{problem}</p>
        </div>

        {/* Solución */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Settings className="size-5 text-blue-400/80" />
            <h4 className="text-base font-semibold text-white/90">Solución</h4>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">{solution}</p>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="size-5 text-green-400/80" />
            <h4 className="text-base font-semibold text-white/90">
              Resultados
            </h4>
          </div>
          <ul className="space-y-2">
            {results.map((result, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-white/80 text-sm"
              >
                <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                <span className="leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Métricas Visuales */}
      {/* <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/10 min-h-[60px]"
              >
                <Icon className="size-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 leading-tight break-words">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* CTA dentro de la card */}
      <div className="mt-auto pt-4 border-t border-white/5">
        <a
          href="#contact"
          className="block text-center py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 text-white/80 hover:text-white text-sm font-medium transition-all"
        >
          {ctaText}
        </a>
      </div>
    </motion.div>
  );
}
