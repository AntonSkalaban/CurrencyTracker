export interface ConvertResult {
  from: string;
  to: string;
  amountToConvert: number;
  convertedAmount: number;
}

export interface ConvertResponce {
  success: boolean;
  validationMessage: [];
  result: ConvertResult;
}
