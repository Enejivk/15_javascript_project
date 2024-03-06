const btn = document.querySelector('.btn');
const main = document.querySelector('.changeColor');

function getRgb(){
	let red = Math.floor(Math.random()*255);
	let green = Math.floor(Math.random()*255);
	let black = Math.floor(Math.random()*255);
	return `rgb(${red}, ${green}, ${black})`
}

function changeColor(){
	let color = getRgb();
	const colorName = document.querySelector('.colorName');
	colorName.textContent = color;
	main.style.background = color;
}
btn.addEventListener('click', changeColor);
