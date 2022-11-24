const displayMealLists = (meal) => {
  const container = document.getElementById('meal-item-container');
  const article = document.createElement('article');

  article.setAttribute('data-id', meal.idCategory);
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
        <p class="like-container">Loading...</p>
        <p>Likes</p>
      </div>
    </div>
    <button type="button" class="commentButton" id="comment-btn">Comment</button>
  </div>`;
  container.appendChild(article);
};

export default displayMealLists;
