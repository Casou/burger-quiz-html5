class Workflow {

	constructor() {
		this.items = [
			new Intro(),
			new NuggetsTransition(),
			new Nuggets()
		];
		this.score = new Score();

		this.currentScreenIndex = parseInt(localStorage.getItem("currentScreenIndex")) || 0;
		this.currentScreen = this.items[this.currentScreenIndex];
		this.paused = false;

		this.getScreen = this.getScreen.bind(this);
		this.goToScreen = this.goToScreen.bind(this);
		this.showScreen = this.showScreen.bind(this);
		this.nextAction = this.nextAction.bind(this);
		this.previousAction = this.previousAction.bind(this);
		this._nextScreen = this._nextScreen.bind(this);
		this._previousScreen = this._previousScreen.bind(this);
		this._updateScreen = this._updateScreen.bind(this);
		this.toggleScore = this.toggleScore.bind(this);

		addKeyDownCallback("n", this.nextAction, "Next action");
		addKeyDownCallback("p", this.previousAction, "Previous action");

		addKeyDownCallback("&", () => this.goToScreen(1), "1-9 Go to screen");
		addKeyDownCallback("é", () => this.goToScreen(2));
		addKeyDownCallback("\"", () => this.goToScreen(3));
		addKeyDownCallback("'", () => this.goToScreen(4));
		addKeyDownCallback("(", () => this.goToScreen(5));
		addKeyDownCallback("-", () => this.goToScreen(6));
		addKeyDownCallback("è", () => this.goToScreen(7));
		addKeyDownCallback("_", () => this.goToScreen(8));
		addKeyDownCallback("ç", () => this.goToScreen(9));

		addKeyDownCallback("s", this.toggleScore, "Score");

		this.showScreen(this.currentScreen);
	}

	getScreen(id) {
		return this.items.find(screen => screen.id === id);
	}

	goToScreen(index) {
		if (index > this.items.length) {
			return;
		}
		this.currentScreenIndex = Math.max(0, index - 1);
		this._updateScreen(this.currentScreenIndex);
	}

	showScreen(screen) {
		document.querySelectorAll(".screen").forEach(section => section.classList.add("hide"));
		document.getElementById(screen.id).classList.remove("hide");
	};

	nextAction() {
		if (!this.currentScreen || this.paused) {
			return;
		}
		if (!this.currentScreen.nextAction("n")) {
			this._nextScreen();
			this.currentScreen.nextAction("n");
		}
	}

	previousAction() {
		if (!this.currentScreen || this.paused) {
			return;
		}
		if (!this.currentScreen.previousAction("p")) {
			this._previousScreen();
			this.currentScreen.previousAction("p");
		}
	}

	_nextScreen() {
		this.currentScreenIndex = Math.min(this.items.length - 1, this.currentScreenIndex + 1);
		this._updateScreen(this.currentScreenIndex);
	}

	_previousScreen() {
		this.currentScreenIndex = Math.max(0, this.currentScreenIndex - 1);
		this._updateScreen(this.currentScreenIndex);
	}

	_updateScreen(index) {
		localStorage.setItem("currentScreenIndex", index + "");
		this.currentScreen = this.items[index];
		this.showScreen(this.currentScreen);
	}

	toggleScore() {
		this.paused = !this.paused;
		this.paused && this.showScreen({ id : this.score.id });
		!this.paused && this.showScreen(this.currentScreen);
	}

}