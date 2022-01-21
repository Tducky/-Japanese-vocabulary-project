(function() {
  'use strict';

  var words = [
    {'ja':'崩す','vi':'くずす'},
    {'ja':'インフルエンザにかかる','vi':'インフルエンザにかかる'},
    {'ja':'ウイルスが伝染する','vi':'ウイルスがだんせんする'},
    {'ja':'骨折する','vi':'こっせつ'},
    {'ja':'高血圧','vi':'こうけつあつ'},
    {'ja':'疲れがたまる','vi':'つかれがたまる'},
    {'ja':'肩をもむ','vi':'かたをもむ'},
    {'ja':'白髪が抜ける','vi':'しらががぬける'},
    {'ja':'ひねる・ねじる','vi':'ひねる・ねじる'},
    {'ja':'顔が青白い','vi':'かおがあおい'},
    {'ja':'苦痛','vi':'くつう'},
    {'ja':'しびれる','vi':'しびれる'},
    {'ja':'薬局','vi':'やっきょく'},
    {'ja':'診る・診察する','vi':'みる・しんさつする'},
    {'ja':'診断する','vi':'しんだん'},
    {'ja':'内科','vi':'ないか'},
    {'ja':'外科','vi':'がいか'},
    {'ja':' 赤ちゃんがはう','vi':'あかちゃんがはう'},
    {'ja':'もたれる','vi':'もたれる'},
    {'ja':'しゃがむ','vi':'しゃがむ'},
    {'ja':'腰掛ける','vi':'こしかける'},
    {'ja':'余分な栄養','vi':'よぶんなえいよう'},
    {'ja':'予防する','vi':'よぼうする'},
    {'ja':'休養をとる','vi':'きゅうようをとる'},
    {'ja':'消毒する','vi':'しょうどくする'},
    {'ja':'衛生的な','vi':'えいせいてきな'},
    {'ja':'徹夜する','vi':'徹夜する'},
    {'ja':'睡眠不足','vi':'すいみんぶそく'},
    {'ja':'健康を管理する','vi':'けんこうをかんりする'},
    {'ja':'せき','vi':'せき'},
    {'ja':'不規則な','vi':'ふきそくな'},
    {'ja':'平均寿命','vi':'へいきんじゅみょう'},
    {'ja':'美容','vi':'びよう'},
    {'ja':'肌が荒れる','vi':'はだがあれる'},
    {'ja':'かみそり','vi':'かみそり'},
    {'ja':'ひげをそる','vi':'ひげをそる'},
    {'ja':'くし・ブラシ','vi':'くし・ブラシ'},
    {'ja':'とく・とかす','vi':'とく・とかす'},
    {'ja':'看病する ','vi':'かんびょう'},
    {'ja':'しゃっくりが出る','vi':'しゃっくりがでる'},
    {'ja':'高血圧','vi':'こうけつあつ'},
    {'ja':'立ち上がる','vi':'たちあがる'},
    {'ja':'寝不足','vi':'ねぶそく'},
    {'ja':'運動不足','vi':'うんどうぶそく'},
    {'ja':'平均点','vi':'へいきんてん'},
    {'ja':'一応','vi':'いちおう'},
    {'ja':'当分','vi':'とうぶん'},
    {'ja':'たちまち','vi':'たちまち'},
    {'ja':'今に','vi':'いまに'},
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