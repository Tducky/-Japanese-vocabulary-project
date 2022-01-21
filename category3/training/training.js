//Question bank
var questionBank= shuffle([
    {question:'部屋の電気が急に消えたので、＿＿＿ほどびっくりした。',option:['起き上がる','飛び上がる','立ち上がる','持ち上がる'],answer:'飛び上がる'},
    {question:'この国の人々の平均＿＿＿は伸び続けている。',option:['寿命','人生','生命','年数'],answer:'寿命'},
    {question:'赤ちゃんが床を＿＿＿いる。',option:['ふるえて','しゃがんで','はって','たもれて'],answer:'はって'},
    {question:'長い時間座っていると足が＿＿＿しまう。',option:['あれて','かかって','しびれて','たまって'],answer:'しびれて'},
    {question:'母は、病気の祖父を＿＿＿している。',option:['看病','症状','美容','休養'],answer:'看病'},
    {question:'彼は＿＿＿世界的に有名な歌手になるだろう。',option:['一応','当分','今に','たちまち'],answer:'今に'},
    {question:'最近、＿＿＿なので、毎日自転車に乗ろうと思う。',option:['運動不満','運動不足','運動不平','運動不一致'],answer:'運動不足'},
    {question:'年を取ると＿＿＿になりやすい。',option:['高血圧','上血圧','多血圧','下血圧'],answer:'高血圧'},
    {question:'"ひねる"という言葉に意味が最も近いものはなんですか。',option:['とかす','ねじる','もたれる','おさえる'],answer:'ねじる'},
    {question:'"余分"という言葉に意味が最も近いものはなんですか。',option:['いつもの','要らない','必要','よくない'],answer:'要らない'},
 
])

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function shuffle(arr){
    
    for(let i = arr.length - 1; i >0 ; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j],arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= '問題'+(i+1)+'.  '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "問題"+' '+(i+1)+' '+'/'+' '+questionBank.length;
}


//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();