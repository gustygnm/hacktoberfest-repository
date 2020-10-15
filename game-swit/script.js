var ask = true;
while (ask) {
    // menangkap pilihan player
    var player = prompt('Pilih : gajah, semut, orang');
    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var computer = Math.random();

    if (computer < 0.34) {
        computer = 'gajah';
    } else if (computer > 0.34 && computer < 0.67) {
        computer = 'orang';
    } else {
        computer = 'semut';
    }

    // menentukan rules
    var result = '';
    if (player == computer) {
        result = 'SERI';
    } else if (player == 'gajah') {
        // if (computer == 'orang') {
        //     result = 'MENANG';
        // } else {
        //     result = 'KALAH';
        // }
        result = (computer == 'orang') ? 'MENANG' : 'KALAH';
    } else if (player == 'orang') {
        result = (computer == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (player == 'semut') {
        result = (computer == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        result = 'Memasukkan pilihan yang salah';
    }
    // tampilkan hasilnya
    alert('Kamu memilih : ' + player + ' dan Komputer memilih : ' + computer + '\nMaka Hasilnya adalah Kamu : ' + result);

    ask = confirm('Main lagi?');
}

alert('Terimakasih sudah bermain');