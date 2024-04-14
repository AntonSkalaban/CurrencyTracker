import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "components/Dropdown";
import { NumberInput } from "components/NumberInput";
import { StyledP, Title3 } from "components/styled";
import { getModalData } from "store/slice";
import { defQuotesData } from "constants/cardsData";
import { quotesIcons } from "constants/icons";
import { getRate } from "utils/api/api";
import { cache } from "utils/cache";
import { useDebounce } from "utils/hooks";
import { shouldDataUpdate } from "utils/shouldDataUpdate";
import { RateCache } from "types/cache";
import { ConverString, StyledLogoContainer, StyledModalContentContainer } from "./styled";

export const CardModalContent: React.FC = () => {
  const { title, code } = useSelector(getModalData);

  const [convertedAmount, setRate] = useState(1);
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

        setRate(result.convertedAmount * +debouncedAmount);
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
      setRate(storedRate * +debouncedAmount);
    }
  }, [selectCurCode, debouncedAmount, code, convertedCurrencyes]);

  const hanldeCurrencyChange = (value: string) => {
    setRateCode(value);
  };

  const hanldeAmountChange = (value: string) => {
    setAmount(value);
  };

  return (
    <StyledModalContentContainer>
      <StyledLogoContainer>{quotesIcons[code]}</StyledLogoContainer>
      <Title3>
        {title} ({code})
      </Title3>
      <ConverString>
        <NumberInput defVal={amount} onChange={hanldeAmountChange} />
        <StyledP>{code} = </StyledP>
        <StyledP> {convertedAmount.toFixed(2)}</StyledP>
        <Dropdown
          options={defQuotesData.map(({ code }) => ({ name: code, value: code }))}
          defValue={selectCurCode}
          onChange={hanldeCurrencyChange}
        />
      </ConverString>
      {isFetching && <StyledP>Fetching...</StyledP>}
      {isError && <StyledP>Error...</StyledP>}
    </StyledModalContentContainer>
  );
};
