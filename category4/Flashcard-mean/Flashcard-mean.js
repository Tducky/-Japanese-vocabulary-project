(function() {
  'use strict';

  var words = [
    {'ja':'親類','vi':'HỒ SƠ'},
    {'ja':'子孫','vi':'CON CHÁU'},
    {'ja':'親孝行','vi':'HIẾU THẢO'},
    {'ja':'実家','vi':'QUÊ HƯƠNG'},
    {'ja':'末っ子','vi':'CON ÚT'},
    {'ja':'双子','vi':'SINH ĐÔI'},
    {'ja':'知人','vi':'NGƯỜI QUEN'},
    {'ja':'夫妻','vi':'VỢ CHỒNG'},
    {'ja':'付き合い','vi':'SỰ KẾT HỢP'},
    {'ja':'言葉遣い','vi':'CÁCH DÙNG TỪ'},
    {'ja':'気遣い','vi':'SỰ LO LẮNG'},
    {'ja':'握手する','vi':'NẮM BẮT'},
    {'ja':'お辞儀をする','vi':'CÚI CHÀO'},
    {'ja':'たとえ','vi':'DÙ, CHO DÙ'},
    {'ja':'長年','vi':'NHIỀU NĂM'},
    {'ja':'ちっとも','vi':'MỘT CHÚT'},
    {'ja':'仕事仲間','vi':'ĐỒNG NGHIỆP'},
    {'ja':'勉強仲間','vi':'BẠN HỌC'},
    {'ja':'飲み仲間','vi':'BẠN NHẬU'},
    {'ja':'知り合い','vi':'NGƯỜI QUEN'},
    {'ja':'話し合い','vi':'THẢO LUẬN'},
    {'ja':'金遣い','vi':'CÁCH TIÊU TIỀN'},
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