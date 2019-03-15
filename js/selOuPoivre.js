class SelOuPoivre extends Screen {

	constructor() {
		super();
		this.id = "sel_ou_poivre";
	}

	init() {

	}

	nextAction() {
		const nextAnswer = document.querySelector("#sel_ou_poivre li.hide");
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
