// Alternar modo oscuro
const botonModo = document.getElementById("modoOscuroToggle");

if (botonModo) {
	botonModo.addEventListener("click", () => {
		document.body.classList.toggle("modo-oscuro");

		// Cambiar ícono 🌙 ↔️ ☀️
		const modoOscuroActivo = document.body.classList.contains("modo-oscuro");
		botonModo.textContent = modoOscuroActivo ? "☀️" : "🌙";

		// Guardar preferencia
		localStorage.setItem(
			"modoOscuro",
			modoOscuroActivo ? "activado" : "desactivado"
		);
	});

	// Cargar preferencia guardada
	const preferencia = localStorage.getItem("modoOscuro");
	if (preferencia === "activado") {
		document.body.classList.add("modo-oscuro");
		botonModo.textContent = "☀️"; // Mostrar sol si ya estaba activado
	} else {
		botonModo.textContent = "🌙"; // Mostrar luna si no estaba
	}
}

// Menú hamburguesa toggle
const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
	navbar.classList.toggle("activo");
});

// Animaciones al hacer scroll
const elementosAnimados = document.querySelectorAll(".scroll-hidden");

const mostrarAlHacerScroll = () => {
	const triggerBottom = window.innerHeight * 0.85;

	elementosAnimados.forEach((el) => {
		const top = el.getBoundingClientRect().top;
		if (top < triggerBottom) {
			el.classList.add("scroll-show");
		}
	});
};

window.addEventListener("scroll", mostrarAlHacerScroll);
window.addEventListener("load", mostrarAlHacerScroll);


// Mostrar u ocultar botón "Volver arriba"
const btnSubir = document.getElementById('btnSubir');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnSubir.style.display = 'block';
  } else {
    btnSubir.style.display = 'none';
  }
});

btnSubir.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
