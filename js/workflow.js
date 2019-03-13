class Workflow {

	constructor() {
		this.items = [
			new Intro(),
			new NuggetsTransition(),
			new Nuggets()
		];
		this.currentScreenIndex = parseInt(localStorage.getItem("currentScreenIndex")) || 0;
		this.currentScreen = this.items[this.currentScreenIndex];

		this.showScreen = this.showScreen.bind(this);
		this.nextAction = this.nextAction.bind(this);
		this.previousAction = this.previousAction.bind(this);
		this._nextScreen = this._nextScreen.bind(this);
		this._previousScreen = this._previousScreen.bind(this);
		this._updateScreen = this._updateScreen.bind(this);

		addKeyDownCallback("n", this.nextAction, "Next action");
		addKeyDownCallback("p", this.previousAction, "Previous action");

		this.showScreen(this.currentScreen);
	}

	getScreen(id) {
		return this.items.find(screen => screen.id === id);
	}

	showScreen(screen) {
		document.querySelectorAll(".screen").forEach(section => section.classList.add("hide"));
		document.getElementById(screen.id).classList.remove("hide");
	};

	nextAction() {
		if (!this.currentScreen) {
			return;
		}
		if (!this.currentScreen.nextAction("n")) {
			this._nextScreen();
		}
	}

	previousAction() {
		if (!this.currentScreen) {
			return;
		}
		if (!this.currentScreen.nextAction("p")) {
			this._previousScreen();
		}
	}

	_nextScreen() {
		this.currentScreenIndex++;
		this._updateScreen(this.currentScreenIndex);
	}

	_previousScreen() {
		this.currentScreenIndex--;
		this._updateScreen(this.currentScreenIndex);
	}

	_updateScreen(index) {
		localStorage.setItem("currentScreenIndex", index + "");
		this.currentScreen = this.items[index];
		this.showScreen(this.currentScreen);
	}

}