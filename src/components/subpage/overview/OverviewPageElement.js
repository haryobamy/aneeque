import styled from "styled-components";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

export const OverviewWrapper = styled.div`
  display: flex;
  /* align-items: center; */

  /* margin: 40px auto; */
  /* justify-content: center; */
  /* font-size: 3rem; */
  height: 155vh;
  flex-direction: column;
  border-left: 1.5px solid #e2e8fd;
  border-right: 1.5px solid #e2e8fd;
`;
export const Search = styled.div`
  margin: 40px auto 30px auto;
  background-color: #f6faff;
  border-radius: 45px;
  width: 90%;
  display: flex;
  align-items: center;
  height: 60px;
  input {
    width: 90%;
    border: none;
    outline: none;
    height: 30px;
    background: transparent;
    color: #8a99b9;
  }
`;

export const Searchicon = styled(FiIcons.FiSearch)`
  font-size: 1.5rem;
  margin: 0px 10px 0px 20px;
  color: #37497a;
`;
export const CardSection = styled.div`
  margin: 10px;
  display: flex;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
export const CardHead = styled.div`
  margin: 0px 20px;
  text-align: start;
  color: #37497a;
  /* background-color: yellow; */
  font-weight: bold;
`;

export const Card = styled.div`
  text-align: start;
  align-items: center;
  justify-content: flex-end;
  width: 170px;
  height: 110px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: -22px auto 0px auto;
  padding: 25px;
  border: 1px solid #e2e8fd;

  h6 {
    margin: -5px -10px 5px 0px;
    font-weight: bold;
    width: 170px;
    font-size: 1.2rem;
    color: #37497a;
  }
  i {
    margin: 0px -20px -10px -10px;
    width: 170px;
    color: #8a99b9;
    font: 400;
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
export const CardTop = styled.div`
  font-size: 0.9rem;
  display: flex;
  width: 160px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  margin: -65px 20px 0px 20px;
`;
export const Cardicon1 = styled(FaIcons.FaShoppingBag)`
  font-size: 1.2rem;
  margin-top: -15px;
  color: #ed8144;
`;
export const Cardicon2 = styled(AiIcons.AiFillPieChart)`
  font-size: 1.2rem;
  margin-top: -15px;
  color: #9b54e2;
`;
export const Cardicon3 = styled(FaIcons.FaUsers)`
  font-size: 1.2rem;
  margin-top: -15px;
  color: #29b171;
`;
export const Cardicon4 = styled(IoIcons.IoMdCart)`
  font-size: 1.2rem;
  margin-top: -15px;
  color: #f35051;
`;

export const ProductsTable = styled.div`
  border: 1px solid #e2e8fd;
  height: 280px;
  border-radius: 5px;

  margin: 30px 20px 10px 20px;
  padding: 5px 0px;
  p {
    margin-bottom: 5px;
    font-weight: bold;
    color: #37497a;
  }
`;
export const TableTitle = styled.div`
  display: flex;
  text-align: start;
  background-color: #f6faff;
  margin: 0px 15px;
`;

export const ProductsPhotos = styled.div`
  flex: 1.7;
`;

export const ProductsName = styled.div`
  flex: 2;
  /* margin-left: 20px; */
`;

export const ProductsDate = styled.div`
  flex: 2.1;
`;

export const ProductsCategory = styled.div`
  flex: 1.7;
`;

export const ProductsBrand = styled.div`
  flex: 1.5;
`;

export const ProductsPrice = styled.div`
  flex: 1.6;
`;

export const ProductsStatus = styled.div`
  flex: 1.6;
`;

export const Products = styled.div`
  display: flex;
  h {
    color: #8d9bb9;
    font-size: 0.9rem;
  }
  h6 {
    color: #37497a;
    margin-bottom: 4px;
    padding-top: 5px;
  }
`;

export const IncomeWrapper = styled.div`
  background-color: #ffffff;
  margin: 20px 20px;
  border: 1px solid #e2e8fd;
  border-radius: 5px;
  height: 300px;
`;
export const IncomeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 15px;
  h6 {
    margin-right: 20px;
    color: #37497a;
    font-weight: bold;
  }
  select {
    border: 1px solid #e2e8fd;
    outline: none;
    color: #37497a;
    font-weight: 700;
  }
`;

export const PaperWrapper = styled(Paper)`
  background-color: yellow;
`;
