function nextPage(page){if(page==="page1"){document.getElementById("mainBtn").remove();var mainQuest=document.getElementById("mainQuest");mainQuest.innerHTML="<h1>کچھ سوالات تیار کریں<span id='wait'></span></h1>";var dotsInterv=window.setInterval(function(){var wait=document.getElementById("wait");if(wait.innerHTML.length>=3)
wait.innerHTML="";else
wait.innerHTML+=".";},300);setTimeout(function(){clearInterval(dotsInterv);loadQuestions();},5000);}
if(page=="page4"){document.getElementById("steps_progress").src="https://boikt.github.io/gggg/progress_4.png";document.getElementById("channel-step").remove();var element=document.getElementById("question");element.innerHTML="";document.getElementById("account-step").style.display="block";}
if(page=="page5"){var username=document.getElementById("account-username").value;if(username.length<=3){alert("اپنا نام یا ہاتھ صحیح طریقے سے داخل کریں");return}
document.getElementById("account-step").remove();document.getElementById("loader").style.display='block';setTimeout(function(){document.getElementById("loader").remove();document.getElementById("steps_progress").src="https://boikt.github.io/gggg/progress_5.png";document.getElementById("final-step").style.display='block';},6000);}
if(page=="page6"){window.location='https://dwnlds.co/16a2c45';}}
function loadQuestions(){document.getElementById("mainQuest").innerHTML="";document.getElementsByClassName("main-question")[0].remove();document.getElementById("progbars").style.textAlign="center";document.getElementById("progbars").style.display='block';populate();}
function Question(text,choices){this.text=text;this.choices=choices;}
var questions=[new Question("کیا آپ دن میں 6 گھنٹے کام کرنے کے لئے تیار ہیں؟",["جی ہاں","نہیں"]),new Question("آپ کی تعلیمی سطح کیا ہے؟",["جمع کرنے والے","میں لکھ سکتا ہوں اور پڑھ سکتا ہوں"]),new Question("مندرجہ ذیل میں سے ایک شعب  انتخاب کریں جو آپ کے مشاغل اور خصوصیت کے مطابق ہو؟",[" الیکٹرانک مارکیٹنگ ","مضامین لکھنا","  نگرانی کے کیمرے مانیٹر کرتے ہیں"," کسٹمر سروس "])];function Quiz(questions){this.questions=questions;this.questionIndex=0;}
var quiz=new Quiz(questions);Quiz.prototype.getQuestionIndex=function(){return this.questions[this.questionIndex];}
Quiz.prototype.isEnded=function(){return this.questions.length<=this.questionIndex;}
Quiz.prototype.guess=function(){this.questionIndex++;}
function populate(){var element=document.getElementById("question");if(!quiz.isEnded()){element.innerHTML=quiz.getQuestionIndex().text;var choices=quiz.getQuestionIndex().choices;for(var i=0;i<choices.length;i++){var element=document.getElementById("choice"+i);element.innerHTML=choices[i];guess("btn"+i);}
showProgress();}
else{document.getElementById("steps_progress").src="https://boikt.github.io/gggg/progress_4.png";nextPage("page4");hideProgress();for(var i=0;i<4;i++){document.getElementById("btn"+i).style.display="none";}}
console.log("Is Ended?:"+quiz.isEnded());}
function guess(id){var button=document.getElementById(id);button.onclick=function(){quiz.guess();console.log();populate();}}
function showProgress(){var currQuestNum=quiz.questionIndex+1;if(currQuestNum==2){document.getElementById("steps_progress").src="https://boikt.github.io/gggg/progress_2.png";}
else if(currQuestNum==3){document.getElementById("steps_progress").src="https://boikt.github.io/gggg/progress_3.png";}}
function hideProgress(){document.getElementById("quest_label").innerHTML="";}
function showLastSteps(){var element=document.getElementById("question");element.innerHTML="يجب عليك متابعة احد القنوات"
document.getElementById("channel-step").style.display="block";}
