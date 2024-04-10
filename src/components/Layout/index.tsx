import { Outlet } from "react-router-dom";
import { StyledePopUpRoot } from "pages/Timeline/styled";
import { TitleSection } from "components";
import { LastUpdate } from "components/LastUpdate/idndex";
import { Header } from "../Header";

export const Layout: React.FC = () => {
  return (
    <>
      <StyledePopUpRoot id="pop-up-root"></StyledePopUpRoot>
      <Header />
      <TitleSection />
      <LastUpdate />

      <Outlet />
    </>
  );
};
