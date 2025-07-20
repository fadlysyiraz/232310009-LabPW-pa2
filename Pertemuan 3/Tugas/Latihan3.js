function hitung() {
    var n = parseInt(document.getElementById("n").value);
    
    if (isNaN(n) || n < 0) {
        alert("Masukkan bilangan bulat positif!");
        return;
    }

    var faktorial = 1;
    for (var i = 1; i <= n; i++) {
        faktorial *= i;
    }

    var jumlahDeret = (n * (n + 1)) / 2;

    document.getElementById("faktorial").value = faktorial;
    document.getElementById("jumlah").value = jumlahDeret;
}