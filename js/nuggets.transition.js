class NuggetsTransition extends Transition {

	constructor() {
		super("transition__nuggets", "nuggets__video");
	}

	init() {
		this.video.play();
	}

}
