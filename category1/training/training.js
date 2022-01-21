//Question bank
var questionBank= shuffle( [
    {question:'彼女とは昔から＿＿＿があります',option:['知り合い','付き合い','釣り合い','話し合い'],answer:'付き合い'},
    {question:'田中さんと山田さんは＿＿＿です。',option:['飲み知人','飲み友達','飲み仲間','飲み味方'],answer:'飲み仲間'},
    {question:'急に忙しくなってしまったので、病院の予約を＿＿＿。',option:['取った','取り消した','守った','破った'],answer:'取り消した'},
    {question:'妻は息子と一緒に＿＿＿に帰っています。',option:['大家','作家','実家','家主'],answer:'実家'},
    {question:'人類の＿＿＿は、アフリカで生まれたとも言われている。',option:['祖先','目上','夫妻','人間'],answer:'祖先'},
    {question:'あの二人は＿＿＿姉妹のように仲が良い。',option:['たとえ','長年','まるで','ちっとも'],answer:'まるで'},
    {question:'優しい言葉をかけてくれる、彼の私に対する＿＿＿が嬉しかった。',option:['気利用','気遣い','気用い','気入り'],answer:'気遣い'},
    {question:'"末っ子"という言葉に意味が最も近いものはなんですか。',option:['一番の子','一番下の子','一人っ子','双子'],answer:'一番下の子'},
    {question:'"一家"という言葉に意味が最も近いものはなんですか。',option:['一人','一家庭','一家族','家族全体'],answer:'家族全体'},
    {question:'この服を青いのと＿＿＿いただけませんか。',option:['取り替えて','取り戻して','取り合って','取り捨てる'],answer:'取り替えて'},
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