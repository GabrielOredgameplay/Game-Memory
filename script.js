const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;


  this.classList.add('flip');

  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  }


  hasFlippedCard = false;
  secondCard = this;


  console.log(firstCard.dataset.framework);
  console.log(secondCard.dataset.framework);

    tututu();
  }

  function tututu(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;


      isMatch ? embaralhar() : unflip();



  }

  function embaralhar(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }

  function unflip(){
    lockBoard = true;
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
  }, 1500);

  }

  (function embaralharcartas(){
    cards.forEach(card => {
      let pocicao = Math.floor(Math.random() * 4);
      card.style.order = pocicao;


    });


  }  ) ();


cards.forEach(card => card.addEventListener("click", flipCard))
  ;
