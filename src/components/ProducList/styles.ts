import { Container as CardContainer } from "../Product/styles";
import styled from "styled-components";

import { Props } from ".";
import { colors } from "../../styles/GlobalStyles";

export const Container = styled.section<Omit<Props, "title" | "games">>`
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 24px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }

  &:hover {
    > :not(:hover) {
      opacity: 0.5;
      transform: scale(0.9);
      transition: 0.35s;
    }

    > :hover {
      img {
        transform: scale(1.1);
        filter: blur(0);
      }
    }
  }
`;
