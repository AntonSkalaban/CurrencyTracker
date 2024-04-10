export const subtractOneMonthFromDate = () => {
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let day = currentDate.getDate();

  month -= 1;

  if (month < 0) {
    month = 11;
    year -= 1;
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  if (day > daysInMonth) day = daysInMonth;

  const newDate = new Date(year, month, day);

  const formattedDate = `${newDate.getFullYear()}-${(newDate.getMonth() + 1 < 10 ? "0" : "") + (newDate.getMonth() + 1)}-${(newDate.getDate() < 10 ? "0" : "") + newDate.getDate()}`;
  return formattedDate;
};

export const getAllDatesUntilToday = (startDateStr: string) => {
  const startDate = new Date(startDateStr);
  const currentDate = new Date();
  const dates = [];
  while (startDate <= currentDate) {
    const formattedDate = `${startDate.getFullYear()}-${(startDate.getMonth() + 1 < 10 ? "0" : "") + (startDate.getMonth() + 1)}-${(startDate.getDate() < 10 ? "0" : "") + startDate.getDate()}`;
    dates.push(formattedDate);
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
};

export const formatDateToDayMonthFormat = (dateStr: string) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, month, day] = dateStr.split("-");
  const monthIndex = parseInt(month) - 1;

  return `${parseInt(day)} ${months[monthIndex]}`;
};
