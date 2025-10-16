const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");


semua_tombol.forEach((tombol_satuan) => {
    tombol_satuan.addEventListener("click", () => {
        semua_tombol.forEach((btn) => btn.classList.remove("active"));

        tombol_satuan.classList.add("active");

        const filter = tombol_satuan.getAttribute("data-filter");

        semua_gambar.forEach((gambar_satuan) => {
            if (filter === "all" || gambar_satuan.classList.contains(filter)) {
                gambar_satuan.style.display = "block";
            } else {
                gambar_satuan.style.display = "none";
            }
        });
    });
});