const toggleButton = document.querySelector('.toggle_checkbox');
toggleButton.addEventListener('click', togglePrice);

function togglePrice(){
    let prices = document.querySelectorAll('.price');

    prices.forEach(price =>{
        let display = getComputedStyle(price).display;
        if(display === 'flex'){
            price.style.display = 'none';
        }
        if(display === 'none'){
            price.style.display = 'flex';
        }
    });
};


/*const toggleButton = document.querySelector('.toggle_checkbox');
toggleButton.addEventListener('click', togglePrice);
*/

/*
const price1 = document.querySelectorAll('monthly');
const price2 = document.querySelectorAll('anual');
var prices = [];
var p = 1;

prices[0] = price1.style.display = 'block';
prices[1] = price2.style.display = 'none';

function toggleButton() {
    if (p < prices.length - 1) {
        prices[0] =price1.style.display = 'block';
        prices[1]. = price2.style.display = 'none';

        p++;
    } else {
        prices[0] = price2.style.display = 'block';
        prices[1] = price1.style.display = 'none';
    
        p = 0;
    }
};

toggleButton()

*/
