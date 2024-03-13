function calculateBMI() {
    // Mendapatkan nilai berat dan tinggi dari prompt
    let weight = parseFloat(prompt("Masukan Berat Badan Anda dalam satuan kg:"));
    let height = parseFloat(prompt("Masukan Tinggi Badan Anda dalam meter:"));

    // Memanggil fungsi bmi dengan nilai berat dan tinggi
    let result = bmi(weight, height);

    // Menampilkan hasil menggunakan pop-up
    alert("Your BMI is: " + result);
}

function bmi(weight, height) {
    let result = weight / (height * height);
    if (result > 30) {
        return "Obese";
    } else if (result > 25.0) {
        return "Overweight";
    } else if (result > 18.5) {
        return "Normal";
    } else {
        return "Underweight";
    }
}

// Panggil fungsi calculateBMI saat halaman dimuat
calculateBMI();
