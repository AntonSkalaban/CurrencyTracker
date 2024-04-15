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

  if (isError) return <StyledP>Error...</StyledP>;

  return (
    <ConvertContainer>
      {isFetching ? (
        <StyledP> Fetching... </StyledP>
      ) : (
        <>
          <NumberInput name={"amount"} value={amount} onChange={handleAmountChange} />
          <StyledP>{code} = </StyledP>
          <StyledP data-testid="converted-value">{convertedAmount.toFixed(2)}</StyledP>
          <Dropdown
            options={defQuotesData.map(({ code }) => ({ name: code, value: code }))}
            onChange={handleCurCodeChange}
          />
        </>
      )}
    </ConvertContainer>
  );
};
