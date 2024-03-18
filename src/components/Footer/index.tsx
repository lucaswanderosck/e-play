import { Container, FooterSection, LinkItem } from './styles'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <div className="container">
        <FooterSection>
          <h4>Categorias</h4>
          <ul>
            <li>
              <LinkItem to="/categorias#action">Ação</LinkItem>
            </li>
            <li>
              <LinkItem to="/categorias#fps">FPS</LinkItem>
            </li>
            <li>
              <LinkItem to="/categorias#rpg">RPG</LinkItem>
            </li>
            <li>
              <LinkItem to="/categorias#fight">Luta</LinkItem>
            </li>
            <li>
              <LinkItem to="/categorias#sports">Esportes</LinkItem>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Acesso rápido</h4>
          <ul>
            <li>
              <LinkItem to="/#on-sale">Promoções</LinkItem>
            </li>
            <li>
              <LinkItem to="/#coming-soon">Em breve</LinkItem>
            </li>
          </ul>
        </FooterSection>
        <div>
          <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados.</p>
        </div>
      </div>
    </Container>
  )
}
