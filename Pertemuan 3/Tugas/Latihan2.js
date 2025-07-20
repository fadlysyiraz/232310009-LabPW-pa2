function hitungTotal() {
    var nama = document.fform.nama.value;
    var tujuan = document.fform.tujuan.value;
    var kelas = document.fform.kelas.value;
    var jumlah = parseInt(document.fform.jumlah.value);
    var member = document.fform.member.value;

    if (isNaN(jumlah) || jumlah < 1) {
        alert("Jumlah tiket harus minimal 1!");
        return;
    }

    var hargaTiket = {
        "Jakarta": { "Eksekutif": 70000, "Bisnis": 40000, "Ekonomi": 10000 },
        "Solo": { "Eksekutif": 80000, "Bisnis": 50000, "Ekonomi": 20000 },
        "Surabaya": { "Eksekutif": 90000, "Bisnis": 60000, "Ekonomi": 30000 }
    };

    var harga = hargaTiket[tujuan][kelas];
    var subtotal = harga * jumlah;
    var diskon = member === "Ya" ? subtotal * 0.1 : 0;
    var totalBayar = subtotal - diskon;

    alert("Detail Pemesanan\n" +
          "Nama     :  " + nama + "\n" +
          "Tujuan    :  " + tujuan + "\n" +
          "Kelas       :  " + kelas + "\n" +
          "Jumlah Tiket  :  " + jumlah + "\n" +
          "Harga Tiket   :  Rp" + harga.toLocaleString() + "\n" +
          "Subtotal        :  Rp" + subtotal.toLocaleString() + "\n" +
          "Diskon           :  Rp" + diskon.toLocaleString() + "\n" +
          "Total Bayar    :  Rp" + totalBayar.toLocaleString());
}

function resetForm() {
    document.fform.reset();
}