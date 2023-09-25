import { Section } from "../Section";

import { Action, Items, Modal, ModalContent } from "./styles";
import { LuPlayCircle, LuZoomIn, LuX } from "react-icons/lu";

import rogwarts from "../../assets/images/hogwarts.png";
import rogwarstBig from "../../assets/images/hogwatrs-big.png";

type GalleryItem = {
  type: "image" | "video";
  url: string;
};

const mock: GalleryItem[] = [
  {
    type: "image",
    url: rogwarts,
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/1O6Qstncpnc?si=1KLPBrQpcHPKdWpn",
  },
];

type Props = {
  defaultCover: string;
  name: string;
};

export const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (media: GalleryItem) => {
    if (media.type === "image") {
      return defaultCover;
    }
  };

  const getMediaIcon = (media: GalleryItem) => {
    if (media.type === "image") {
      return <LuZoomIn size={40} />;
    }

    return <LuPlayCircle size={40} />;
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media) => {
            return (
              <li key={media.url}>
                <img src={getMediaCover(media)} alt={name} />
                <Action>{getMediaIcon(media)}</Action>
              </li>
            );
          })}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <LuX size={40} />
          </header>
          <img src={rogwarstBig} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  );
};
