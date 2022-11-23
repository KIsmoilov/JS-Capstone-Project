import { likeGetData , likePostData } from "./getLikeData.js";


const displayMealLists = (meal, likes) => {
  const container = document.getElementById('meal-item-container');
  const article = document.createElement('article');
  const itemLike = likes.find((item) => item.item_id === meal.idCategory);
  article.setAttribute('data-id',meal.idCategory);
  article.innerHTML = `
  <div class="meal-item">
                <div class="meal-img">
                <img src="${meal.strCategoryThumb}" alt="meal images">
                </div>
                <div class="meal-name">
                  <div class="meal-title">
                  <h3>${meal.strCategory}</h3>
                   </div>
                    <div class="like-counter">
                    <i class="uil uil-heart heart-icon"></i>

                    <p class="like-container">${itemLike.likes}</p>
                    <p>Likes</p>
                </div>
                </div>
                <button type="button" id="comment-btn">Comment</button>
            </div>`;

    
      

  container.appendChild(article);


};



export {  displayMealLists };