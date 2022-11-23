import './index.css';
import getMealLists from './modules/display.js';
import homeItemCounter from './modules/homeItemsCounter.js';
import  getData  from './modules/getdata.js';

window.addEventListener('DOMContentLoaded', () => {
 getMealLists();
 const homeCounter = document.querySelector('.item-counter');

 const getList = async () => {
  const mealLists = await getData();
  const counterArray = mealLists.categories;
  homeCounter.textContent = homeItemCounter(counterArray);
 } 
 getList();
});
