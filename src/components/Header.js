import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  height: 50px;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 라우터로 인해 컴포넌트가 교체 되면 Header에 변화를 줘야 한다.
//  라우터를 교체하기 위한 코드는 Header에 존재하고 있고, 우리는 Link를 클릭했을 때
//  어떠한 라우터가 눌렸는지를 알아야 하기 때문에 withRouter를 이용하여 Header 컴포너트에 의해 어떤 라우터로 교체되는지를 파악해야 한다.
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <StyledLink to="/">Movies</StyledLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <StyledLink to="/tv">TV</StyledLink>
      </Item>
      <Item current={pathname === "/search"}>
        <StyledLink to="/search">Search</StyledLink>
      </Item>
    </List>
  </Header>
));
