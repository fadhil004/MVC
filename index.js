const process = require('process')
const input = process.argv

function penjumlahan(angka1, angka2) {
    return angka1 + angka2
}

const hasil = penjumlahan(+input[2],+input[3])
console.log('Hasil Penjumlahan', hasil)