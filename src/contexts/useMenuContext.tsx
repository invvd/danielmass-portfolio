import {
  useContext,
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type MenuContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextType | undefined>({
  isMenuOpen: false,
  toggleMenu: () => {},
});

export const MenuContextProvider = ({
  children,
  lockBodyScroll = true,
}: PropsWithChildren<{ lockBodyScroll?: boolean }>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /* Lock body scroll */
  useEffect(() => {
    if (!lockBodyScroll) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen, lockBodyScroll]);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};
