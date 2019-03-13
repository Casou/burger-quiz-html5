class NuggetsTransition extends Screen {

	constructor() {
		super();
		this.id = "transition__nuggets";

		this.video = document.getElementById("nuggets__video");
		this.isVideoPlayed = false;
	}

	nextAction(key) {
		if (!this.video.paused) {
			return true;
		}

		if (!this.isVideoPlayed) {
			this.video.play();
			return true;
		}

		return false;
	}

	previousAction(key) {
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
