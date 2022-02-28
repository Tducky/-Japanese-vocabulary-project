(function() {
  'use strict';

  var words = [
    {'ja':'親類','vi':'しょるい'},
    {'ja':'子孫','vi':'しそん'},
    {'ja':'親孝行','vi':'おやこうこう'},
    {'ja':'実家','vi':'じっか'},
    {'ja':'末っ子','vi':'すえっこ'},
    {'ja':'双子','vi':'ふたご'},
    {'ja':'知人','vi':'ちじん'},
    {'ja':'夫妻','vi':'ふさい'},
    {'ja':'付き合い','vi':'つきあい'},
    {'ja':'言葉遣い','vi':'ことばづかい'},
    {'ja':'気遣い','vi':'きづかい'},
    {'ja':'握手する','vi':'はあくする'},
    {'ja':'お辞儀をする','vi':'おじぎする'},
    {'ja':'たとえ','vi':'たとえ'},
    {'ja':'長年','vi':'ながねん'},
    {'ja':'ちっとも','vi':'ちっとも'},
    {'ja':'仕事仲間','vi':'しごとなかま'},
    {'ja':'勉強仲間','vi':'べんきょうなかま'},
    {'ja':'飲み仲間','vi':'のみなかま'},
    {'ja':'知り合い','vi':'しりあい'},
    {'ja':'話し合い','vi':'はなしあい'},
    {'ja':'金遣い','vi':'かねづかい'},


  ];

  var card = document.getElementById('card');
  var cardFront = document.getElementById('card-front');
  var cardBack = document.getElementById('card-back');
  var btn = document.getElementById('btn');
  card.addEventListener('click', function() {
    flip();
  });
  btn.addEventListener('click', function() {
    next();
  });

  function next() {
    if (card.className === 'open') {
      card.addEventListener('transitionend', setCard);
      flip();
    } else {
      setCard();
    }
  }

  function setCard() {
    var num = Math.floor(Math.random() * words.length);
    cardFront.innerHTML = words[num]['ja'];
    cardBack.innerHTML = words[num]['vi'];
    card.removeEventListener('transitionend', setCard);
  }

  setCard();

  window.addEventListener('keyup', function(e) {
    // e.keyCode
    // f: 70
    // n: 78
    // console.log(e.keyCode);
    if (e.keyCode === 70) {
      flip();
    } else if (e.keyCode === 78) {
      next();
    }
  });

  function flip() {
    card.className = card.className === '' ? 'open' : '';
  }

})();