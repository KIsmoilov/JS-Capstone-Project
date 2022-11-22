import { getData } from "./getdata.js";
import { displayMealLists } from "./displayMeal.js";


const getMealLists = async () => {
 const  mealLists = await getData();

 mealLists.categories.forEach((meal) => {
   displayMealLists(meal);
 });

}


export { getMealLists };

