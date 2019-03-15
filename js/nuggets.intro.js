class NuggetsIntro extends AbstractIntro {

	constructor() {
		super("transition__nuggets", "nuggets__video");
	}

	init() {
		this.video.play();
	}

}
