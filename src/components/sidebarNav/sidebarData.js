import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Overview",
    path: "/",
    icon: <BsIcons.BsFillGridFill />,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <BsIcons.BsFileEarmarkPlus />,
    // icon: <IoIcons.IoIosAlarm />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaShoppingBag />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiTwotoneSetting />,
  },
];

export const SidebarData1 = [
  {
    title: "Shipment",
    path: "/shipment",
    icon: <FiIcons.FiSend />,
  },
  {
    title: "Employee",
    path: "/employee",
    icon: <FaIcons.FaUsers />,
  },
];
