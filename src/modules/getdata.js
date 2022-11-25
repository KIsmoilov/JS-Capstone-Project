const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const getData = async () => {
  const response = await fetch(
    `${API_URL}`,
    {
      method: 'GET',
    },
  );
  return response.json();
};

export default getData;