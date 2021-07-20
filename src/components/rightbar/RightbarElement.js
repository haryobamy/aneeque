import styled from "styled-components";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

export const RightbarContainer = styled.div`
  flex: 3;

  height: 155vh;
  width: 350px;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  h2 {
    margin: 10px 20px -5px 20px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const RightbarHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.button`
  background-color: transparent;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: 1.5px solid #e2e8fd;
`;

export const TopIcons = styled.div`
  display: flex;
  margin: 40px 20px 30px 20px;
  justify-content: space-between;
  align-items: center;
  /* background-color: whitesmoke; */
`;

export const BellIcon = styled(AiIcons.AiFillBell)`
  font-size: 1.5rem;
`;
export const EditIcon = styled(AiIcons.AiFillEdit)`
  font-size: 1.5rem;
`;
export const ImageContainer = styled.div`
  margin: 0px auto;

  align-items: center;
  justify-content: center;
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  width: 180px;
  border-left: 1px solid gray;
  text-align: start;
  line-height: 0.5;
  margin: auto 10px;
  h {
    color: gray;
    font-weight: 400;
    font-size: 14px;
  }
  h4 {
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
  }
`;

export const Card = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
  border: 1px solid #e2e8fd;
  border-radius: 10px;
  height: 100px;
  color: darkblue;
`;
export const ShoppingIcon = styled(FaIcons.FaShoppingBag)`
  font-size: 1.2rem;

  margin-top: 5px;
`;
export const UserIcon = styled(FaIcons.FaUsers)`
  font-size: 1.2rem;

  margin-top: 5px;
`;

export const RecentCard = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
  border: 1px solid #e2e8fd;
  border-radius: 10px;
  height: 100px;
  color: darkblue;
  flex-direction: column;
  height: 270px;
`;

export const RecentItem = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: start;
  margin: 20px 10px -5px 10px;

  h3 {
    font-size: 1.1rem;
    text-align: start;
    /* margin-top: 20px; */
    margin-bottom: 0px;
  }
  p {
    color: #8a99b9;
    margin-top: 10px;
    font-size: 13px;
  }
  i {
    font-weight: bolder;
    color: #59b193;
  }
  h3 {
    font-size: 17px;
  }
`;
export const SeeAll = styled(Link)`
  font-weight: bold;
  margin-right: 20px;
  margin-top: 8px;
  text-decoration: none;
  font-size: 1rem;
`;

export const ReputitionItem = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  width: 380px;
  margin: 10px 20px;
  h6 {
    font-size: 18px;
  }
  i {
    font-weight: bold;
  }
`;
