import styled from 'styled-components'
import { breakpoints, colors } from './../../styles/GlobalStyles'

export const Container = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${colors.lightGray};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const ButtonCart = styled.a`
  display: flex;
  cursor: pointer;

  > svg {
    margin-left: 16px;
  }
`
