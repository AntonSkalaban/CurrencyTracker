import { Route, Routes } from "react-router-dom";
import { Home, NEWBankCard, Timeline } from "pages";
import { Layout } from "components";
import { PagesPaths } from "types";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PagesPaths.Timeline} element={<Timeline />} />
        <Route path={PagesPaths.BankCard} element={<NEWBankCard />} />
      </Route>
    </Routes>
  );
};
