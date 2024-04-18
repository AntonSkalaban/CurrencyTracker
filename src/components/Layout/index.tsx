import { Outlet } from "react-router-dom";
import { Footer, Header, LastUpdate, TitleSection } from "components";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <TitleSection />
      <LastUpdate />
      <Outlet />
      <Footer />
    </>
  );
};
