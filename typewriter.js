"use strict";
let fullText = document.querySelector('#typewriter').textContent;
const typeSoundOne = document.getElementById('typekey1');
const typeSoundTwo = document.getElementById('typekey2');
const typeSoundSpace = document.getElementById('typespace');


let counter = 0;
document.querySelector('#typewriter').textContent ="";

document.querySelector('button').addEventListener("click", () => {
    init();
    document.querySelector('button').style.display = "none";
});

function init() {



setInterval(() => {
    if (counter < fullText.length){
        document.querySelector('#typewriter').textContent = fullText.substring(0, counter + 1);
        playSound();
    }
    else{
        counter = 0; 
    }
    counter++;
}, delay());

}

function playSound() {
    if (fullText[counter] === " ") {
        typeSoundSpace.play();
    } else {
        let x = randomIntBetween(1,2);
        if (x === 1) {
            console.log('sound1');
            typeSoundOne.play();
        } else {
            console.log('sound2');
            typeSoundTwo.play();
        }
        
    }
}

function delay() {
    return randomIntBetween(400, 600);
}

// I used my connections to get this function! :))
function randomIntBetween(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}