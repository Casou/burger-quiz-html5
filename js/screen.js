class Screen {

	constructor() {
		this.id = "UNSET";
	}

	isCurrentScreen() {
		return WORKFLOW.currentScreen.id.localeCompare(this.id) === 0;
	}

	throwCurrentScreenError() {
		throw new Error(`Not the current screen (expected ${this.id}; actual : ${WORKFLOW.currentScreen.id})`);
	}

	load() {
		return Promise.resolve();
	}

	init() {
		throw new Error("init should have been implemented");
	}

	nextAction(key) {
		throw new Error("nextAction should have been implemented");
	}

	previousAction(key) {
		throw new Error("previousAction should have been implemented");
	}

}
