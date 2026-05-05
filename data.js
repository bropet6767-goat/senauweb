{
    window.jalankanPencarian = function() {
        const input = document.getElementById('inputCari').value.toLowerCase();
        const daftarProduk = document.querySelectorAll('.product-card'); 

        daftarProduk.forEach(kartu => {
            const namaProduk = kartu.querySelector('h3').textContent.toLowerCase();
            const brandProduk = kartu.querySelector('.brand').textContent.toLowerCase();
            
            if (namaProduk.includes(input) || brandProduk.includes(input)) {
                kartu.style.display = "block";
            } else {
                kartu.style.display = "none";
            }
        });
    }

    // TAMBAHKAN INI: Biar ikon kaca pembesar kalau diklik langsung buka input
    document.addEventListener('DOMContentLoaded', () => {
        const iconSearch = document.querySelector('.fa-magnifying-glass');
        const inputCari = document.getElementById('inputCari');

        if (iconSearch && inputCari) {
            iconSearch.onclick = function() {
                inputCari.focus(); // Fokus ke input biar keyboard HP muncul
                inputCari.style.width = "120px"; // Paksa lebarnya muncul
            };
        }
    });
}
