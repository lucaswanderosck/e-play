import { ButtonLink, Container } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variation?: 'primary' | 'secondary'
}

export const Button = ({
  type,
  children,
  title,
  onClick,
  to,
  variation = 'primary',
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <Container
        type={type}
        variation={variation}
        title={title}
        onClick={onClick}
      >
        {children}
      </Container>
    )
  }
  if (type === 'link') {
    return (
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    )
  }
}
