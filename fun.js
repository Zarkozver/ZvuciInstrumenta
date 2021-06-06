function Pusti(instrument) {
    var p = document.getElementById(instrument);
    p.play();
}
function Zaustavi(instrument) {
    var p = document.getElementById(instrument);
    p.pause();
    p.currentTime = 0;
}