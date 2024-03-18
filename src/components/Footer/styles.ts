import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;

  > h4 {
    font-size: 16px;
    font-weight: bold;
  }

  > ul {
    display: flex;
    margin-top: 16px;

    > li {
      > a {
        color: ${colors.lightGray};
        text-decoration: none;
        margin-right: 8px;

        &:hover {
          color: ${colors.white};
        }
      }
    }
  }
`
