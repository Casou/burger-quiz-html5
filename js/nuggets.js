class Nuggets extends Screen {

	constructor() {
		super();
		this.id = "nuggets";
		this.nuggets = [];
		this.nuggets_index = parseInt(localStorage.getItem("nuggetIndex")) || 0;
		this.retrieveNuggets();
	}

	nextAction(key) {
		return false;
	}

	retrieveNuggets() {
		fetch("/nuggets.json")
			.then(response => response.json())
			.then(nuggets => {
				this.nuggets = nuggets.questions;
			});
	};

	nextNugget() {
		if (this.nuggets_index >= this.nuggets.length || !this.isCurrentScreen()) {
			return;
		}

		this._displayNugget(this.nuggets_index);
		localStorage.setItem("nuggetIndex", this.nuggets_index);
		this.nuggets_index++;
	};

	_displayNugget(index) {
		const body = document.getElementsByTagName("body")[0];
		if (index % 2) {
			body.classList.remove("mayo");
			body.classList.add("ketchup");
		} else {
			body.classList.remove("ketchup");
			body.classList.add("mayo");
		}

		const nugget = this.nuggets[index];
		document.getElementById("nuggets__question").innerHTML = nugget.label;

		const items = document.querySelectorAll(".nuggets__reponses_text");
		for (let i = 0; i < items.length; i++) {
			items[i].innerHTML = nugget.responses[i].label;
			items[i].classList.remove("show");
		}
	};

	displayResponse() {
		if (!this.isCurrentScreen()) {
			return;
		}

		const nextAnswer = document.querySelector(".nuggets__reponses_text:not(.show)");
		if (nextAnswer) {
			nextAnswer.classList.add("show");
		}
	};

}
