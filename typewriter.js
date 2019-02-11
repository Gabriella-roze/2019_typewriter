"use strict";
let fullText = document.querySelector('#typewriter').textContent;
const typeSoundOne = document.getElementById('typekey1');
const typeSoundTwo = document.getElementById('typekey2');
const typeSoundSpace = document.getElementById('typespace');

let counter = 0;
document.querySelector('#typewriter').textContent ="";

setInterval(() => {
    if (counter < fullText.length){
        document.querySelector('#typewriter').textContent = fullText.substring(0, counter + 1);
    }
    else{
        counter = 0; 
    }
    counter++;
}, 300);