export const fetchProducts = async (page = 1, limit = 10) => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.slice((page - 1) * limit, page * limit); // simulate pagination
};
