const showDiscreetError = (text) => {
	const snicker = document.getElementById("errorSnicker");
	snicker.innerHTML = text;
	snicker.classList.remove("hide");
	setTimeout(() => {
		snicker.classList.add("hide");
	}, 5000);
};

const showScreen = (screenId) => {
	document.querySelectorAll(".screen").forEach(section => section.classList.add("hide"));
	document.getElementById(screenId).classList.remove("hide");
};