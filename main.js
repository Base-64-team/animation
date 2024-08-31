var box = document.getElementById('box')
document.getElementById("submit").addEventListener("click", function() {
        var box = document.getElementById('box');
        var type = document.getElementById('animationType').value;
        var time = document.getElementById('animationTime').value;
        var angle = document.getElementById('rotationAndMore').value;
        box.classList.remove('ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'deg0', 'deg90', 'deg180', 'deg360', 'sec1', 'sec3', 'sec6', 'sec0-05', 'sec0-5', 'sec0-1')
        box.classList.add(type, time, angle)
})