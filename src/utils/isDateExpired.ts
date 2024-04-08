export const isDateExpired = (prevDate: string) => {
  const hourInMillis = 60 * 60 * 1000;
  const currDate = new Date().getTime();

  const timeDiff = currDate - new Date(prevDate).getTime();
  return timeDiff >= hourInMillis;
};
