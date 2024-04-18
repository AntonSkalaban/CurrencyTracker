export const validateNumber = (value: string) => {
  let newValue = value.replace(/[^0-9.]/g, "");

  const dotCount = (newValue.match(/\./g) || []).length;
  if (dotCount > 1) {
    newValue = newValue.slice(0, newValue.lastIndexOf("."));
  }
  return newValue;
};
