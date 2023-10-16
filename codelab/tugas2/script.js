function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "") {
        alert("nama tidak boleh kosong")
        return false;
    }

    if (email === "") {
        alert("email tidak boleh kosong")
        return false;
    }

    if (alamat === "") {
        alert("alamat palsu")
        return false;
    }else{
        window.location.href= "berhasil.html";
    }

    return true;
}
