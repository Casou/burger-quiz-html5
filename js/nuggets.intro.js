class NuggetsIntro extends AbstractIntro {

	constructor() {
		super("intro__nuggets", "nuggets__video");
	}

	init() {
		this.video.play();
	}

}
