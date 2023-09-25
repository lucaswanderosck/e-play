import { Section } from "../Section";

import { Action, Items, Modal, ModalContent } from "./styles";
import { LuPlayCircle, LuZoomIn, LuX } from "react-icons/lu";

import rogwarts from "../../assets/images/hogwarts.png";
import { useState } from "react";

interface GalleryItem {
  type: "image" | "video";
  url: string;
}

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

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

export const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: "image",
    url: "",
  });

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

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: "image",
      url: "",
    });
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media) => {
            return (
              <li
                key={media.url}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    type: media.type,
                    url: media.url,
                  });
                }}
              >
                <img src={getMediaCover(media)} alt={name} />
                <Action>{getMediaIcon(media)}</Action>
              </li>
            );
          })}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? "active" : ""}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <LuX size={40} onClick={closeModal} />
          </header>
          {modal.type === "image" ? (
            <img src={modal.url} alt={name} />
          ) : (
            <iframe
              src={modal.url}
              title={name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  );
};
