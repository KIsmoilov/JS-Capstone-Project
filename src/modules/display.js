import getData from './getdata.js';
import displayMealLists from './displayMeal.js';
import { likePostData } from './getLikeData.js';

const getMealLists = async () => {
  const mealLists = await getData();
  mealLists.categories.forEach((meal) => {
    displayMealLists(meal);
    document.querySelectorAll('.heart-icon').forEach((heart) => {
      heart.addEventListener('click', () => {
        likePostData(heart.id);
      //  console.log(heart.id);
      //  displayLikes(heart.id);
      });
    });
  });
};

export default getMealLists;
