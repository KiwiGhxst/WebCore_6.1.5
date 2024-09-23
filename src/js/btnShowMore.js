const btnShowBrend = document.querySelector('.expander_brend');
const btnShowTech = document.querySelector('.expander_tech');
const itemHidden = document.querySelectorAll('.swiper_item__hidden');
const slideHidden = document.querySelectorAll('.swiper_slide__hidden');

// Brend
btnShowBrend.addEventListener('click', () => {
  itemHidden.forEach(element => 
    element.classList.toggle('swiper_item__hidden')
  );
  
  if ( btnShowBrend.classList.contains('expander_more') ) {
    btnShowBrend.textContent = 'Показать всё';
  } else {
    btnShowBrend.textContent = 'Скрыть';
  } 
  btnShowBrend.classList.toggle('expander_more');
});

// Tech
btnShowTech.addEventListener('click', (event) => {
  slideHidden.forEach(element => 
    element.classList.toggle('swiper_slide__hidden')
  );
  
  if ( btnShowTech.classList.contains('expander_more') ) {
    btnShowTech.textContent = 'Показать всё';
  } else {
    btnShowTech.textContent = 'Скрыть';
  } 
  btnShowTech.classList.toggle('expander_more');
});