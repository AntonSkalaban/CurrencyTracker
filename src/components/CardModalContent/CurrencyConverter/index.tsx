import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "components/Dropdown";
import { NumberInput } from "components/NumberInput";
import { StyledP } from "components/styled";
import { getModalData } from "store/slice";
import { defQuotesData } from "constants/cardsData";
import { getRate } from "utils/api/api";
import { useDebounce } from "utils/hooks";
import { cache, shouldDataUpdate } from "utils/index";
import { RateCache } from "types/index";
import { ConvertContainer } from "./styled";

export const CurrencyConverter: React.FC = () => {
  const { code } = useSelector(getModalData);

  const [convertedAmount, setConvertedAmount] = useState(1);
  const [selectCurCode, setRateCode] = useState("USD");
  const [amount, setAmount] = useState("1");

  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const debouncedAmount = useDebounce(amount);

  const convertedCurrencyes = `${code}/${selectCurCode}`;

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true);
        setIsError(false);

        const { result } = await getRate(code, selectCurCode);

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
  }, [selectCurCode, debouncedAmount, code, convertedCurrencyes]);

  const hanldeCurrencyChange = (value: string) => {
    setRateCode(value);
  };

  const hanldeAmountChange = (value: string) => {
    setAmount(value);
  };

  if (isError) return <StyledP>Error...</StyledP>;

  return (
    <ConvertContainer>
      {isFetching ? (
        <StyledP> Fetching... </StyledP>
      ) : (
        <>
          <NumberInput defVal={amount} onChange={hanldeAmountChange} />
          <StyledP>{code} = </StyledP>
          <StyledP data-testid="converted-value">{convertedAmount.toFixed(2)}</StyledP>
          <Dropdown
            options={defQuotesData.map(({ code }) => ({ name: code, value: code }))}
            defValue={selectCurCode}
            onChange={hanldeCurrencyChange}
          />
        </>
      )}
    </ConvertContainer>
  );
};
