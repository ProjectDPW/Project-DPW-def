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
    {
        q:"Gas yang paling banyak terdapat di lapisan atmosfer bumi adalah..... ",
        Options: ['Hidrogen',
            'Nitrogen', 
            'Oksigen ',
            'Karbon'],
        answer:2  // indeks jawaban
    },
    {
        q:"Dibawah ini yang bukan termasuk kategori mesin sederhana adalah..... ",
        Options: ['Palu',
            'Katrol', 
            'Sekrup',
            'Pasak'],
        answer:1  // indeks jawaban
    },
    {
        q:"Jenis batuan terkeras adalah..... ",
        Options: ['Berlian',
            'Tembaga', 
            'Emas',
            'Platinum'],
        answer:0  // indeks jawaban
    },
    {
        q:"Planet apa yang memiliki bulan paling banyak ? ",
        Options: ['Uranus',
            'Neptunus', 
            'Jupiter',
            'Saturnus'],
        answer:3  // indeks jawaban
    },
    {
        q:"Serangga bernapas dengan menggunakan apa ? ",
        Options: ['Trakea',
            'Paru-paru', 
            'Kulit',
            'Insang'],
        answer:0  // indeks jawaban
    },
    {
        q:"Berikut ini yang bukan termasuk organ pencernaan manusia adalah.....  ",
        Options: ['Usus besar',
            'Lambung', 
            'Kerongkongan',
            'Empedu'],
        answer:3  // indeks jawaban
    },
    {
        q:"Berapa jumlah perut atau lambung pada hewan sapi dan kambing ? ",
        Options: ['Tiga',
            'Empat', 
            'Dua',
            'Lima'],
        answer:1  // indeks jawaban
    },
    {
        q:"Planet yang paling dekat dengan matahari adalah..... ",
        Options: ['Venus',
            'Saturnus', 
            'Merkurius',
            'Mars'],
        answer:2  // indeks jawaban
    },
    {
        q:"Gelombang elektromagnetik yang memiliki panjang gelombang terpanjang adalah..... ",
        Options: ['Sinar X', 
            'Gelombang Radio', 
            'Gelombang Mikro', 
            'Sinar Gamma'],
        answer:1  // indeks jawaban
    },
    {
        q:"Pada usus halus terdiri atas berapa bagian ?",
        Options: ['Tiga', 
            'Empat',
            'Satu', 
            'Dua'],
        answer:0  // indeks jawaban
    },
    {
        q:"Pada bunga, bagian yang berfungsi sebagai alat kelamin betina adalah..... ",
        Options: ['Mahkota',
            'Benang sari',
            'Putik',
            'Kelopak'],
        answer:2 // indeks jawaban
    },
    {
        q:"Hewan yang makan tumbuhan, termasuk dalam kelompok..... ",
        Options: ['Omnivora',
            'Herbivora',
            'Insektivora',
            'Karnivora'],
        answer:1 // indeks jawaban
    },
    {
        q:"Hewan dibawah ini yang mengalami metamorfosis sempurna adalah..... ",
        Options: ['Kecoa',
            'Jangkrik', 
            'Kupu-kupu', 
            'Semut'],
        answer:2 // indeks jawaban
    },
    {
        q:"Lingkungan yang berupa benda-benda mati dinamakan lingkungan..... ",
        Options: ['Biotik', 
            'Biologi', 
            'Abiotik',
            'Antik'],
        answer:2 // indeks jawaban
    },
    {
        q:"Bagian yang mempunyai klorofil adalah..... ",
        Options: ['Batang',
            'Daun', 
            'Akar',
            'Bunga '],
        answer:1 // indeks jawaban
    },
    {
        q:"Selain sebagai Indra pembau, hidung berfungsi sebagai..... ",
        Options: ['Saluran pernapasan',
            'Saluran pencernaan',
            'Alat keseimbangan',
            'Saluran pendengaran'],
        answer:0 // indeks jawaban
    },
    {
        q:"Setelah dewasa manusia berubah menjadi? ",
        Options: ['Remaja', 
            'Anak-anak',
            'Tua', 
            'Bayi'],
        answer:2 // indeks jawaban
    },
]

