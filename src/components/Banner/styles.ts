import styled from "styled-components";
import BannerImg from "../../assets/images/banner-homem-aranha.png";

export const Container = styled.div`
  background-image: url(${BannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 560px;
  display: block;
  font-weight: bold;
  padding-top: 340px;
`;

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`;

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  > span {
    text-decoration: line-through;
  }
`;
