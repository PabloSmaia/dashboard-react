import { GiftIcon, HomeIcon, PencilIcon, TicketIcon } from "@heroicons/react/outline";

export const InvestDB = [
  {
    id:0,
    title: "Celular",
    desc: " Lojas Americanas ",
    price: " 1,800.22 ",
    upOrDown: "up",
    percent: "1.04%",
    icon: <TicketIcon className="invest-icon" />,
  },
  {
    id:1,
    title: "Casa",
    desc: "Custo de vida",
    price: "890.00",
    upOrDown: "down",
    percent: "5.04%",
    icon: <HomeIcon className="invest-icon" />,
  },
  {
    id:2,
    title: "Educação",
    desc: "Alura ",
    price: " 58.99 ",
    upOrDown: "up",
    percent: "10.2%",
    icon: <PencilIcon className="invest-icon" />,
  },
  {
    id:3,
    title: "comida",
    desc: "Classudo Hamburgueria",
    price: "35.25",
    upOrDown: "down",
    percent: "0.25%",
    icon: <GiftIcon className="invest-icon" />,
  },
];