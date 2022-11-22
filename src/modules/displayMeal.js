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
                    <i class="uil uil-heart heart-icon"></i>
                    <span id="likes"></span>
                    <p>Likes</p>
                </div>
                </div>
                <button type="button" id="comment-btn">Comment</button>
            </div>`.trim();

 container.appendChild(article);
}

export { displayMealLists };