import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarContainer = styled.div`
  flex: 2;
  margin-bottom: 40px;

  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 215px;
  height: 155vh;
`;

export const NavIcon = styled(Link)`
  margin-left: 20px;
  font-size: 2rem;
  height: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SideBarNav = styled.nav`
  width: 215px;
  height: 100vh;
  border-left: 1.5px solid #e2e8fd;
  border-right: 1.5px solid #e2e8fd;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  margin-left: 16px;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e2e8fd;
  }
`;

export const Navheader = styled.div`
  display: flex;
  color: #347ae2;
  margin: 50px 0px 40px 0px;
  h1 {
    font-size: 24px;
    margin: 10px 0px 0px 15px;
  }
  img {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
`;

export const SidebarWrap = styled.div`
  margin-left: 20px;
  width: 100%;
`;

export const Bars = styled(FaIcons.FaBars)`
  font-size: 1.5rem;
  top: -240px;
  position: relative;
  /* transform: translate(-50%, -15%); */
  /* margin: -80px 0px 0px 0px; */
`;
export const Close = styled(AiIcons.AiOutlineClose)`
  font-size: 1rem;
  margin-left: -20px;
  margin: 20px 0px -20px -20px;
  /* transform: translate(-50%, -15%); */
`;
export const Footer = styled.div`
  margin: 200px 0px 0px 0px;
  width: 185px;
  height: 80px;
  h6 {
    font-size: 18px;
    color: #4c5a82;
    font-weight: bolder;
  }
  p {
    font-size: 12px;
    color: #7b8eb5;
    font-weight: 400;
  }
`;

export const SideBarNavMini = styled.nav`
  width: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  position: fixed;
  top: 0;

  /* height: 100vh;
  border-left: 1.5px solid #e2e8fd;
  border-right: 1.5px solid #e2e8fd;
  background-color: #ffffff;
  display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  margin-left: 16px;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: scroll; */
  ::-webkit-scrollbar {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e2e8fd;
  }
`;

export const SidebarWrapperMini = styled.div``;
