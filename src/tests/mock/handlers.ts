import { delay, http, HttpResponse } from "msw";

const url = process.env.CURRENCYCONVERT_API_URL;

export const handlers = [
  http.get(`${url}/convert`, async () => {
    await delay(150);
    return HttpResponse.json({
      success: true,
      validationMessage: [],
      result: { from: "USD", to: "EUR", amountToConvert: 1, convertedAmount: 2 },
    });
  }),
];
