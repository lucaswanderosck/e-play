import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'
import { Container as TagContainer } from './../Tag/styles'

export const Container = styled(Link)`
  background-color: ${colors.gray};
  position: relative;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.35s;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  height: 100%;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 16px 0 8px;
`

export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ImgZoomWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
  }
`
