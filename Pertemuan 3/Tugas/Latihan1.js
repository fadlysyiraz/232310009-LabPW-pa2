function tampilkanData() {
    var nim = document.fform.nim.value;
    var nama = document.fform.nama.value;
    var jenisKelamin = "";
    
    for (var i = 0; i < document.fform.jenis_kelamin.length; i++) {
        if (document.fform.jenis_kelamin[i].checked) {
            jenisKelamin = document.fform.jenis_kelamin[i].value;
            break;
        }
    }

    var agama = document.fform.agama.value;
    var status = document.fform.status.value;
    var jurusan = document.fform.jurusan.value;
    var komentar = document.fform.komentar.value;

    alert("Data Mahasiswa:\n" +
          "NIM: " + nim + "\n" +
          "Nama: " + nama + "\n" +
          "Jenis Kelamin: " + (jenisKelamin || "Tidak dipilih") + "\n" +
          "Agama: " + agama + "\n" +
          "Status: " + status + "\n" +
          "Jurusan: " + jurusan + "\n" +
          "Komentar: " + komentar);
}

function resetForm() {
    document.fform.reset();
}