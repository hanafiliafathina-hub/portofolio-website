function kirimPesan() {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
        alert("Harap lengkapi semua data sebelum mengirim pesan.");
        return false;
    }

    alert("Terima kasih, pesan Anda berhasil dikirim!");
    return true;
}

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const posisi = section.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

