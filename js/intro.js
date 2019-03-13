const INTRO_SCREEN = "intro";

const generiqueEnded = () => {
	CURRENT_SCREEN_INDEX++;
	CURRENT_SCREEN = SCREEN_WORKFLOW[CURRENT_SCREEN_INDEX];
	localStorage.setItem("currentScreenIndex", CURRENT_SCREEN_INDEX + "");
};

class Intro extends Screen {

	constructor() {
		super();
		this.id = "intro";

		this.video = document.getElementById("intro__video");
		this.isVideoPlayed = false;
	}

	nextAction() {
		if (!this.video.paused) {
			return true;
		}

		if (!this.isVideoPlayed) {
			this.video.play();
			return true;
		}

		return false;
	}

	previousAction() {
		if (this.isVideoPlayed) {
			this.isVideoPlayed = false;
			return true;
		}
		return false;
	}

	videoEnded() {
		this.isVideoPlayed = true;
		this.video.src = this.video.src;
	}

}