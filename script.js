function getPilihanComputer() {
    let computer = Math.floor(Math.random() * 10);
    if (computer <= 3) return "gajah";
    if (computer > 3 && computer <= 6) return "orang";
    return "semut";
};

function getHasil(comp, player) {
    if (player == comp) return "DRAW";
    if (player == "gajah") return (comp == "orang") ? "YOU WIN!" : "YOU LOSE!";
    if (player == "orang") return (comp == "gajah") ? "YOU LOSE!" : "YOU WIN!";
    if (player == "semut") return (comp == "orang") ? "YOU LOSE!" : "YOU WIN!";
};

function putar() {
    const imgComp = document.querySelector('.musuh');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.jpg')
        if (i == gambar.length) {
            i = 0;
        }

    }, 50)
};




const pemain = document.querySelectorAll('.chose div');
pemain.forEach(function (e) {
    e.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = e.getAttribute('id');
        const hsl = document.querySelector("#hasil");
        document.querySelector('.pemain').setAttribute('src', 'img/' + pilihanPlayer + '.jpg');
        putar();
        setTimeout(function () {
            const hasil = getHasil(pilihanComputer, pilihanPlayer);
            document.querySelector('.musuh').setAttribute('src', 'img/' + pilihanComputer + '.jpg');
            hsl.innerHTML = hasil;
            hsl.classList.add('geter');
        }, 1000)
        setTimeout(function () {
            hsl.classList.remove('geter')
        }, 2000)

    })
})