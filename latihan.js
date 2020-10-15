var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var nomorAngkot = 1;

for (nomorAngkot = 1; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
    if (nomorAngkot <= angkotBeroperasi && nomorAngkot !== 5) {
        console.log('Angkot Nomor. ' + nomorAngkot + ' Beroperasi dengan baik');
    } else if (nomorAngkot === 8 || nomorAngkot === 10 || nomorAngkot === 5) {
        console.log('Angkot Nomor. ' + nomorAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot Nomor. ' + nomorAngkot + ' Sedang tidak beroperasi');
    }
}