import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div``

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`
export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    color: ${colors.white};
    display: block;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid ${colors.white};
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
