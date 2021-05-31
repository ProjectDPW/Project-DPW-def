// var musik = new Audio();
// musik.src = "audio/bgmusik.mp3";
// musik.loop = true;
// musik.play();
// var filebaru;

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
// update

var soal1 = [
    {
        q:"Hewan yang bertelur disebut",
        Options: ['ovipar',
            'vivipar', 
            'ovovivipar',
            'vipar'],
        answer:0  // indeks jawaban
    },
    {
        q:"Tumbuhan membuat makanan dengan bantuan ?",
        Options: ['Angin',
            'Matahari', 
            'Bulan',
            'Udara'],
        answer:1  // indeks jawaban
    },
    {
        q:"H20 adalah sebutan senyawa dari?",
        Options: ['Tanah ',
            'Api', 
            'Udara',
            'Air'],
        answer:3  // indeks jawaban
    },
]

