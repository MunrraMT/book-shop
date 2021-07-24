const getFetch = async (url) => {
  const response = await fetch(`${url}`);

  if (!response.ok) {
    throw new Error(`Erro no Get de ${url}`);
  }

  const data = await response.json();

  return data;
};

export default getFetch;
