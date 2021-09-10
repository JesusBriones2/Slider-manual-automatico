const slider = document.querySelector('.slider');
const btn = document.querySelectorAll('.btn');


slider.insertAdjacentElement('afterbegin',slider.lastElementChild);


btn[0].addEventListener('click',previous);
btn[1].addEventListener('click',next);


// Siguiente imagen.
function next() {
	let primero = slider.firstElementChild;
	slider.style.transform = "translateX(-200%)";
	slider.style.transition = "transform .5s";

	setTimeout(()=>{
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend',primero);
		slider.style.transform = "translateX(-100%)";
	},500);
}


// Anterior imagen.
function previous() {
	let ultimo = slider.lastElementChild;
	slider.style.transform = "translateX(0)";
	slider.style.transition = "transform .5s";

	setTimeout(()=>{
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin',ultimo);
		slider.style.transform = "translateX(-100%)";
	},500);
}


setInterval(()=>{ next(); },5000);