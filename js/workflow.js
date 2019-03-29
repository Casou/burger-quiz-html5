class Workflow {

	constructor() {
		this.items = [
			new VideoScreen("intro", "intro__video"),
			new VideoScreen("cadeaux", "cadeaux__video"),
			new VideoScreen("intro__nuggets", "nuggets__video"),
			new Nuggets(),

			new VideoScreen("pub1", "pub1__video"),

			new VideoScreen("intro__sel_ou_poivre", "sel_ou_poivre__video"),
			new SelOuPoivre(),

			new MultipleVideoScreen("pub2"),

			new VideoScreen("intro__menu", "menu__video"),
			new Menus(),

			new MultipleVideoScreen("pub3"),

			new VideoScreen("intro__addition", "addition__video"),
			new Addition(),
			new VideoScreen("intro__burger_de_la_mort", "burger_de_la_mort__video"),
			new BurgerDeLaMort()
		];
		this.score = new Score();

		this.currentScreenIndex = parseInt(localStorage.getItem("currentScreenIndex")) || 0;
		this.currentScreen = this.items[this.currentScreenIndex];
		this.paused = false;

		this.getScreen = this.getScreen.bind(this);
		this.goToScreen = this.goToScreen.bind(this);
		this.nextAction = this.nextAction.bind(this);
		this.previousAction = this.previousAction.bind(this);
		this._nextScreen = this._nextScreen.bind(this);
		this._previousScreen = this._previousScreen.bind(this);
		this._updateScreen = this._updateScreen.bind(this);
		this.toggleScore = this.toggleScore.bind(this);

		addKeyDownCallback("n", this.nextAction, "Next action");
		addKeyDownCallback("b", this.previousAction, "Previous action");

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

		Promise.all(
			this.items.map(item => item.load())
		).then(() => {
			this.currentScreen.init();
			showScreen(this.currentScreen.id);
		});
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

	nextAction() {
		if (!this.currentScreen || this.paused) {
			return;
		}
		if (!this.currentScreen.nextAction()) {
			this._nextScreen();
		}
	}

	previousAction() {
		if (!this.currentScreen || this.paused) {
			return;
		}
		if (!this.currentScreen.previousAction()) {
			this._previousScreen();
			this.currentScreen.previousAction();
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

		const body = document.getElementsByTagName("body")[0];
		body.classList.remove("ketchup");
		body.classList.remove("mayo");
		body.classList.remove("menus");

		this.currentScreen.init();
		showScreen(this.currentScreen.id);
	}

	toggleScore() {
		this.paused = !this.paused;
		this.paused && showScreen(this.score.id);
		!this.paused && showScreen(this.currentScreen.id);
	}

}