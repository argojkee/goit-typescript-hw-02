/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type DateT = {
  createAt: Date;
  updateAt: Date;
};

type PageT = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: DateT;
};

const page1: PageT = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: PageT = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
