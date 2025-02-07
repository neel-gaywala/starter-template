import { range } from "lodash";
import moment from "moment";

export interface YearOption {
  title: string;
  value: number;
}

export interface MonthOption {
  title: string;
  value: number;
}

// year array from 1923 to today
export function getYearsOption(): YearOption[] {
  const today = moment().toDate();
  const years = range(1923, today.getFullYear() + 1, 1);
  const yearsArr: YearOption[] = years.map((y) => ({
    title: `${y}`,
    value: y,
  }));
  return yearsArr;
}

// month array
export function getMonthOption(): MonthOption[] {
  return [
    {
      title: "January",
      value: 1,
    },
    {
      title: "February",
      value: 2,
    },
    {
      title: "March",
      value: 3,
    },
    {
      title: "April",
      value: 4,
    },
    {
      title: "May",
      value: 5,
    },
    {
      title: "June",
      value: 6,
    },
    {
      title: "July",
      value: 7,
    },
    {
      title: "August",
      value: 8,
    },
    {
      title: "September",
      value: 9,
    },
    {
      title: "October",
      value: 10,
    },
    {
      title: "November",
      value: 11,
    },
    {
      title: "December",
      value: 12,
    },
  ];
}
