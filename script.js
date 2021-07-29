const character = document.getElementById("character");

const block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate")
    }, 500);
}

var checkDead = setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if (blockLeft < 72 && blockLeft > 15 && characterTop >= 86) {
            block.style.display = "none";
            alert("You lose");
        }
    },
    3)



var tID;

function stopAnimate() {
    clearInterval(tID);
}

function animateScript() {
    var position = 57.5;
    const interval = 100;
    tID = setInterval(() => {
        document.getElementById("tankImage").style.backgroundPosition =
            `-${position}px 0px`;
        if (position < 460) { position = position + 57.5; } else { position = 57.5; }
    }, interval);
}