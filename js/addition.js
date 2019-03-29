class Addition extends Screen {

	constructor() {
		super();
		this.id = "addition";
	}

	init() {

	}

	nextAction() {
		const nextAnswer = document.querySelector("#addition .hide");
		if (nextAnswer) {
			nextAnswer.classList.remove("hide");
			return true;
		}

		return false;
	}

	previousAction() {
		return false;
	}

}
