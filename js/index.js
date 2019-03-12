const showScreen = (id) => {
	document.querySelectorAll(".screen").forEach(section => section.classList.remove("show"));
	document.getElementById(id).classList.add("show");
};