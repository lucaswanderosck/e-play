import { useFormik } from 'formik'
import { useState } from 'react'
import { FaBarcode, FaCreditCard } from 'react-icons/fa'
import * as Yup from 'yup'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Container, InputGroup, Row, TabButton } from './styles'

export const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(true)

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      nameCard: '',
      cardCpf: '',
      cardDisplayName: '',
      cardNumber: '',
      cardExpirationMouth: '',
      cardExpirationYear: '',
      cardCvv: '',
      parcela: '1',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5).required('Campo obrigatório'),
      email: Yup.string().email('Email inválido').required('Campo obrigatório'),
      cpf: Yup.string().min(14).max(14).required('Campo obrigatório'),
      deliveryEmail: Yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Emails não conferem')
        .required('Campo obrigatório'),

      nameCard: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema,
      ),
      cardCpf: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema,
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema,
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema,
      ),
      cardExpirationMouth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema,
      ),
      cardExpirationYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema,
      ),
      cardCvv: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema,
      ),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })

  console.log(form)

  const getErrorMessage = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const hasError = field in form.errors

    if (isTouched && hasError) return message
    return ''
  }

  return (
    <Container className="container" onSubmit={form.handleSubmit}>
      <Card title="Dados de Cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('name', form.errors.name)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </InputGroup>
          </Row>
          <h3>Dados de Entrega - Conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">Email</label>
              <input
                type="text"
                id="deliveryEmail"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
              <input
                type="text"
                id="confirmDeliveryEmail"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail,
                )}
              </small>
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
                  <input
                    type="text"
                    id="nameCard"
                    name="nameCard"
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('nameCard', form.errors.nameCard)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardCpf">CPF do titular</label>
                  <input
                    type="text"
                    id="cardCpf"
                    name="cardCpf"
                    value={form.values.cardCpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardCpf', form.errors.cardCpf)}
                  </small>
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="CardDisplayName">Nome no Cartão</label>
                  <input
                    type="text"
                    id="CardDisplayName"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'cardDisplayName',
                      form.errors.cardDisplayName,
                    )}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Numero do Cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="cardExpirationMouth">Mes de Expiração</label>
                  <input
                    type="text"
                    id="cardExpirationMouth"
                    name="cardExpirationMouth"
                    value={form.values.cardExpirationMouth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'cardExpirationMouth',
                      form.errors.cardExpirationMouth,
                    )}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="cardExpirationYear">Ano de Expiração</label>
                  <input
                    type="text"
                    id="cardExpirationYear"
                    name="cardExpirationYear"
                    value={form.values.cardExpirationYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'cardExpirationYear',
                      form.errors.cardExpirationYear,
                    )}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cardCvv">CVV</label>
                  <input
                    type="text"
                    id="cardCvv"
                    name="cardCvv"
                    value={form.values.cardCvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardCvv', form.errors.cardCvv)}
                  </small>
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="140px">
                  <label htmlFor="parcela">Parcelamento</label>
                  <select
                    name="parcela"
                    id="parcela"
                    value={form.values.parcela}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  >
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
