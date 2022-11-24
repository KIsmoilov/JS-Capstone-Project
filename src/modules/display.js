import getData from './getdata.js';
import displayMealLists from './displayMeal.js';
import { likeGetData, likePostData } from './getLikeData.js';

const container = document.getElementById('meal-item-container');

const setLikes = (heart, likes) => {
  const id = heart.closest('article').getAttribute('data-id');
  const item = likes.find((item) => item.item_id === id);
  heart.textContent = item.likes;
};

const handleLikeClick = (heart) => {
  const id = heart.closest('article').getAttribute('data-id');
  heart.addEventListener('click', async () => {
    await likePostData(id);
    const likes = await likeGetData();
    const hearts = container.querySelectorAll('.like-container');
    hearts.forEach((heart) => {
      setLikes(heart, likes);
    });
  });
};

const getMealLists = async () => {
  const mealLists = await getData();
  const likes = await likeGetData();

  mealLists.categories.forEach((meal) => {
    displayMealLists(meal);
  });

  const hearts = container.querySelectorAll('.like-container');
  const heartIcons = container.querySelectorAll('.heart-icon');

  hearts.forEach((heart) => {
    setLikes(heart, likes);
  });

  heartIcons.forEach((heart) => {
    handleLikeClick(heart);
  });
};

export default getMealLists;
