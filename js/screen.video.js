class VideoScreen extends Screen {

	constructor(idSection, idVideo) {
		super();

		this.id = idSection;
		this.video = document.getElementById(idVideo);

		this.isVideoPlayed = false;
		addKeyDownCallback("y", VideoScreen.playCurrentScreenVideo, "Play video in current screen");
	}

	init() {

	}

	static playCurrentScreenVideo() {
		if (!WORKFLOW.currentScreen instanceof VideoScreen) {
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
