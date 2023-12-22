import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Link } from "react-router-dom";

import { Props } from ".";

export const Container = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variation === "primary" ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variation === "primary" ? colors.green : "transparent"};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.variation === "primary" ? "transparent" : colors.green};
    color: ${(props) =>
      props.variation === "primary" ? colors.green : colors.white};
  }
`;

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.gray};
  }
`;
