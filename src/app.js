/*
* File: app.js
* Author: Halász András
* Copyright: 2021, Nagy János
* Group: Szoft 1/1/e
* Date: 2022-03-22
* Github: https://github.com/halaszandras
* Licenc: GNU GPL
*/
 

var gyumolcsokTomb = ['alma', 'körte', 'barack', 'szilva', 'banán'];

const mutatGomb = document.querySelector('#mutatGomb');
const ul = document.querySelector('#gyumolcsok');

mutatGomb.addEventListener('click', () => {

    gyumolcsokTomb.forEach(gyumolcs => {
        console.log(gyumolcs)
        let li = document.createElement('li');
        li.textContent = gyumolcs;
        ul.appendChild(li);
    }); 
});