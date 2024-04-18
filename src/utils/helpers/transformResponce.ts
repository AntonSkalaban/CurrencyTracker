import { CardData, ConvertResponce, DefaultCardData } from "types";

export const transformResponse = (res: ConvertResponce[], defData: DefaultCardData[]) => {
  return res.reduce((acc, { success, result }) => {
    if (!success) return acc;
    const defCard = defData.find((cur) => cur.code === result.from);

    if (defCard) {
      acc.push({
        img: defCard.img,
        title: defCard.title,
        subtitle: "R$ " + result.convertedAmount.toFixed(2),
        code: result.from,
      });
    }
    return acc;
  }, [] as CardData[]);
};
