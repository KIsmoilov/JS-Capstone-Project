const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes`;

const likeGetData = async () => {
  const response = await fetch(
    `${url}`,
  );
  return response.json();
};

const likePostData = async (mealId, element) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  console.log(response);
};

export { likeGetData, likePostData };