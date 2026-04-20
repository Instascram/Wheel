function spinWheel() {
    var min = 1024;
    var max = 5000;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
}
