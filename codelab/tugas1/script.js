function penjumlahan() {
    // Mendapatkan nilai bilangan pertama dan kedua dari input
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    // Melakukan penjumlahan
    var hasil = bilangan1 + bilangan2;

    // Menampilkan hasil pada halaman
    document.getElementById("hasil").textContent = hasil;
    alert("hasil= " + hasil)
}

function hapus() {
    // Menghapus nilai input dan hasil
    document.getElementById("bilangan1").value = "";
    document.getElementById("bilangan2").value = "";
    document.getElementById("hasil").textContent = "";
}
