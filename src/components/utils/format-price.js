const formatPrice = (value) => {
  const separedo = String(value).split('.');
  const real = separedo[0];
  const centavos = Number(separedo[1]) * 10;

  return `R$ ${real},${centavos}`;
};

export default formatPrice;
