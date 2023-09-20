import styled from "styled-components";

export const Container = styled.section`
  padding: 32px 0;

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
