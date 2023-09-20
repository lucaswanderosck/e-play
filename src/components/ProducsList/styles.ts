import { Container as CardContainer } from "./../Product/styles";
import styled from "styled-components";

import { Props } from ".";
import { colors } from "../../styles/GlobalStyles";

export const Container = styled.section<Omit<Props, "title">>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === "black" ? colors.black : colors.gray};

  ${CardContainer} {
    background-color: ${(props) =>
      props.background === "black" ? colors.gray : colors.black};
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 24px;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
`;
