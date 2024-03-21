import styled from 'styled-components'
import { Container as ButtonContainer } from '../Button/styles'
import { Container as TagContainer } from '../Tag/styles'
import { colors } from './../../styles/GlobalStyles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const CartSideBar = styled.aside`
  background-color: ${colors.gray};
  z-index: 1;
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;

  > ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  > h4 {
    font-weight: bold;
    color: ${colors.white};
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  > span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGray};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin: 32px 0 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  div {
    > h3 {
      font-weight: bold;
      color: ${colors.white};
      font-size: 16px;
    }
    > span {
      display: block;
      font-size: 14px;
      color: ${colors.white};
      font-weight: bold;
    }
    > ${TagContainer} {
      margin: 8px 8px 16px 0;
    }
  }
  svg {
    cursor: pointer;
    position: absolute;
    top: 8;
    right: 0;
  }
`
