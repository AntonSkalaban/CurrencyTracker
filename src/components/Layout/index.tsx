import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header, LastUpdate, TitleSection } from "components";

export const Layout: FC = () => {
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
