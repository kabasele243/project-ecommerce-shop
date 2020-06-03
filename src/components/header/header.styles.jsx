import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #0396ff;
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
  color: white;
  margin-left: 25px;
`;

export const Logo = styled.h1`
  margin-bottom: 0;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
`;
