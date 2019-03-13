class Nuggets extends Screen {

	constructor() {
		super();
		this.id = "nuggets";
		this.nuggets = [];
		this.nuggets_index = parseInt(localStorage.getItem("nuggetIndex")) || 0;

		this.nextAction = this.nextAction.bind(this);
		this.previousAction = this.previousAction.bind(this);
		this._displayNugget = this._displayNugget.bind(this);
		this._nextResponse = this._nextResponse.bind(this);
		this._nextNugget = this._nextNugget.bind(this);
		this._previousNugget = this._previousNugget.bind(this);
		this._goodAnswer = this._goodAnswer.bind(this);

		addKeyDownCallback("r", this._nextResponse, "Nuggets response");
		addKeyDownCallback("g", this._goodAnswer, "Nuggets good response");

		this.retrieveNuggets()
			.then(() => this._displayNugget(this.nuggets_index));
	}

	nextAction() {
		if (this._nextNugget()) {
			return true;
		}

		const body = document.getElementsByTagName("body")[0];
		body.classList.remove("ketchup");
		body.classList.remove("mayo");
		return false;
	}

	previousAction() {
		if (this._previousNugget()) {
			return true;
		}

		const body = document.getElementsByTagName("body")[0];
		body.classList.remove("ketchup");
		body.classList.remove("mayo");
		return false;
	}

	retrieveNuggets() {
		return fetch("/nuggets.json")
			.then(response => response.json())
			.then(nuggets => {
				this.nuggets = nuggets.questions;
			});
	};

	_nextNugget() {
		if (!this.isCurrentScreen()) {
			this.throwCurrentScreenError();
		}
		if (this.nuggets_index >= this.nuggets.length) {
			return false;
		}

		this.nuggets_index++;
		this._displayNugget(this.nuggets_index);
		localStorage.setItem("nuggetIndex", this.nuggets_index);

		return true;
	};

	_previousNugget() {
		if (!this.isCurrentScreen()) {
			this.throwCurrentScreenError();
		}
		if (this.nuggets_index <= 0) {
			return false;
		}

		this.nuggets_index--;
		this._displayNugget(this.nuggets_index);
		localStorage.setItem("nuggetIndex", this.nuggets_index);

		return true;
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
			nugget.responses[i].index = i;
			items[i].innerHTML = nugget.responses[i].label;
			items[i].classList.remove("good");
			items[i].classList.remove("show");
		}
	};

	_nextResponse() {
		if (!this.isCurrentScreen()) {
			this.throwCurrentScreenError();
		}

		const nextAnswer = document.querySelector(".nuggets__reponses_text:not(.show)");
		if (nextAnswer) {
			nextAnswer.classList.add("show");
			return true;
		}
		
		return false;
	};

	_goodAnswer() {
		if (!this.isCurrentScreen()) {
			this.throwCurrentScreenError();
		}

		const nugget = this.nuggets[this.nuggets_index];
		const answer = nugget.responses.find(r => r.isGood);

		const goodAnswer = document.getElementById("nuggets__reponses_" + answer.index);
		goodAnswer.classList.add("good");
	};

}
