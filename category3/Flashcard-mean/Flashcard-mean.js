(function() {
  'use strict';

  var words = [
    {'ja':'崩す','vi':'PHÁ HUỶ'},
    {'ja':'インフルエンザにかかる','vi':'CẢM CÚM'},
    {'ja':'ウイルスが伝染する','vi':'TRUYỀN NHIỄM'},
    {'ja':'骨折する','vi':'GÃY XƯƠNG'},
    {'ja':'高血圧','vi':'HUYẾT ÁP CAO'},
    {'ja':'疲れがたまる','vi':'MỆT MỎI'},
    {'ja':'肩をもむ','vi':'XOA BÓP VAI'},
    {'ja':'白髪が抜ける','vi':'RỤNG TÓC BẠC'},
    {'ja':'ひねる・ねじる','vi':'VẶN'},
    {'ja':'顔が青白い','vi':'MẶT TÁI XANH'},
    {'ja':'苦痛','vi':'ĐAU ĐỚN'},
    {'ja':'しびれる','vi':'TÊ LIỆT'},
    {'ja':'薬局','vi':'HIỆU THUỐC'},
    {'ja':'診る・診察する','vi':'KHÁM BỆNH'},
    {'ja':'診断する','vi':'CHUẨN ĐOÁN'},
    {'ja':'内科','vi':'NỘI KHOA'},
    {'ja':'外科','vi':'NGOẠI KHOA'},
    {'ja':' 赤ちゃんがはう','vi':'BÉ BÒ'},
    {'ja':'もたれる','vi':'KHÓ TIÊU'},
    {'ja':'しゃがむ','vi':'NGỒI XỔM'},
    {'ja':'腰掛ける','vi':'NGỒI'},
    {'ja':'余分な栄養','vi':'THỪA'},
    {'ja':'予防する','vi':'DỰ PHÒNG'},
    {'ja':'休養をとる','vi':'NGHỈ NGƠI'},
    {'ja':'消毒する','vi':'KHỬ ĐỘC'},
    {'ja':'衛生的な','vi':'TÍNH VỆ SINH'},
    {'ja':'徹夜する','vi':'THỨC TRẮNG ĐÊM'},
    {'ja':'睡眠不足','vi':'THIẾU NGỦ'},
    {'ja':'健康を管理する','vi':'QUẢN LÍ SỨC KHOẺ'},
    {'ja':'せき','vi':'HO'},
    {'ja':'不規則な','vi':'BẤT QUI TẮC'},
    {'ja':'平均寿命','vi':'TUỔI THỌ TRUNG BÌNH'},
    {'ja':'美容','vi':'NHAN SẮC'},
    {'ja':'肌が荒れる','vi':'DA KHÔ'},
    {'ja':'かみそり','vi':'DAO CẠO RÂU'},
    {'ja':'ひげをそる','vi':'CẠO RÂU'},
    {'ja':'くし・ブラシ','vi':'CÁL LƯỢC'},
    {'ja':'とく・とかす','vi':'NUNG NÓNG'},
    {'ja':'看病する ','vi':'CHĂM SÓC BỆNH NHÂN'},
    {'ja':'しゃっくりが出る','vi':'NẤC'},
    {'ja':'高血圧','vi':'HUYÊT ÁP CAO'},
    {'ja':'立ち上がる','vi':'ĐỨNG LÊN'},
    {'ja':'寝不足','vi':'THIẾU NGỦ'},
    {'ja':'運動不足','vi':'THIẾU VẬN ĐỘNG'},
    {'ja':'平均点','vi':'ĐIỂM TRUNG BÌNH'},
    {'ja':'一応','vi':'TẠM THỜI'},
    {'ja':'当分','vi':'HIỆN TẠI'},
    {'ja':'たちまち','vi':'ĐỘT NHIÊN'},
    {'ja':'今に','vi':'SẮP'},

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