import { likeGetData } from "./getLikeData.js";
import { getData } from "./getdata.js";

const displayMealLists =(meal) => {
 const container = document.getElementById('meal-item-container');
 const article = document.createElement('article');
 article.innerHTML = `
  <div class="meal-item">
                <div class="meal-img" data-id= "${meal.idCategory}">
                <img src="${meal.strCategoryThumb}" alt="meal images">
                </div>
                <div class="meal-name">
                  <div class="meal-title">
                  <h3>${meal.strCategory}</h3>
                   </div>
                    <div class="like-counter">
                    <i class="uil uil-heart heart-icon" id="${
                      meal.idCategory
                    }"></i>
                    <span class="likes" id="${meal.idCategory}" > </span>
                    <p>Likes</p>
                </div>
                </div>
                <button type="button" id="comment-btn">Comment</button>
            </div>`.trim();

 container.appendChild(article);
}


// const displayLikes = async(id) => {
//     const likeLists = await likeGetData();
//     likeLists.forEach(async (like)  => {
//        if(like.item_id === id ) {
//         console.log(Number(like.likes));
//         return await like.likes;
//        }
       
//     });
// }

export { displayMealLists , displayLikes };