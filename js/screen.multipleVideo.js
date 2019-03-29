class MultipleVideoScreen extends VideoScreen {

	constructor(idSection) {
		super(idSection, null);

		this.videoCpt = 0;
		this.video = null;
	}

	playVideo() {
		const videos = document.querySelectorAll("#" + this.id + " video");

		if (videos[this.videoCpt]) {
			this.video = videos[this.videoCpt];
			this.video.classList.remove("hide");
			if (!this.isVideoPlayed && this.video.paused) {
				this.video.play();
			}
		} else {
			this.isVideoPlayed = true;
		}
	}

	nextAction() {
		return this.video && !this.video.paused;
	}

	videoEnded() {
		this.video.classList.add("hide");
		this.videoCpt++;
		this.playVideo();
	}

}
