const formatPrice = (value) => {
  const priceSplit = String(value).split('.');

  if (priceSplit[1] === undefined) return `R$ ${priceSplit[0]},00`;
  if (priceSplit[1].length === 1)
    return `R$ ${priceSplit[0]},0${priceSplit[1]}`;

  return `R$ ${priceSplit[0]},${priceSplit[1]}`;
};

export default formatPrice;
