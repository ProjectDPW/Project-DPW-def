var musik = new Audio();
musik.src = "audio/bgmusik.mp3";
musik.loop = true;
musik.play();

var filebaru;

function quizscience(){
    a = document.getElementById("Start").style.display = 'none'
    b = document.getElementById("science").style.display = 'block'
}
function quizmath(){
    a = document.getElementById("Start").style.display = 'none'
    b = document.getElementById("mathematics").style.display = 'block'
}
function quizhistory(){
    a = document.getElementById("Start").style.display = 'none'
    b = document.getElementById("History").style.display = 'block'
}




//contoh format pembuatan soal
const science = [
    {
        q:"hallo bang",
        Options: ["Abdul", "Samsul", "Jamal", "Budi"],
        answer:2  // indeks jawaban
    },
    {
        q:"hallo bang",
        Options: ["Abdul", "Samsul", "Jamal", "Budi"],
        answer:2  // indeks jawaban
    }
    // lanjut
]
