'use strict';
{
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', ()=> {
        const checkMath = prompt('数字の入力をしてみてね');
        const main = document.querySelector('main');
        const section  = document.createElement('section');
        const ol = document.createElement('ol');

        for (let i =1; i <= checkMath; i ++) {
            const li = document.createElement('li');
            if ( i%3 === 0 && i%5 === 0 ) {
                li.textContent = 'FizzBuzz';
            } else if( i%3 === 0 ) {
                li.textContent = 'Fizz';
            } else if( i%5 === 0 ) {
                li.textContent = 'Buzz';
            } else {
                li.textContent = i;
            }
            ol.appendChild(li);
            section.appendChild(ol);
            main.appendChild(section);
        }
        

    },false);
    

}