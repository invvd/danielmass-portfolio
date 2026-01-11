import { motion } from "motion/react";
import { MessageCircle, Calendar, Check, Star } from "lucide-react";
import PrimaryButton from "../../components/PrimaryButton";

const automationPackages = [
  {
    id: "recommended",
    badge: "🟡",
    name: "Sistema de Ventas Automatizado",
    recommended: true,
    forWho:
      "Negocios que reciben muchos contactos y necesitan orden, seguimiento y control.",
    problems: [
      "Conversaciones desordenadas",
      "Seguimiento manual",
      "Ventas perdidas",
    ],
    includes: [
      "Atención automatizada 24/7",
      "Seguimiento automático de clientes",
      "Clasificación por etapa del proceso",
      "Derivación inteligente a equipo humano",
    ],
    results: [
      "+80% de casos atendidos automáticamente",
      "Ventas ordenadas",
      "Equipo humano enfocado solo en cierres",
    ],
    price: "$900.000 – $1.400.000 CLP",
  },
  {
    id: "essential",
    badge: "🟢",
    name: "Automatización Esencial",
    forWho:
      "Pymes que reciben consultas constantemente y quieren dejar de hacer todo a mano.",
    problems: [
      "Respuestas lentas",
      "Interrupciones constantes",
      "Atención manual innecesaria",
    ],
    includes: [
      "Sistema de atención automatizada",
      "Respuesta inmediata 24/7",
      "Clasificación básica de consultas",
      "Derivación a humano cuando corresponde",
    ],
    results: [
      "Más consultas atendidas",
      "Menos interrupciones",
      "Tiempo operativo liberado",
    ],
    price: "$450.000 – $650.000 CLP",
  },
  {
    id: "custom",
    badge: "🔵",
    name: "Sistema Digital a Medida",
    forWho: "Empresas con procesos complejos o alto volumen de atención.",
    problems: [
      "Procesos manuales complejos",
      "Falta de control operativo",
      "Escalabilidad limitada",
    ],
    includes: [
      "Análisis del proceso del negocio",
      "Sistema completamente personalizado",
      "Automatizaciones avanzadas",
      "Acompañamiento cercano",
    ],
    results: [
      "Operación ordenada",
      "Reducción fuerte de carga operativa",
      "Sistema escalable en el tiempo",
    ],
    price: "Desde $1.800.000 CLP",
  },
];

