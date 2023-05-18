const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const content2 = document.querySelector('.content2');

modalBtn.addEventListener('click', function () {
  content2.classList.add('open-content2');
});
closeBtn.addEventListener('click', function () {
  content2.classList.remove('open-content2');
});
