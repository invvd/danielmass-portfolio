import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <main>{children}</main>
      <Footer />
      <MobileMenu />
    </MenuContextProvider>
  );
}
