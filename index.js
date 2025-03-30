const messageElement = document.getElementById('eid-message-text');
const message = `
    Teman-teman tersayang,

    Alhamdulillah, kita bisa bertemu lagi dengan Idul Fitri. 

    Semoga Allah menerima semua amal ibadah kita selama Ramadan. 

    Selamat Lebaran ya, maafin aqu kalau ada salah-salah. ❤️
`;

let charIndex = 0;
const bgm = document.getElementById('bgm');

function typeWriter() {
    if (charIndex < message.length) {
        messageElement.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}

function playAudio() {
    const playPromise = bgm.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Autoplay started!
                bgm.muted = false; // Unmute jika awalnya muted
            })
            .catch(error => {
                // Autoplay was prevented.
                console.log("Autoplay dicegah:", error);
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    playAudio(); // Putar musik segera setelah halaman dimuat
    typeWriter(); // Mulai animasi typing
});