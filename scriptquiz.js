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
    {
        q:"Hasil dari 20 + 4 × 6 : 8 =.....",
        Options: ['12',
            '22',
            '18',
            '23'],
        answer:3  // indeks jawaban
    },
    {
        q:"Hasil dari 60 : (-7 + 13) - (-24) =..... ",
        Options: ['34',
            '-34',
            '2',
            '-2'],
        answer:0  // indeks jawaban
    },
    {
        q:"Tentukan bilangan selanjutnya dari pola bilangan 1, 3, 5, 7.....",
        Options: ['9,11,13',
            '8,11,13',
            '9,12,14',
            '8,10,12'],
        answer:0  // indeks jawaban
    },
    {
        q:"Jika luas persegi panjang 320 cm2 dan panjangnya 16 cm. Maka lebarnya adalah.....",
        Options: ['15',
            '16',
            '18',
            '20'],
        answer:3  // indeks jawaban
    },
    {
        q:"Sebuah toko mempunyai stok beras 850 kg dan 55 karung beras. Jika setiap karung beras beratnya 30 kg, stok beras yang ada di toko sebanyak.....kg",
        Options: ['3000',
            '1650',
            '2500',
            '2000'],
        answer:2  // indeks jawaban
    },
    {
        q:"Andi mempunyai kertas yang panjangnya 33 cm dan lebarnya 18 cm. Jadi luas kertas yang dimiliki Andi adalah..... ",
        Options: ['584',
            '594',
            '564',
            '554'],
        answer:1  // indeks jawaban
    },
    {
        q:"111 x 111 =..... ",
        Options: ['12.231',
            '12.111',
            '12.321',
            '12.311'],
        answer:2  // indeks jawaban
    },
    {
        q:"625 - (80 x 3) + (-45) =.....",
        Options: ['340',
            '350',
            '360',
            '370'],
        answer:0  // indeks jawaban
    },
    {
        q:"Hasil dari √1089 =..... ",
        Options: ['43',
            '33',
            '23',
            '53'],
        answer:1  // indeks jawaban
    },
    {
        q:"Hasil dari √576 + 26 =..... ",
        Options: ['50',
            '51',
            '55',
            '57'],
        answer:0  // indeks jawaban
    },
    {
        q:"Sebuah pesawat terbang berangkat dari kota Kupang menuju kota Jakarta pukul 7 pagi dan perjalanan ke Jakarta selama 4 jam.Transit di Denpasar selama 30 menit. Pada pukul berapa pesawat tersebut tiba di Jakarta? ",
        Options: ['10.45',
            '11.00',
            '11.30',
            '10.30'],
        answer:2  // indeks jawaban
    },
    {
        q:"Berapa banyak rusuk yang dimiliki kubus? ",
        Options: ['12 buah',
            '16 buah',
            '32 buah', 
            '10 buah'],
        answer:0  // indeks jawaban
    },
    {
        q:"4, 3, 8, 6, 16, 12,.....",
        Options: ['47',
            '32',
            '48', 
            '49'],
        answer:1  // indeks jawaban
    },
    {
        q:"Diketahui nilai : A = 5 dan B = 2. Hitunglah jika A³ – 3AB² =..... ",
        Options: ['45',
            '55',
            '65',
            '75'],
        answer:2  // indeks jawaban
    },
    {
        q:"Ibu mempunyai uang sebesar Rp. 30.000. Uang itu dibelikan lauk pauk Rp. 12.000, sayuran Rp. 5.000, dan minyak goreng Rp. 4.000, sisa uang ibu adalah.....",
        Options: ['Rp 10.000', 
            'Rp 11.000',
            'Rp 9.000',
            'Rp 8.000'],
        answer:2  // indeks jawaban
    },
    {
        q:"Wakil dari PPKI adalah..... ",
        Options: ['Ir.Soekarno',
            'Soeharto',
            'Moh.Hatta',
            'B.J Habibie'],
        answer:2  // indeks jawaban
    },
    {
        q:"Sidang PPKI terjadi berapa kali..... ",
        Options: ['3 kali',
            '2 kali',
            '4 kali',
            '5 kali'],
        answer:0  // indeks jawaban
    },
    {
        q:"Berapa jumlah anggota PPKI ? ",
        Options: ['28 orang',
            '26 orang',
            '25 orang',
            '27 orang'],
        answer:3  // indeks jawaban
    },
    {
        q:"Hari Lahirnya Pancasila diperingati setiap tanggal ? ",
        Options: ['1 Juni',
            '2 Juni',
            '3 Juni',
            '1 Juli'],
        answer:0  // indeks jawaban
    },
    {
        q:"Pada hari apa teks Proklamasi Kemerdekaan dibacakan ?",
        Options: ['Kamis',
            'Jum’at',
            'Rabu',
            'Selasa'],
        answer:1  // indeks jawaban
    },
    {
        q:"Negara yang paling lama menjajah Indonesia adalah.....",
        Options: ['Jepang',
            'Belanda',
            'Portugis',
            'Spanyol'],
        answer:1  // indeks jawaban
    },
    {
        q:"Kemerdekaan Indonesia diproklamasikan pada tanggal.....",
        Options: ['17 Agustus 1946',
            '17 Agustus 1955',
            '17 Agustus 1945',
            '17 Agustus 1955'],
        answer:2  // indeks jawaban
    },
    {
        q:"Siapa presiden pertama di Indonesia ?",
        Options: ['Soeharto',
            'Ir.Soekarno',
            'B.J Habibie',
            'Susilo Bambang Yudhoyono'],
        answer:1  // indeks jawaban
    },
    {
        q:"Hari sumpah pemuda diperingati setiap tanggal ? ",
        Options: ['27 Oktober',
            '28 Oktober',
            '28 September',
            '27 September'],
        answer:1  // indeks jawaban
    },
    {
        q:"Siapa yang menjahit bendera merah putih ?",
        Options: ['Ibu Fatmawati',
            'Ir.Soekarno',
            'Soeharto',
            'Sayuti Melik'],
        answer:0  // indeks jawaban
    },
    {
        q:"Pada tahun berapa VOC dibubarkan..... ",
        Options: ['1798',
            '1777',
            '1789',
            '1799'],
        answer:3  // indeks jawaban
    },
    {
        q:"Kerja paksa pada masa penjajahan Jepang dinamakan..... ",
        Options: ['Romusha',
            'Rodi',
            'Kerja paksa',
            'Romuswa'],
        answer:0  // indeks jawaban
    },
    {
        q:"Kerja paksa pada masa penjajahan Belanda dinamakan.....",
        Options: ['Romusha',
            'Kerja Paksa',
            'Rodi',
            'Romuswa'],
        answer:2  // indeks jawaban
    },
    {
        q:"Kerajaan Islam pertama di pulau Jawa adalah.....",
        Options: ['Kerajaan Majapahit',
        'Kerajaan Samudera Pasai',
        'Kerajaan Gowa',
        'Kerajaan Demak'],
        answer:3  // indeks jawaban
    },
    {
        q:"Sunan Ampel memiliki nama asli.....",
        Options: ['Maulana Ishaq',
            'Maulana Malik Ibrahim',
            'Ali Rahmatulloh',
            'Raden Rahmat'],
        answer:3  // indeks jawaban
    },
]

