
const formKontak = document.querySelector("form");

if (formKontak) {
    formKontak.addEventListener("submit", function (event) {
        const yakin = confirm("Apakah Anda yakin ingin mengirim pesan?");
        if (!yakin) {
            event.preventDefault();
        }
    });

    function kirimPesan() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua kolom wajib diisi!");
    return false;
  }

  alert("Pesan berhasil dikirim!");
}

const menuLink = document.querySelector(".menu a");

menuLink.addEventListener("click", function () {
    console.log("Membuka menu:", menuLink.textContent);
});
}
