// Declare audio in advance (avoid TDZ)


const allkey = document.querySelectorAll(".piano .key");

allkey.forEach((key, i) => {
    const audio = new Audio(`piano music/key${i + 1}.mp3`);

    key.onclick = () => {
        audio.currentTime = 0;
        audio.play();
    };
});
