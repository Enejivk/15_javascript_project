const btn_increase = document.querySelector('.btn_increase');
const btn_reset = document.querySelector('.btn_reset');
const btn_decrease = document.querySelector('.btn_decrease');
const counter = document.querySelector('h1.counter');

let counterNumber = 0;
btn_decrease.addEventListener('click', function(){
    counterNumber -= 1;
    ChangeColor(counterNumber)
})
btn_increase.addEventListener('click', function(){
    counterNumber += 1;
    ChangeColor(counterNumber)
})
btn_reset.addEventListener('click', function(){
    counterNumber = 0;
    ChangeColor(counterNumber)
})
function ChangeColor(counterNumber){
    counter.textContent = counterNumber;
    if(counterNumber < 0){
        counter.style.color = 'red'
    }
    else{
        counter.style.color = 'black'
    }
}