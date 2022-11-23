import getData from './getdata.js';

const popUpContainer = document.querySelector('.popUp-bg');
const popUp = document.createElement('div');

const displaySelectedMeal = (selectedMeal) => {
  popUp.className = 'popUp';
  popUp.innerHTML = `
  <button class="closeBtn">X</button>
  <img class="popUpImg" src="${selectedMeal.strCategoryThumb}" alt="meal image">
  <h2 class="popUpTitle">${selectedMeal.strCategory}</h2>
  <p class="popUpDiscription">${selectedMeal.strCategoryDescription}</p>
  <h3 class="commentCount">Comments<span class="commentCounter">()</span></h3>
  <div class="comment">
      <p class="commentDate">03/11/2022</p>
      <p class="commenterName">Khusniddin:</p>
      <p class="commentContent">Lorem ipsum dolor sit amet.</p>
  </div>
  <h3 class="addComment">Add a comment</h3>
      <form class="inputComment" action="#" method="post">
          <input type="text" name="username" placeholder="Your name" required>
          <textarea type="text" name="comment" placeholder="Your insights" required></textarea>
          <button class="commentBtn" type="submit">Comment</button>
      </form>`;

  popUpContainer.appendChild(popUp);
};

const getSelectedMeal = async (selectedIdCat) => {
  const selectedMeals = await getData();
  if (selectedIdCat !== undefined) {
    displaySelectedMeal(selectedMeals.categories.find((meal) => meal.idCategory === selectedIdCat));
  }

  if (document.querySelector('.closeBtn') !== null) {
    document.querySelector('.closeBtn').addEventListener('click', (e) => {
      e.preventDefault();
      if (popUpContainer.style.display === 'flex') {
        popUpContainer.style.display = '';
      }
    });
  }
};

export default getSelectedMeal;