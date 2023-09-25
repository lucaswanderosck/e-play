import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import "animate.css";

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 0.73);
  display: grid;
  place-items: center;
  opacity: 0;
  transition: opacity 0.3s;

  > svg {
    color: ${colors.white};
    cursor: pointer;
  }
`;

export const Items = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 2rem;

  > li {
    position: relative;

    > img {
      border: 2px solid ${colors.white};
      border-radius: 8px;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }

    &:hover {
      ${Action} {
        opacity: 1;
      }
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.active {
    animation: fadeIn;
    animation-duration: 1s;
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 0.73);
  }
`;

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    svg {
      cursor: pointer;
    }
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    height: 480px;
    width: 100%;
  }
`;
