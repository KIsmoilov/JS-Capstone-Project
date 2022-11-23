import getData from './getdata.js';
import { displayMealLists  } from './displayMeal.js';
import { likeGetData, likePostData } from './getLikeData.js';
const container = document.getElementById('meal-item-container');
const getMealLists = async () => {
  const mealLists = await getData();
  const displayLikes = await likeGetData();
  mealLists.categories.forEach((meal) => {
    displayMealLists(meal, displayLikes);
    const heart = container.lastElementChild.querySelector('.heart-icon');
    heart.addEventListener('click',async () => {
      const getId = heart.closest('article').getAttribute('data-id');
      await likePostData(getId);
      const displayLikes = await likeGetData();
      displayMealLists(meal, displayLikes);
    })
    
  });
};

export default getMealLists;
