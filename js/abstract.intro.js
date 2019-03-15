class AbstractIntro extends Screen {

	constructor(idSection, idVideo) {
		super();

		this.id = idSection;
		this.video = document.getElementById(idVideo);

		this.isVideoPlayed = false;
	}

	init() {

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
