import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarLink = styled(Link)`
  display: flex;
  color: #7b8eb5;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: -20px;
  font-weight: 500;

  &:hover {
    color: #347ae2;
    border-right: 4px solid #347ae2;
    cursor: pointer;
  }
  &:active {
    background: green;
    border-right: 4px solid #347ae2;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Submenu = ({ item }) => {
  return (
    <div>
      <SidebarLink to={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </div>
  );
};

export default Submenu;
