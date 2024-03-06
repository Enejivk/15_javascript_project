const btn = document.querySelector('.btn');
const main = document.querySelector('.changeColor');

function hexColor(){
    
    colorCharacter = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    
    let color = '#'
    for(let i = 0; i < 6; i++){
        randomValue = Math.floor(Math.random() * 15);
        color += colorCharacter[randomValue]
    }
    console.log(color);
    return color;
}

function changeColor(){
    let color = hexColor();
    const colorName = document.querySelector('.colorName');
    colorName.textContent = color;
    main.style.background = color;
}
btn.addEventListener('click', changeColor);
