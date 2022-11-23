import getData from './getdata.js';
import { getCommentData, addCommentInput } from './postComment.js';

const popUpContainer = document.querySelector('.popUp-bg');
const popUp = document.createElement('div');

const createComments = (comments) => {
  const commentMainDiv = document.querySelector('.comment');

  for (let i = 0; i < comments.length; i += 1) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-item';
    commentDiv.innerHTML = `
     <p class="commentDate">${comments[i].creation_date}</p>
     <p class="commenterName">${comments[i].username}:</p>
     <p class="commentContent">${comments[i].comment}</p>
     `;
    commentMainDiv.appendChild(commentDiv);
  }
};

const displaySelectedMeal = (selectedMeal, comments) => {
  popUp.className = 'popUp';
  popUp.innerHTML = `
  <button class="closeBtn">X</button>
  <img class="popUpImg" src="${selectedMeal.strCategoryThumb}" alt="meal image">
  <h2 class="popUpTitle">${selectedMeal.strCategory}</h2>
  <p class="popUpDiscription">${selectedMeal.strCategoryDescription}</p>
  <h3 class="commentCount">Comments<span class="commentCounter">(${comments.length ? comments.length : 0})</span></h3>
  <div class="comment">     
  </div>
  <h3 class="addComment">Add a comment</h3>
      <form class="inputComment" id="inputComment" action="#" method="post">
          <input type="text" name="username" placeholder="Your name" required>
          <textarea type="text" name="comment" placeholder="Your insights" required></textarea>
          <button class="commentBtn">Comment</button>
      </form>`;

  popUpContainer.appendChild(popUp);
  createComments(comments);
};

const getSelectedMeal = async (selectedIdCat) => {
  const selectedMeals = await getData();
  if (selectedIdCat !== undefined) {
    const commentObj = await getCommentData(selectedIdCat);
    const selectedMeal = selectedMeals.categories.find((meal) => meal.idCategory === selectedIdCat);
    displaySelectedMeal(selectedMeal, commentObj);
  }

  document.getElementById('inputComment').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userNameInput = document.getElementById('inputComment').elements.username;
    const commentInput = document.getElementById('inputComment').elements.comment;

    const newComment = {
      item_id: 2,
      username: userNameInput.value.trim(),
      comment: commentInput.value.trim(),
    };

    addCommentInput(newComment);
    document.getElementById('inputComment').reset();
  });

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