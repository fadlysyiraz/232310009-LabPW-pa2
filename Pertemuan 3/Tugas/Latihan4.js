function hitungSaldo() {
    let saldo = parseFloat(document.getElementById("saldo").value);
    let bunga = parseFloat(document.getElementById("bunga").value);
    let waktu = parseInt(document.getElementById("waktu").value);

    // Validasi input
    if (isNaN(saldo) || isNaN(bunga) || isNaN(waktu) || saldo <= 0 || bunga < 0 || waktu <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    let hasil = "";
    for (let i = 1; i <= waktu; i++) {
        saldo += saldo * (bunga / 100);
        hasil += `Saldo Bulan ${i} = Rp. ${Math.round(saldo)}\n`;
    }

    document.getElementById("hasil").innerText = hasil;
}


function resetForm() {
    document.getElementById("saldo").value = "";
    document.getElementById("bunga").value = "";
    document.getElementById("waktu").value = "";
    document.getElementById("hasil").innerText = "";
}
