import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardModalContent, CardsSection, Modal } from "components";
import { H2 } from "components/styled";
import { getModalStatus, toggleModal } from "store/slice";
import { defQuotesData, defStocksData } from "constants/index";
import { getRate } from "api";
import { cache, shouldDataUpdate, transformResponse } from "utils";
import { ConvertResponce, CyrrencyCache } from "types";

export const Home: FC = () => {
  const dispatch = useDispatch();
  const [quotesRate, setQuotesRates] = useState(cache.getObj<CyrrencyCache>("quotes")?.data || []);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const isModalOpen = useSelector(getModalStatus);
  const quotesData = useMemo(() => transformResponse(quotesRate, defQuotesData), [quotesRate]);

  const closeModal = () => dispatch(toggleModal());

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true);
        setIsError(false);

        const promises = defQuotesData.map(({ code }) => getRate(code, "BRL"));
        const res = await Promise.all(promises);

        cache.setObj<ConvertResponce[]>("quotes", res);

        setQuotesRates(res);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };
    if (shouldDataUpdate("quotes")) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) return <H2>Ooops...</H2>;

  return (
    <main>
      <CardsSection title="Stocks" data={defStocksData} isFetching={isFetching} />
      <CardsSection title="Quotes" data={quotesData} isFetching={isFetching} withModal />

      {isModalOpen && (
        <Modal close={closeModal}>
          <CardModalContent />
        </Modal>
      )}
    </main>
  );
};
