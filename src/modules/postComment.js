const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments`;
const urlGet = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments?item_id=`;

const getCommentData = async (id) => {
  const urlWithID = urlGet + id;
  if (id !== undefined) {
    const response = await fetch(
      `${urlWithID}`,
    );
    return response.json();
  }
  return null;
};

const addCommentInput = async (newComment) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const allComments = await getCommentData(newComment.item_id);
  return allComments;
};

export { getCommentData, addCommentInput };