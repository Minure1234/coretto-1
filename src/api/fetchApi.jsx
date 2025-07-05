export const getPostmanCollection = async () => {
  const postmanKey = import.meta.env.VITE_POSTMAN_KEY;

  const url = `https://api.postman.com/collections/38946455-b8bd1044-1c0c-4678-815f-b10510f69a6c?access_key=${postmanKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.collection.item || [];
  } catch (error) {
    console.error("API çağrısında hata:", error);
    throw error;
  }
};
