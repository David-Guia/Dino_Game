const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")
function jump() {
    if (dispatchEvent.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300)
    }
}

document.addEventListener('keyup', function (event) {
    jump();
});

let checkAlive = setInterval(function() {
    let dinoTop =
parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft =
parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 130) {
        
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert("PERDUUUUUUUUUUU :(");
        window.location.reload();
    }
}, 10);

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        document.dino.classList.remove('reload');
    }
})

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {

    if (window.innerHeight > window.innerWidth) {
        alert("Mettez votre téléphone en paysage ");
    }

    document.addEventListener('touchstart', function () {
        jump();
    });

    document.addEventListener('touchstart', event => {
        if (event) {
            document.body.classList.remove('reload');
        }
    })

};