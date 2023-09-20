import { Container as TagContainer } from "./../Tag/styles";
import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 16px 0 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`;
