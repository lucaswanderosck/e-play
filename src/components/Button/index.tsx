import { Container, ButtonLink } from "./styles";

type Props = {
  type: "button" | "link";
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

export const Button = ({ type, children, title, onClick, to }: Props) => {
  if (type === "button") {
    return (
      <Container type="button" title={title} onClick={onClick}>
        <a href="#">{children}</a>
      </Container>
    );
  }
  return (
    <ButtonLink as="a" to={to as string} title={title}>
      {children}
    </ButtonLink>
  );
};
