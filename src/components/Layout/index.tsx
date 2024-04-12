import { Outlet } from "react-router-dom";
import { TitleSection } from "components";
import { LastUpdate } from "components/LastUpdate/idndex";
import { Header } from "../Header";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <TitleSection />
      <LastUpdate />
      <Outlet />
    </>
  );
};
