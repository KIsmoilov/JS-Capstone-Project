import './index.css';
import getSelectedMeal from './modules/popUpDom.js';
import { getCommentData } from './modules/postComment.js';

const comment = document.getElementById('comment-btn');
let selectedIdCat;

comment.addEventListener('click', (e) => {
  e.preventDefault();
  if (document.querySelector('.popUp-bg').style.display === '') {
    document.querySelector('.popUp-bg').style.display = 'flex';
  }
  selectedIdCat = e.currentTarget.closest('article').getAttribute('data-id');
  getSelectedMeal(selectedIdCat);
});

getSelectedMeal();

getCommentData();