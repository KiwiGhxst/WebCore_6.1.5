// Brend Const
const itemHidden = document.querySelectorAll('.swiper_item__hidden');
const slideHidden = document.querySelectorAll('.swiper_slide__hidden');
// Tech Const
const btnShowBrend = document.getElementById('showMoreBrend');
const btnShowTech = document.getElementById('showMoreTech');


// Brend
btnShowBrend.addEventListener('click', (event) => {
  itemHidden.forEach(element => 
    element.classList.toggle('swiper_item__hidden')
  );
  
  if ( event.target.classList.contains('expander_more') ) {
    event.target.textContent = 'Показать всё';
    event.target.classList.toggle('expander_more');
  } else {
    event.target.textContent = 'Скрыть';
    event.target.classList.toggle('expander_more');
  } 
});

// Tech
btnShowTech.addEventListener('click', (event) => {
  slideHidden.forEach(element => 
    element.classList.toggle('swiper_slide__hidden')
  );
  
  if ( event.target.classList.contains('expander_more') ) {
    event.target.textContent = 'Показать всё';
    event.target.classList.toggle('expander_more');
  } else {
    event.target.textContent = 'Скрыть';
    event.target.classList.toggle('expander_more');
  } 
});