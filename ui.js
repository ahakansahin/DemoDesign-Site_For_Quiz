function UI(){
    this.startQuiz= document.querySelector(".start-quiz");
    this.questionPanel= document.querySelector(".question-panel");
    this.questionText= document.querySelector(".question-text");
    this.optionList=document.querySelector(".option-list");
    this.optionDivs= document.querySelector(".option-list").children;
    this.timerText=document.querySelector(".timer-text");
    this.timerNumber= document.querySelector(".timer-number");
    this.nextButton= document.querySelector(".btn-next");
    this.lastButton= document.querySelector(".btn-last");
    this.timerLine= document.querySelector(".timer-line");
    this.questionNumberTotal=document.querySelector(".question-number__total");
    this.questionNumberPresent=document.querySelector(".question-number__present");
    this.resultPanel= document.querySelector(".result-panel");
    this.againTest= document.querySelector(".again-test");
    this.finishTest= document.querySelector(".finish-test");
    this.totalQuestionNumber= document.querySelector(".result-text__total");
    this.correctQuestionNumber= document.querySelector(".result-text__correct")
}