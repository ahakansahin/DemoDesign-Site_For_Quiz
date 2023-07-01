const ui= new UI();
const quiz= new Quiz(sorular);

// Soru çağırma
function soruGetir(){

    ui.optionList.style.pointerEvents="all";


     ui.questionText.innerHTML = quiz.sorular[quiz.soruIndex].soruMetni;
     for(let i=0; i<ui.optionDivs.length;  i++){

        ui.optionDivs[i].classList.remove("correct");
        ui.optionDivs[i].classList.remove("incorrect");
        if(ui.optionDivs[i].querySelector("i")!= null){
            ui.optionDivs[i].querySelector("i").remove();
        }

         ui.optionDivs[i].querySelector("span").innerHTML = quiz.sorular[quiz.soruIndex].secenekler[i];
     }
}

// Sürenin ilerletilmesi
let counter;
function süreSay(){

    let anlikSure=15;
    ui.timerNumber.innerHTML=anlikSure;

    ui.timerText.innerHTML="Kalan Süre";
    counter= setInterval(timer,1000);
    function timer(){
        ui.timerNumber.innerHTML=anlikSure;
        anlikSure--;

        if (anlikSure<0){
            clearInterval(counter)
            ui.timerText.innerHTML="Süre Bitti";
            ui.optionList.style.pointerEvents="none";
                if(quiz.soruIndex==quiz.sorular.length-1){
                    ui.lastButton.style.display="block";
                }else{
                    ui.nextButton.style.display="block";
                }
            for(let i=0; i<quiz.sorular[quiz.soruIndex].secenekler.length; i++ ){
                if(quiz.sorular[quiz.soruIndex].dogruCevap== quiz.sorular[quiz.soruIndex].secenekler[i]){
                    ui.optionDivs[i].classList.add("correct");
                    let symbol= `<i class="fa-solid fa-circle-check fa-lg"></i>`;
                    ui.optionDivs[i].insertAdjacentHTML("beforeend",symbol)
                }
            }
        }
    }
}

// Süre ilerledikçe süre animasyonununda ilerlemesi
let counterLine;
function süreCizgi(){
    let genislik=0;
    ui.timerLine.style.width=genislik+"%";
    counterLine= setInterval(timer,16)

    function timer(){
        genislik+=0.1;
        ui.timerLine.style.width=genislik+"%";

        if(genislik>100){
            ui.timerLine.style.width="100%"
            clearInterval(counterLine)
        }

    }

}

// Quiz başlat
ui.startQuiz.addEventListener("click", function(event){

    ui.startQuiz.style.display="none";
    ui.questionPanel.style.visibility="visible";
    ui.questionPanel.style.transform="translate(-50%, -50%) scale(1)";
    quiz.soruIndex=0;
    ui.questionNumberPresent.innerHTML=quiz.soruIndex+1;
    ui.questionNumberTotal.innerHTML=quiz.sorular.length;
    soruGetir();
    süreSay();
    süreCizgi();
    
})

// Seçenek işaretleme
for(let i=0; i<ui.optionDivs.length; i++){
    ui.optionDivs[i].addEventListener("click", function(event){
        
        ui.optionList.style.pointerEvents="none";

        //ui.optionDivs[i] ile event.target aynı anlama geliyor
         if(event.target.querySelector("span").innerHTML== quiz.sorular[quiz.soruIndex].dogruCevap){
            event.target.classList.add("correct");
            let symbol= `<i class="fa-solid fa-circle-check fa-lg"></i>`;
            event.target.insertAdjacentHTML("beforeend",symbol);
            clearInterval(counterLine);
            clearInterval(counter);
                if(quiz.soruIndex==quiz.sorular.length-1){
                    ui.lastButton.style.display="block";
                }else{
                    ui.nextButton.style.display="block";
                }
            quiz.dogruCevapSayisi+=1;

            }else {
            event.target.classList.add("incorrect");
            let symbolIncorrect=`<i class="fa-solid fa-circle-xmark fa-lg"></i>`;
            event.target.insertAdjacentHTML("beforeend",symbolIncorrect);


            for(let i=0; i<ui.optionDivs.length; i++){
                if(ui.optionDivs[i].querySelector("span").innerHTML.includes(quiz.sorular[quiz.soruIndex].dogruCevap)){
                ui.optionDivs[i].classList.add("correct");
                let symbolCorrect=`<i class="fa-solid fa-circle-check fa-lg"></i>`;
                ui.optionDivs[i].insertAdjacentHTML("beforeend",symbolCorrect);
            }
            }
            clearInterval(counterLine);
            clearInterval(counter);
                if(quiz.soruIndex==quiz.sorular.length-1){
                    ui.lastButton.style.display="block";
                }else{
                    ui.nextButton.style.display="block";
                }

         }


    })
}


// Diğer Soru
ui.nextButton.addEventListener("click", function(){
    ui.nextButton.style.display="none";
    quiz.soruIndex+=1;
    ui.questionNumberPresent.innerHTML=quiz.soruIndex+1;
    ui.questionNumberTotal.innerHTML=quiz.sorular.length;
    soruGetir();
    süreSay();
    süreCizgi();
})

// Testi Bitir
ui.lastButton.addEventListener("click", function(){
    ui.questionPanel.style.display="none";
    ui.lastButton.style.display="none"
    ui.resultPanel.style.display="block";
    ui.resultPanel.style.visibility="visible";
    ui.resultPanel.style.transform="translate(-50%, -50%) scale(1)";

    ui.totalQuestionNumber.innerHTML=quiz.sorular.length;
    ui.correctQuestionNumber.innerHTML=quiz.dogruCevapSayisi;
})

// Sonuç Ekranı
ui.finishTest.addEventListener("click", function(){
    window.location.reload();
});
ui.againTest.addEventListener("click", function(){
    ui.resultPanel.style.display="none";
    ui.resultPanel.style.visibility="hidden";
    ui.questionPanel.style.display="block";
    quiz.dogruCevapSayisi=0;
    quiz.soruIndex=0;
    ui.questionNumberPresent.innerHTML=quiz.soruIndex+1;
    ui.questionNumberTotal.innerHTML=quiz.sorular.length;
    soruGetir();
    süreSay();
    süreCizgi();
})