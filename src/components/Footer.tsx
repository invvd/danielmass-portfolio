import { MessageCircle, Mail } from "lucide-react";
import { config, navBarLinks } from "../config";

export default function Footer() {
  return (
    <footer className="border border-white/5 backdrop-brightness-50 p-6 px-8 rounded-3xl backdrop-blur-lg mx-auto w-[90dvw] max-w-6xl my-8">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <a
            href="/"
            className="text-white transition-all hover:text-shadow-lg text-shadow-primary/20 duration-200 group font-semibold flex items-center"
          >
            <img
              src="/images/ProfilePic.webp"
              alt="Foto de Daniel Mass"
              className="size-8 rounded-full shadow-lg inline-block mr-3 object-cover group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-200"
            />
            <span className="text-lg">Daniel Mass</span>
          </a>
          <p className="text-white/70 text-sm max-w-xs">
            Automatización, desarrollo web e IA aplicada a negocios
          </p>
          <p className="text-white/60 text-sm">📍 Chile</p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-col gap-4">
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-all hover:text-shadow-md text-shadow-primary/40 duration-200"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="size-5" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="mailto:contacto@danielmass.dev"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-all hover:text-shadow-md text-shadow-primary/40 duration-200"
              aria-label="Contactar por Email"
            >
              <Mail className="size-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-white/5 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Daniel Mass · Todos los derechos reservados
      </div>
    </footer>
  );
}
