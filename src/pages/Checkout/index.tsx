import { useState } from 'react'
import { FaBarcode, FaCreditCard } from 'react-icons/fa'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Container, InputGroup, Row, TabButton } from './styles'

export const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(true)

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
        <>
          <TabButton
            active={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <FaBarcode />
            <span>Boleto</span>
          </TabButton>
          <TabButton active={payWithCard} onClick={() => setPayWithCard(true)}>
            <FaCreditCard />
            <span>Cartão de Crédito</span>
          </TabButton>
          {payWithCard ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="nameCard">Nome do titular</label>
                  <input type="text" id="nameCard" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardCpf">CPF do titular</label>
                  <input type="text" id="cardCpf" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="CardDisplayName">Nome no Cartão</label>
                  <input type="text" id="CardDisplayName" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Numero do Cartão</label>
                  <input type="text" id="cardNumber" />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="cardExpirationMouth">Mes de Expiração</label>
                  <input type="text" id="cardExpiration" />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="cardExpirationYear">Ano de Expiração</label>
                  <input type="text" id="cardExpiration" />
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cardCvv">CVV</label>
                  <input type="text" id="cardCvv" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="140px">
                  <label htmlFor="parcela">Parcelamento</label>
                  <select name="parcela" id="parcela">
                    <option value="1">1x R$ 100,00</option>
                    <option value="2">2x R$ 50,00</option>
                    <option value="3">3x R$ 33,33</option>
                  </select>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a
              ipsum nostrum molestias reprehenderit alias quis, vel, perferendis
              quisquam excepturi animi. Similique facilis consequuntur optio
              magni atque eius. Sapiente, optio!
            </p>
          )}
        </>
      </Card>
      <Button type="button" title="Finalizar a compra">
        Finalizar Compra
      </Button>
    </Container>
  )
}
