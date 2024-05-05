import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Dropdown, NumberInput, P } from "components";
import { getModalData } from "store/slice";
import { defQuotesData } from "constants/index";
import { getRate } from "api";
import { useDebounce } from "hooks";
import { cache, shouldDataUpdate } from "utils";
import { RateCache } from "types";

import { ConvertContainer } from "./styled";

export const CurrencyConverter: FC = () => {
  const { code } = useSelector(getModalData);

  const [amount, setAmount] = useState("1");
  const [toCurCode, setToCurCode] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const debouncedAmount = useDebounce(amount);

  const convertedCurrencyes = `${code}/${toCurCode}`;

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true);
        setIsError(false);

        const { result } = await getRate(code, toCurCode);

        cache.setObj<number>(convertedCurrencyes, result.convertedAmount);

        setConvertedAmount(result.convertedAmount * +debouncedAmount);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };

    if (shouldDataUpdate(convertedCurrencyes)) getData();
    else {
      const storedRate = cache.getObj<RateCache>(convertedCurrencyes)?.data;
      if (!storedRate) return;
      setConvertedAmount(storedRate * +debouncedAmount);
    }
  }, [toCurCode, debouncedAmount, code, convertedCurrencyes]);

  const handleAmountChange = (val: { name: string; value: string }) => {
    setAmount(val.value);
  };

  const handleCurCodeChange = (val: string) => {
    setToCurCode(val);
  };

  if (isError) return <P>Error...</P>;

  return (
    <ConvertContainer>
      {isFetching ? (
        <P> Fetching... </P>
      ) : (
        <>
          <NumberInput name={"amount"} value={amount} onChange={handleAmountChange} />
          <P>{code} = </P>
          <P data-testid="converted-value">{convertedAmount.toFixed(2)}</P>
          <Dropdown
            options={defQuotesData.map(({ code }) => ({ name: code, value: code }))}
            onChange={handleCurCodeChange}
          />
        </>
      )}
    </ConvertContainer>
  );
};
