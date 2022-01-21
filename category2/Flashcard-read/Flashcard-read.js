(function() {
  'use strict';

  var words = [
    {'ja':'飯を食う','vi':'ごはんをくう'},
    {'ja':'かじる','vi':'かじる'},
    {'ja':'含む','vi':'ふくむ'},
    {'ja':'あめをしゃぶる','vi':'あめをしゃぶる'},
    {'ja':'味わう','vi':'あじわう'},
    {'ja':'香りをかぐ','vi':'かおりをかぐ'},
    {'ja':'食欲がない','vi':'いんしょくがない'},
    {'ja':'湯飲み','vi':'ゆのみ'},
    {'ja':'お盆','vi':'おぼん'},
    {'ja':'栄養をとる','vi':'えいようをとる'},
    {'ja':'消化','vi':'しょうか'},
    {'ja':'食事が胃にもたれる','vi':'いにもたれる'},
    {'ja':'宴会','vi':'えんかい'},
    {'ja':'お酒を注ぐ','vi':'そそぐ'},
    {'ja':'お酒を勧める','vi':'すすめる'},
    {'ja':'酔う','vi':'よう'},
    {'ja':'頭痛がする','vi':'ずつう'},
    {'ja':'吐き気がする','vi':'はきけがする'},
    {'ja':'贅沢な材料','vi':'ぜいたく'},
    {'ja':'粗末な材料','vi':'そまつ'},
    {'ja':'貴重','vi':'きちょう'},
    {'ja':'新鮮','vi':'しんせん'},
    {'ja':'原産','vi':'げんさん'},
    {'ja':'調味料','vi':'ちょうみりょう'},
    {'ja':'酢','vi':'す'},
    {'ja':'塩辛い','vi':'しおからい'},
    {'ja':'酸っぱい','vi':'よっぱらい'},
    {'ja':'さっぱりした','vi':'さっぱりした'},
    {'ja':'しつこい・くどい','vi':'しつこい・くどい'},
    {'ja':'好き嫌い','vi':'すききらい'},
    {'ja':'行列','vi':'ぎょうれつ'},
    {'ja':'めまいがする','vi':'めまいがする'},
    {'ja':'意識を失う','vi':'いしきがうしなう'},
    {'ja':'酔いがさめる','vi':'酔いがさめる'},
    {'ja':'刺身をつまむ','vi':'さしみをつかむ'},
    {'ja':'しょう油','vi':'しょうゆ'},
    {'ja':'こしょう','vi':'こしょう'},
    {'ja':'しょっぱい','vi':'しょっぱい'},
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