// Consigue la lista de productos desde la API
export const getListOfProducts = async () => {
  const resp = await fetch("http://localhost:5000/api/products");
  const data = await resp.json();

  return data;
};
