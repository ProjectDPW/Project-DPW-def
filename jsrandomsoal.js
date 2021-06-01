// update

var questionsains = document.querySelector(".question")
var optionCont = document.querySelector(".answer")
var homePage = document.querySelector(".Start")
var quizPage =document.getElementById("science")
var resultPage = document.getElementById("skor")
// console.log(soal1[0])
var questcount=0;
var currentquest;
var availablequest=[];
var availableoptions=[];
var correctanswer=0;
var attemp=0;

function setavailablequest(){
    const totalquest=soal1.length;
    for (let i=0; i<totalquest; i++){
        availablequest.push(soal1[i])
        // console.log(soal1[i])
    }
}

//  Update(lagi) Timer
var counter = 10;
var setInt = 1000;
var int1;

function update_display(){		
    if(counter>=0){
        document.getElementById("timer1").innerHTML = counter;
        counter--;
    }
    else{
        // clearInterval(int1);
        nextsains();
    }
}

function update_display_call(){
    clearInterval(int1);
    int1 = setInterval(update_display, setInt);
    // console.log("int1= "+int1)
}

function getNewquest(){
    const questionindex= availablequest[Math.floor(Math.random() * availablequest.length)]
    currentquest=questionindex
    // console.log(currentquest)

    questionsains.innerHTML=currentquest.q;
    const index1=availablequest.indexOf(questionindex);
    availablequest.splice(index1,1)
    // console.log(questionindex);

    // console.log(currentquest.Options)
    const optionlen = currentquest.Options.length
    for (let i=0; i<optionlen; i++){
        availableoptions.push(i)
    }
    optionCont.innerHTML= '';
    // console.log(availableoptions)
    
    for (let i=0; i<optionlen; i++){
        const optonIdx=availableoptions[Math.floor(Math.random()*availableoptions.length)];
        const index2=availableoptions.indexOf(optonIdx);
        availableoptions.splice(index2,1)
        // console.log(optonIdx)

        const option =document.createElement("div");
        option.innerHTML=currentquest.Options[optonIdx];
        option.id=optonIdx;
        option.className="optional";
        optionCont.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }
    questcount++
    //update lagi timer
    counter = 10; 
    update_display_call();
}

function getResult(element){
    const id = parseInt(element.id);
    if (id===currentquest.answer){
        // console.log("correct");
        element.classList.add("correct");

        correctanswer++;
//         console.log("Correct: "+correctanswer);
    }
    else{
        // console.log("wrong");
        element.classList.add("wrong")

        const optionlen=optionCont.children.length;
        for (let i=0; i<optionlen; i++){
            if (parseInt(optionCont.children[i].id)==currentquest.answer){
                optionCont.children[i].classList.add("correct")
            }
        }
    }
    attemp++;
//     console.log('attemp: '+attemp)

    unclickOptions();
}

function unclickOptions(){
    const optionlen=optionCont.children.length;
    for (let i=0; i<optionlen; i++){
        optionCont.children[i].classList.add("already-answer")
    }
}

function nextsains(){
    if (questcount===soal1.length){;
        // console.log('quis over');
        quizOver();
    }
    else{
        getNewquest();
    }
    //update (lagi) timer
    counter=10;
}

function quizOver(){
    a = document.getElementById("science").style.display = 'none';
    b = document.getElementById("skor").style.display = 'block';

    quizResult();
}

function quizResult(){
    var lensoal1=soal1.length;
    document.getElementById("result").innerHTML=(correctanswer/lensoal1)*100;
    document.getElementById("benar").innerHTML=correctanswer;
    document.getElementById("salah").innerHTML=lensoal1-correctanswer;
    // console.log("quizResult")
}

// Update
function resetQuiz(){
    questcount=0;
    correctanswer=0;
    attemp=0;
}

function tryAgain(){
    document.getElementById("skor").style.display = 'none';
    // document.getElementById("Start").style.display = 'none';
    document.getElementById("science").style.display = 'block';
    resetQuiz()
    window.onload();
}

function goToHome(){
    document.getElementById("skor").style.display = 'none';
    document.getElementById("Start").style.display = 'block';
    resetQuiz();
    window.onload();
}

window.onload = function(){
    setavailablequest();

    getNewquest();
}
