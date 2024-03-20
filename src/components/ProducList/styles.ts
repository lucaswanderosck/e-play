import styled from 'styled-components'
import { Container as CardContainer } from '../Product/styles'

import { Props } from '.'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${CardContainer} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 24px;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
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
    li {
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
  }
`
