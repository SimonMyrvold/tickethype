function darkModeToggle() {
    document.getElementById('bgb').classList.toggle('bg-black').toggle('bg-white');
}

function hamburgerToggle() {
    document.getElementById('hamburgerContent').classList.toggle('active');
    document.getElementById('hamburgerLine1').classList.toggle('active');
    document.getElementById('hamburgerLine2').classList.toggle('active');
    document.getElementById('hamburgerLine3').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');
}

addEventListener('resize', function() {
    if (window.innerWidth > 1370) {
        document.getElementById('hamburgerContent').classList.remove('active');
        document.getElementById('hamburgerLine1').classList.remove('active');
        document.getElementById('hamburgerLine2').classList.remove('active');
        document.getElementById('hamburgerLine3').classList.remove('active');
        document.getElementById('body').classList.remove('active');
    }
});

document.getElementById('textInput').addEventListener('keypress', function(e) {
    //be be worked on
});