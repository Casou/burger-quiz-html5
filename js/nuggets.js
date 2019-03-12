const NUGGET_SCREEN = "nuggets";
let NUGGETS = [];
let NUGGET_INDEX = parseInt(localStorage.getItem("nuggetIndex")) || 0;

const retrieveNuggets = () => {
	return new Promise((resolve) => {
		fetch("/nuggets.json")
			.then(response => response.json())
			.then(nuggets => {
				resolve(nuggets.questions);
			})
	});
};

const nextNugget = () => {
	if (NUGGET_INDEX >= NUGGETS.length || CURRENT_SCREEN !== NUGGET_SCREEN) {
		return;
	}

	_displayNugget(NUGGET_INDEX);
	localStorage.setItem("nuggetIndex", NUGGET_INDEX);
	NUGGET_INDEX++;
};

const _displayNugget = (index) => {
	const body = document.getElementsByTagName("body")[0];
	if (index % 2) {
		body.classList.remove("mayo");
		body.classList.add("ketchup");
	} else {
		body.classList.remove("ketchup");
		body.classList.add("mayo");
	}

	const nugget = NUGGETS[index];
	document.getElementById("nuggets__question").innerHTML = nugget.label;

	const items = document.querySelectorAll(".nuggets__reponses_text");
	for (let i = 0; i < items.length; i++) {
		items[i].innerHTML = nugget.responses[i].label;
		items[i].classList.remove("show");
	}
};

const displayResponse = () => {
	const nextAnswer = document.querySelector(".nuggets__reponses_text:not(.show)");
	if (nextAnswer) {
		nextAnswer.classList.add("show");
	}
};


retrieveNuggets()
	.then(nuggets => NUGGETS = nuggets)
	.then(nextNugget);