import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BankCard, Home, NotFound, Timeline } from "pages";
import { ErrorBoundary, Layout } from "components";
import { FontStyles, GeneralStyles, NormalStyles } from "components/styled";
import { getTheme } from "store/slice";
import { PagesPaths } from "types";

export const App: React.FC = () => {
  const theme = useSelector(getTheme);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <NormalStyles />
        <GeneralStyles />
        <FontStyles />

        <div id="pop-up-root" />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={PagesPaths.Timeline} element={<Timeline />} />
            <Route path={PagesPaths.BankCard} element={<BankCard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
