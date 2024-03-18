import { Container } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: React.ReactNode
}

export const Section = ({ title, background, children }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </Container>
  )
}
