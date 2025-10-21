import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import { MenuContextProvider } from "../contexts/useMenuContext";

export default function ClientLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <MenuContextProvider>
      <Header />
      {children}
      <MobileMenu />
    </MenuContextProvider>
  );
}
