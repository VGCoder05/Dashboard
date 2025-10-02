// This object represents the summary data for the top cards.
export const dashboardStats = {
  totalProducts: 125,
  averagePrice: 75.50,
  averageRating: 4.5,
};

export async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.products; // Return the actual array of products
  } catch (error) {
    console.error("Failed to fetch products:", error);
    // Re-throw the error so the calling component can handle it
    throw error;
  }
}