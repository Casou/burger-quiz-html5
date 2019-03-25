class AbstractIntro extends Screen {

	constructor(idSection, idVideo) {
		super();

		this.id = idSection;
		this.video = document.getElementById(idVideo);

		this.isVideoPlayed = false;
		addKeyDownCallback("y", AbstractIntro.playCurrentScreenVideo, "Play video in current screen");
	}

	init() {

	}

	static playCurrentScreenVideo() {
		if (!WORKFLOW.currentScreen instanceof AbstractIntro) {
			return;
		}
		WORKFLOW.currentScreen.playVideo();
	}

	playVideo() {
		if (!this.isVideoPlayed && this.video.paused) {
			this.video.play();
		}
	}

	nextAction() {
		return !this.video.paused;
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
	}

}
