import { Container as TagContainer } from "./../Tag/styles";
import styled from "styled-components";

export const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 560px;
  display: block;
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`;

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  > span {
    text-decoration: line-through;
  }
`;