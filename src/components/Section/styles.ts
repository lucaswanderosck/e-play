import styled from 'styled-components'

import { Container as CardContainer } from '../Product/styles'

import { Props } from '.'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
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

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
