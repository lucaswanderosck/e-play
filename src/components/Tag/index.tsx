import { Container } from "./styles";

export type Props = {
  size?: "small" | "big";
  children: string;
};

export const Tag = ({ children, size = "small" }: Props) => {
  return <Container size={size}>{children}</Container>;
};
