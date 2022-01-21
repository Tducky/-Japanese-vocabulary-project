//Question bank
var questionBank= shuffle([
    {question:'このパンには、＿＿＿が入っていないので、早く食べなければならない。',option:['保存品','保存料','保存物','保存食'],answer:'保存料'},
    {question:'ヨーロッパ＿＿＿の庭で紅茶を飲む。',option:['室','食','的','風'],answer:'風'},
    {question:'この料理は私の＿＿＿だ。',option:['好き嫌い','好き好き','好き','苦手'],answer:'好き'},
    {question:'そんな＿＿＿生活を続けていたら、すぐにお金がなくなりますよ。',option:['器用な','慎重な','地味な','贅沢な'],answer:'贅沢な'},
    {question:'最近、心配なことが多くて＿＿＿がする。',option:['原産','飲食','頭痛','栄養'],answer:'頭痛'},
    {question:'私たちの店では＿＿＿の野菜だけを使っています。',option:['日本産','日本料','日本風','日本的'],answer:'日本産'},
    {question:'友達が国へ帰ることになったので＿＿＿を開く',option:['送別集','送別会','送別場','送別品'],answer:'送別会'},
    {question:'"貴重"という言葉に意味が最も近いものはなんですか。',option:['上級','新鮮','粗末','大切'],answer:'大切'},
    {question:'"しょっぱい"という言葉に意味が最も近いものはなんですか。',option:['臭い','くどい','塩辛い','酸っぱい'],answer:'塩辛い'},
    {question:'では、部長が戻られるころに、また＿＿＿お電話致します。',option:['改めて','しきりに','いくら','せめて'],answer:'改めて'},
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