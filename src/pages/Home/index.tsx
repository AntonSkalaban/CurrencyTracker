import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardModalContent } from "components/CardModalContent";
import { CardsSection } from "components/CardsSection";
import { Modal } from "components/Modal";
import { Title2 } from "components/styled";
import { getModalStatus, toggleModal } from "store/slice";
import { defQuotesData, defStocksData } from "constants/cardsData";
import { LocalStorage, shouldDataUpdate, transformResponse } from "utils";
import { getRate } from "utils/api/api";
import { ConvertResponce } from "types";

interface CyrrencyData {
  data: ConvertResponce[];
  lastUpdate: Date;
}

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [quotesRate, setQuotesRates] = useState(
    LocalStorage.getObj<CyrrencyData>("quotes")?.data || []
  );
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

        LocalStorage.setObj<CyrrencyData>("quotes", { data: res, lastUpdate: new Date() });

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

  if (isError) return <Title2>Ooops...</Title2>;

  return (
    <>
      <CardsSection title="Stocks" data={defStocksData} isFetching={isFetching} />
      <CardsSection title="Quotes" data={quotesData} isFetching={isFetching} withModal />

      {isModalOpen && (
        <Modal close={closeModal}>
          <CardModalContent />
        </Modal>
      )}
    </>
  );
};
