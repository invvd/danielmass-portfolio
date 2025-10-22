import MenuIcon from "../icons/MenuIcon";
import { useMenuContext } from "../contexts/useMenuContext";
import ChatBubbleIcon from "../icons/ChatBubbleIcon";
import { navBarLinks } from "../config";

export default function Header() {
  const { toggleMenu } = useMenuContext();

  return (
    <header className="border border-white/2 backdrop-brightness-50 p-3 px-6 top-4 rounded-full backdrop-blur-lg left-1/2 -translate-x-1/2 h-fit mx-auto fixed w-[90dvw] flex justify-between items-center z-50">
      {/* Logo */}
      <a
        href="/"
        className="text-white transition-all hover:text-shadow-md text-shadow-primary/40 duration-200"
      >
        Daniel Mass
      </a>

      {/* Pc Navbar */}
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-6 text-white/80 transition-colors">
          {navBarLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-white transition-all hover:text-shadow-md text-shadow-primary/40 duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-white/80 hover:text-white cursor-pointer md:hidden transition-all hover:text-shadow-md text-shadow-primary/40 duration-200"
      >
        <MenuIcon className="size-6" />
      </button>

      {/* CTA */}
      <a
        href="#contact"
        className="bg-gradient-to-r from-primary/10 to-primary/20 border border-white/5 text-white/80 px-4 py-1 rounded-full hover:to-primary/30 transition-colors font-medium items-center hidden md:flex gap-2"
      >
        <span>Contáctame!</span>
        <span>
          <ChatBubbleIcon />
        </span>
      </a>
    </header>
  );
}
