import styled from 'styled-components'
import { Container as TagContainer } from './../Tag/styles'

import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 480px;
  width: 100%;
  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: #000;
    opacity: 0.56;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  > h2 {
    font-size: 32px;
  }

  > p {
    font-size: 18px;
    margin: 16px 0;

    > span {
      text-decoration: line-through;
      display: block;
    }
  }
`