const complementaryServices = [
  {
    id: "web",
    badge: "🟣",
    name: "Webs y Landing Pages Orientadas a Resultados",
    forWho:
      "Negocios que necesitan captar clientes de forma clara y profesional.",
    focus:
      "No son webs por estética. Son páginas pensadas para captar contactos, integrarse con automatización y facilitar ventas.",
    includes: [
      "Web o landing profesional",
      "Enfoque en conversión",
      "Preparada para integrarse con sistemas automatizados",
    ],
    price: "Desde $500.000 CLP",
  },
  {
    id: "ecommerce",
    badge: "🛒",
    name: "Ecommerce Profesional",
    forWho: "Marcas que quieren vender online de forma seria y escalable.",
    problems: [
      "Falta de canal de ventas online",
      "Imagen poco profesional",
      "Proceso de compra confuso",
    ],
    includes: [
      "Tienda online profesional",
      "Diseño alineado a la marca",
      "Proceso de compra simple",
      "Base digital lista para escalar",
    ],
    results: [
      "Canal de ventas activo",
      "Mejor experiencia de compra",
      "Operación digital centralizada",
    ],
    price: "$700.000 – $1.200.000 CLP",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 rounded-3xl my-4">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Paquetes pensados para automatizar, ordenar y hacer crecer tu
            negocio
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Soluciones claras, precios transparentes y sistemas que generan
            resultados reales.
          </p>
        </motion.div>

        {/* BLOQUE 1 - AUTOMATIZACIÓN (PRINCIPAL) */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              Automatización
            </h3>
            <p className="text-white/70 text-sm">Servicio principal</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationPackages.map((pkg, index) => (
              <AutomationPackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* BLOQUE 2 Y 3 - SERVICIOS COMPLEMENTARIOS */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              Servicios Complementarios
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {complementaryServices.map((service, index) => (
              <ComplementaryServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* SOPORTE OPCIONAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm max-w-3xl mx-auto mb-16"
        >
          <h4 className="text-xl font-semibold mb-3">
            Soporte y Mejora Continua
          </h4>
          <p className="text-white/70 text-sm mb-4">
            Algunos negocios requieren ajustes y mejoras constantes.
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Ajustes de flujos",
              "Mejoras de automatización",
              "Soporte prioritario",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <Check className="size-4 text-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-primary font-semibold text-lg">
            $80.000 – $150.000 CLP / mes
          </p>
          <p className="text-white/60 text-xs mt-1">
            Opcional – no obligatorio
          </p>
        </motion.div>

        {/* CTA FINAL DE LA SECCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-primary/5 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            ¿No estás seguro qué paquete es el correcto para tu negocio?
          </h3>
          <p className="text-white/80 mb-6">
            Agenda una llamada y revisamos tu caso sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PrimaryButton
              Icon={Calendar}
              cta="Agendar llamada gratuita"
              href="#contact"
              className="text-lg px-6 py-3"
            />
            <PrimaryButton
              Icon={MessageCircle}
              cta="Hablar por WhatsApp"
              href="#contact"
              className="text-lg px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AutomationPackageCard({
  pkg,
  index,
}: {
  pkg: (typeof automationPackages)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-xl backdrop-blur-lg backdrop-brightness-75 shadow-lg shadow-black/20 border flex flex-col h-full relative ${
        pkg.recommended
          ? "border-primary/50 bg-linear-to-br from-primary/10 to-primary/5"
          : "border-white/5"
      }`}
    >
      {pkg.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-semibold flex items-center gap-1">
          <Star className="size-3 fill-current" />
          Más elegido
        </div>
      )}

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{pkg.badge}</span>
          <h4 className="text-xl font-semibold">{pkg.name}</h4>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-primary/90 mb-2">
          Para quién es
        </p>
        <p className="text-white/70 text-sm">{pkg.forWho}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-white/90 mb-2">Qué incluye</p>
        <ul className="space-y-1.5">
          {pkg.includes.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-white/80 text-sm"
            >
              <Check className="size-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-white/90 mb-2">
          Resultado esperado
        </p>
        <ul className="space-y-1.5">
          {pkg.results.map((result, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-white/80 text-sm"
            >
              <span className="text-green-400 shrink-0">✓</span>
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-white/10">
        <p className="text-2xl font-bold text-primary mb-1">{pkg.price}</p>
        <a
          href="#contact"
          className="block text-center py-2.5 px-4 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-primary/50 text-white font-medium text-sm transition-all"
        >
          Agendar llamada
        </a>
      </div>
    </motion.div>
  );
}

function ComplementaryServiceCard({
  service,
  index,
}: {
  service: (typeof complementaryServices)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-xl backdrop-blur-lg backdrop-brightness-75 shadow-lg shadow-black/20 border border-white/5 flex flex-col h-full"
    >
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{service.badge}</span>
          <h4 className="text-xl font-semibold">{service.name}</h4>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-primary/90 mb-2">
          Para quién es
        </p>
        <p className="text-white/70 text-sm">{service.forWho}</p>
      </div>

      {service.focus && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-white/90 mb-2">Enfoque</p>
          <p className="text-white/70 text-sm">{service.focus}</p>
        </div>
      )}

      <div className="mb-4">
        <p className="text-sm font-semibold text-white/90 mb-2">Incluye</p>
        <ul className="space-y-1.5">
          {service.includes.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-white/80 text-sm"
            >
              <Check className="size-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {service.results && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-white/90 mb-2">
            Resultado esperado
          </p>
          <ul className="space-y-1.5">
            {service.results.map((result, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-white/80 text-sm"
              >
                <span className="text-green-400 shrink-0">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-4 border-t border-white/10">
        <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
        <a
          href="#contact"
          className="block text-center py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 text-white font-medium text-sm transition-all"
        >
          Agendar llamada
        </a>
      </div>
    </motion.div>
  );
}
