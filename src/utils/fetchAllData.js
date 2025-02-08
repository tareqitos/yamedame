export const fetchData = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${API_URL}/api/all`);
    const result = await response.json();

    let data = Object.values(result).flat();

    return data;
  } catch (err) {
    console.error("Failed to fetch data:", err);
  }
};
