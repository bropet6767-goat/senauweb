const fileInput = document.getElementById('file-input');
const fotoDisplay = document.getElementById('foto-display');

fileInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Ini yang bikin emoji kamera berubah jadi foto
            fotoDisplay.innerHTML = `<img src="${e.target.result}" style="max-height: 150px; border-radius: 8px; margin: 0 auto;">`;
        }
        reader.readAsDataURL(file);
    }
});
