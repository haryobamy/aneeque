import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: 0;
    margin: 0;
    padding: 0;
    font-family: 'kanit' sans-serif;
    /* border-radius: 20px; */
}

.home{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    height: 155vh;
    border-left: 2px solid #e2e8fd;
  border-right: 2px solid #e2e8fd;
}
  
`;
export const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const MainContainer = styled.div`
  flex: 7;
  /* background-color: red; */
  margin: 0px auto;
  height: 155vh;
`;
