let slides=document.querySelectorAll('.slide');
counter=0;

const showSlide=(n)=>{
  slides[n].classList.remove('active-slide');
  slides[counter].classList.add('active-slide');
}
showSlide(counter);