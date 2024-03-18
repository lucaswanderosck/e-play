import { Container, FooterSection } from './styles'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <div className="container">
        <FooterSection>
          <h4>Categorias</h4>
          <ul>
            <li>
              <a href="#">Ação</a>
            </li>
            <li>
              <a href="#">Aventura</a>
            </li>
            <li>
              <a href="#">FPS</a>
            </li>
            <li>
              <a href="#">RPG</a>
            </li>
            <li>
              <a href="#">Estratégia</a>
            </li>
            <li>
              <a href="#">Esportes</a>
            </li>
            <li>
              <a href="#">Simulação</a>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Acesso rápido</h4>
          <ul>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
            <li>
              <a href="#">Em breve</a>
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
