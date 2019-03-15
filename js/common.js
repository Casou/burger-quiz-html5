const showDiscreetError = (text) => {
	const snicker = document.getElementById("errorSnicker");
	snicker.innerHTML = text;
	snicker.classList.remove("hide");
	setTimeout(() => {
		snicker.classList.add("hide");
	}, 5000);
};