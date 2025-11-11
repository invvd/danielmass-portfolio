import { useEffect, useState } from "react";
import { useMenuContext } from "../contexts/useMenuContext";
import XMarkIcon from "./icons/XMarkIcon";
import { navBarLinks } from "../config";

export default function MobileMenu() {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const [menuClasses, setMenuClasses] = useState("opacity-0 -z-50");

  useEffect(() => {
    if (isMenuOpen) {
      setMenuClasses("z-40 opacity-100");
    } else if (!isMenuOpen) {
      setMenuClasses("opacity-0");
      setTimeout(() => {
        setMenuClasses((prev) => prev + " -z-50");
      }, 200);
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm bg-black/50 flex md:hidden items-center justify-center transition-opacity duration-200 ${menuClasses}`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <nav className="max-h-[90dvh] overflow-y-scroll">
          <ul className="flex flex-col items-center gap-6 text-xl text-white">
            {navBarLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="transition-all hover:text-shadow-md text-shadow-primary/40 duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleMenu}
          className="cursor-pointer text-white transition-all hover:text-shadow-md text-shadow-primary/40 duration-200"
        >
          <XMarkIcon />
        </button>
        {/* Aquí puedes agregar los enlaces del menú */}
      </div>
    </div>
  );
}
