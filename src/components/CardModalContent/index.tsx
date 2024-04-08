import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "components/Dropdown";
import { NumberInput } from "components/NumberInput";
import { StyledP, Title2 } from "components/styled";
import { getModalData } from "store/slice";
import { defQuotesData } from "constants/cardsData";
import { quotesIcons } from "constants/icons";
import { getRate } from "utils/api/api";
import { useDebounce } from "utils/hooks";
import { LocalStorage } from "utils/LocalStorage";
import { shouldDataUpdate } from "utils/shouldDataUpdate";
import { StyledLogoContainer, StyledModalContentContainer } from "./styled";

interface ConvertedData {
  rate: number;
  lastUpdate: Date;
}

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

        LocalStorage.setObj<ConvertedData>(convertedCurrencyes, {
          rate: result.convertedAmount,
          lastUpdate: new Date(),
        });

        setRate(result.convertedAmount * +debouncedAmount);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };

    if (shouldDataUpdate(convertedCurrencyes)) getData();
    else {
      const storedRate = LocalStorage.getObj<ConvertedData>(convertedCurrencyes)?.rate as number;
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
      <Title2>
        {title} ({code})
      </Title2>
      <div style={{ display: "flex" }}>
        <NumberInput defVal={amount} onChange={hanldeAmountChange} />
        <StyledP>{code} = </StyledP>
        <StyledP>{convertedAmount.toFixed(2)}</StyledP>
        <Dropdown
          name={"cyrrency"}
          options={defQuotesData.map((el) => el.code)}
          defValue={selectCurCode}
          onChange={hanldeCurrencyChange}
        />
      </div>
      {isFetching && <StyledP>Fetching...</StyledP>}
      {isError && <StyledP>Error...</StyledP>}
    </StyledModalContentContainer>
  );
};
