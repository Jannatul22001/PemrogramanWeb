function konversiNilai() {
    const nilaiInput = document.getElementById("nilai").value;
    let hasil = "";

    if (nilaiInput >= 0 && nilaiInput <= 40) {
        hasil = "E";
    } else if (nilaiInput >= 41 && nilaiInput <= 55) {
        hasil = "D";
    } else if (nilaiInput >= 56 && nilaiInput <= 60) {
        hasil = "C";
    } else if (nilaiInput >= 61 && nilaiInput <= 65) {
        hasil = "BC";
    } else if (nilaiInput >= 66 && nilaiInput <= 70) {
        hasil = "B";
    } else if (nilaiInput >= 71 && nilaiInput <= 80) {
        hasil = "AB";
    } else if (nilaiInput >= 81 && nilaiInput <= 100) {
        hasil = "A";
    } else {
        hasil = "Error";
    }

    document.getElementById("result").textContent = hasil;
}
