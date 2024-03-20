import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Container, InputGroup, Row } from './styles'

export const Checkout = () => {
  return (
    <Container className="container">
      <Card title="Dados de Cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="name">Nome completo</label>
              <input type="text" id="name" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </InputGroup>
          </Row>
          <h3>Dados de Entrega - Conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">Email</label>
              <input type="text" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
              <input type="text" id="confirmDeliveryEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a
            ipsum nostrum molestias reprehenderit alias quis, vel, perferendis
            quisquam excepturi animi. Similique facilis consequuntur optio magni
            atque eius. Sapiente, optio!
          </p>
        </div>
      </Card>
      <Button type="button" title="Finalizar a compra">
        Finalizar Compra
      </Button>
    </Container>
  )
}
