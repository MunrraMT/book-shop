const formatPrice = (value) => {
  const priceSplit = String(value).split('.');
  const real = priceSplit[0];

  if (priceSplit[1] === undefined) {
    return `R$ ${real},00`;
  }

  const centavos = Number(priceSplit[1]) * 10;

  return `R$ ${real},${centavos}`;
};

export default formatPrice;
