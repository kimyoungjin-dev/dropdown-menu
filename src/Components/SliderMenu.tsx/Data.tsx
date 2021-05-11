import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { RiArrowDownFill, RiArrowUpSFill } from "react-icons/ri";
import { IoMdHelpCircle, IoMdPaper } from "react-icons/io";
import { BsNewspaper } from "react-icons/bs";

export const Data = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoMdPaper />,
      },

      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoMdPaper />,
      },
    ],
  },

  //Reports
  {
    title: "Reports",
    path: "/reports",
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoMdPaper />,
      },

      {
        title: "Reports2",
        path: "/reports/reports2",
        icon: <IoMdPaper />,
      },

      {
        title: "Reports3",
        path: "/reports/reports3",
        icon: <IoMdPaper />,
      },
    ],
  },

  //Messages
  {
    title: "Messages",
    path: "/messages",
    icon: <BsNewspaper />,
    iconClosed: <RiArrowDownFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Messages1",
        path: "/messages/messages1",
        icon: <IoMdPaper />,
      },

      {
        title: "Messages2",
        path: "/messages/messages2",
        icon: <IoMdPaper />,
      },
    ],
  },

  //Products
  {
    title: "Products",
    path: "/products",
    icon: <AiOutlineShoppingCart />,
  },

  //Team
  {
    title: "Team",
    path: "/team",
    icon: <AiOutlineUsergroupAdd />,
  },

  //Support
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
  },
];
