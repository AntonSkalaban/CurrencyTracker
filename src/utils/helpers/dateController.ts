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

export class dateController {
  static subtractOneMonthFromNow = () => {
    const currentDate = new Date();
    let [year, month, day] = [
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    ];

    month -= 1;

    if (month < 0) {
      month = 11;
      year -= 1;
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    if (day > daysInMonth) day = daysInMonth;

    const newDate = new Date(year, month, day);

    return `${newDate.getFullYear()}-${(newDate.getMonth() + 1 < 10 ? "0" : "") + (newDate.getMonth() + 1)}-${(newDate.getDate() < 10 ? "0" : "") + newDate.getDate()}`;
  };

  static getDatesList = (startDateStr: string) => {
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
  static toDDMM = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);

    return `${day}.${month}`;
  };

  static toDDMonth = (dateStr: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, month, day] = dateStr.split("-");
    const monthIndex = parseInt(month) - 1;

    return `${parseInt(day)} ${months[monthIndex]}`;
  };
}
