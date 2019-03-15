class CadeauxIntro extends AbstractIntro {

	constructor() {
		super("intro__addition", "addition__video");
	}

	init() {
		this.video.play();
	}

}
