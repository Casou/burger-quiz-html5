class Menus extends Screen {

	constructor() {
		super();
		this.id = "menus";
	}

	init() {
		const body = document.getElementsByTagName("body")[0];
		body.classList.add("menus");
	}

	nextAction() {
		const nextAnswer = document.querySelector("#menus .menu__label.hide");
		console.log(nextAnswer);
		if (nextAnswer) {
			nextAnswer.classList.remove("hide");
			return true;
		}

		const body = document.getElementsByTagName("body")[0];
		body.classList.remove("menus");
		return false;
	}

	previousAction() {
		return false;
	}

}
