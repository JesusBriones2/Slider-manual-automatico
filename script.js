const frame_container = document.getElementById('frame_container');
const btns = document.querySelectorAll('.frame__btn');

let timeStamp_previous = 0; // Tiempo entre cada click.
let timeout_seconds = 1000; // Tiempo de los timers.
let transition_seconds = 1; // Tiempo de transicion.
let click_detection = false;

btns[0].addEventListener('click', previous_image);
btns[1].addEventListener('click', next_image);



// Mover hacia la imagen anterior.
function previous_image(e) {

	if (e) { detect_timeStamp(e); }

	frame_container.style.transition = `transform ${transition_seconds}s`;
	frame_container.style.transform = "translateX(0)";

	setTimeout(()=>{
		frame_container.style.transition = "none";
		frame_container.style.transform = "translateX(-100%)";
		frame_container.insertAdjacentElement('afterbegin', frame_container.lastElementChild);
	}, timeout_seconds);
}



// Mover hacia la siguiente imagen.
function next_image(e) {

	if (e) { detect_timeStamp(e); }

	frame_container.style.transition = `transform ${transition_seconds}s`;
	frame_container.style.transform = "translateX(-200%)";

	setTimeout(()=>{
		frame_container.style.transition = "none";
		frame_container.style.transform = "translateX(-100%)";
		frame_container.insertAdjacentElement('beforeend', frame_container.firstElementChild);
	}, timeout_seconds);
}



// Calcula el tiempo entre cada click y activa o desactiva las transiciones.
function detect_timeStamp (e) {

	let time = Math.round( e.timeStamp ) - timeStamp_previous;
	timeStamp_previous = e.timeStamp;
	
	if ( time > 300 ) {
		timeout_seconds = 300;
		transition_seconds = 0.3;
	}else {
		timeout_seconds = 0;
		transition_seconds = 0;
	}

	// Cambia la deteccion del click en true para desactivar el deslizamiento automatico. 
	if ( click_detection == false ) {
		click_detection = true;
		// Timer que cambia la deteccion del cliak a false para activar el deslizamiento automatico.
		setTimeout( () => {
			click_detection = false;
			timeout_seconds = 1000;
			transition_seconds = 1;
		}, 1000 )
	}
}


// Desliza el frame container de forma automatica.
setInterval(()=>{ if (click_detection == false) {next_image();} },4000);