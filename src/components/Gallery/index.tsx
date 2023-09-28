import { useState } from "react";

import { Action, Items, Item, Modal, ModalContent } from "./styles";

import { Section } from "../Section";
import { GalleryItem } from "../../pages/Home";
import { LuPlayCircle, LuZoomIn, LuX } from "react-icons/lu";

type Props = {
  items: GalleryItem[];
  defaultCover: string;
  name: string;
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

export const Gallery = ({ items, defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: "image",
    url: "",
  });

  const getMediaCover = (media: GalleryItem) => {
    if (media.type === "image") return media.url;
    {
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
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url,
                });
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
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
