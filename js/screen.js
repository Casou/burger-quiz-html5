class Screen {

	constructor() {
		this.id = "UNSET";
	}

	isCurrentScreen() {
		return CURRENT_SCREEN !== this.id;
	}

	nextAction(key) {
		throw new Error("nextAction should have been implemented");
	}

	previousAction(key) {
		throw new Error("previousAction should have been implemented");
	}

}
