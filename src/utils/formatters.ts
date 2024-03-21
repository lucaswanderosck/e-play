export const formatPriceToBRL = (price: number = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

export const getTotalPrices = (items: Game[]) => {
  return items.reduce((acc, item) => {
    return (acc += item.prices.current!)
  }, 0)
}
