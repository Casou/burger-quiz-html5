class Screen {

	constructor() {
		this.id = "UNSET";
	}

	isCurrentScreen() {
		return CURRENT_SCREEN !== this.id;
	}

	nextAction(key) {
		throw new Error("Should have been implemented");
	}
}
