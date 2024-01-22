'use strict';
{
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', ()=> {
        const checkMath = prompt('数字の入力をしてみてね');
        for (let i =1; i <= checkMath; i ++) {
            if ( i%3 === 0 && i%5 === 0 ) {
                console.log('FizzBuzz');
            } else if( i%3 === 0 ) {
                console.log('Fizz');
            } else if( i%5 === 0 ) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
    },false);
    

}