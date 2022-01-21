(function() {
  'use strict';

  var words = [
    {'ja':'飯を食う','vi':'ĂN CƠM'},
    {'ja':'かじる','vi':'NHAI'},
    {'ja':'含む','vi':'BAO GỒM'},
    {'ja':'あめをしゃぶる','vi':'MÚT KẸO'},
    {'ja':'味わう','vi':'NÊM, NẾM'},
    {'ja':'香りをかぐ','vi':'NGỬI HƯƠNG THƠM'},
    {'ja':'食欲がない','vi':'CHÁN ĂN'},
    {'ja':'湯飲み','vi':'TÁCH TRÀ'},
    {'ja':'お盆','vi':'MÂM, KHAY'},
    {'ja':'栄養をとる','vi':'DINH DƯỠNG'},
    {'ja':'消化','vi':'TIÊU HOÁ'},
    {'ja':'食事が胃にもたれる','vi':'KHÓ TIÊU THỨC ĂN'},
    {'ja':'宴会','vi':'BỮA TIỆC'},
    {'ja':'お酒を注ぐ','vi':'RÓT RƯỢU'},
    {'ja':'お酒を勧める','vi':'MỜI RƯỢU'},
    {'ja':'酔う','vi':'SAY RƯỢU'},
    {'ja':'頭痛がする','vi':'ĐAU ĐẦU'},
    {'ja':'吐き気がする','vi':'NÔN'},
    {'ja':'贅沢な材料','vi':'XA XỈ'},
    {'ja':'粗末な材料','vi':'ĐƠN GIẢN'},
    {'ja':'貴重','vi':'QÚI TRỌNG'},
    {'ja':'新鮮','vi':'TƯƠI, MỚI'},
    {'ja':'原産','vi':'NƠI SẢN XUẤT'},
    {'ja':'調味料','vi':'GIA VỊ'},
    {'ja':'酢','vi':'DẤM・NƯỚC TƯƠNG'},
    {'ja':'塩辛い','vi':'MẶN'},
    {'ja':'酸っぱい','vi':'SAY XỈN'},
    {'ja':'さっぱりした','vi':'NHẠT'},
    {'ja':'しつこい・くどい','vi':'NỒNG, ĐẶC'},
    {'ja':'好き嫌い','vi':'THÍCH VÀ GHÉT'},
    {'ja':'行列','vi':'XẾP HÀNG'},
    {'ja':'めまいがする','vi':'CHÓNG MẶT'},
    {'ja':'意識を失う','vi':'MẤT Ý THỨC'},
    {'ja':'酔いがさめる','vi':'TỈNH RƯỢU'},
    {'ja':'刺身をつまむ','vi':'KHẮP CÁ SỐNG'},
    {'ja':'しょう油','vi':'NƯỚC TƯƠNG'},
    {'ja':'こしょう','vi':'TIÊU'},
    {'ja':'しょっぱい','vi':'MẶN'},
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