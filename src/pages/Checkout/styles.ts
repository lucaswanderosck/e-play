import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div``

type RowProps = {
  marginTop?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
  margin-top: ${({ marginTop }) => marginTop || '0'};
`

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};

  label {
    font-size: 14px;
    color: ${colors.white};
    display: block;
    margin-bottom: 8px;
  }

  input,
  select {
    border: 1px solid ${colors.white};
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`

type TabButtonProps = {
  active?: boolean
}

export const TabButton = styled.button<TabButtonProps>`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ active }) => (active ? colors.green : colors.black)};
  border: none;
  color: ${colors.white};
  cursor: pointer;
  height: 32px;
  border-radius: 8px;
  margin-right: 16px;
  padding: 0 8px;

  svg {
    margin-right: 8px;
  }
`
