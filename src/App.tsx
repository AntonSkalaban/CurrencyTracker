import { Route, Routes } from "react-router-dom";
import { BankCard, Home, Timeline } from "pages";
import { Layout } from "components";
import { PagesPaths } from "types";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PagesPaths.Timeline} element={<Timeline />} />
        <Route path={PagesPaths.BankCard} element={<BankCard />} />
      </Route>
    </Routes>
  );
};
