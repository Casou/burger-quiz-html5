const TEAM_KETCHUP = "scoreKetchup";
const TEAM_MAYO = "scoreMayo";

class Score {

	constructor() {
		this.id = "scores";
		this.scoreKetchup = parseInt(localStorage.getItem(TEAM_KETCHUP)) || 0;
		this.scoreMayo = parseInt(localStorage.getItem(TEAM_MAYO)) || 0;

		this.updateScore = this.updateScore.bind(this);
		this.addPointsToScore = this.addPointsToScore.bind(this);

		addKeyDownCallback("i", () => this.addPointsToScore(TEAM_KETCHUP, 1), "Ketchup + 1");
		addKeyDownCallback("k", () => this.addPointsToScore(TEAM_KETCHUP, -1), "Ketchup - 1");
		addKeyDownCallback("o", () => this.addPointsToScore(TEAM_MAYO, 1), "Mayo + 1");
		addKeyDownCallback("l", () => this.addPointsToScore(TEAM_MAYO, -1), "Mayo - 1");

		this.updateScore();
	}

	updateScore() {
		document.querySelectorAll(".score_ketchup__number").forEach(elt => { elt.innerHTML = formatScore(this.scoreKetchup); });
		document.querySelectorAll(".score_mayo__number").forEach(elt => { elt.innerHTML = formatScore(this.scoreMayo); });

		document.querySelectorAll(".score_ketchup__picture").forEach(elt => {
			for (let i = 0; i <= 25; i++) {
				elt.classList.remove("pt" + i);
			}
			elt.classList.add("pt" + this.scoreKetchup);
		});
		document.querySelectorAll(".score_mayo__picture").forEach(elt => {
			for (let i = 0; i <= 25; i++) {
				elt.classList.remove("pt" + i);
			}
			elt.classList.add("pt" + this.scoreMayo);
		});

	};

	addPointsToScore(team, points) {
		let score;
		if (team === TEAM_KETCHUP) {
			score = this.scoreKetchup + points;
			this.scoreKetchup = score;
		} else {
			score = this.scoreMayo + points;
			this.scoreMayo = score;
		}
		localStorage.setItem(team, score + "");
		this.updateScore();
	};

}

const formatScore = (score) => {
	return score >= 10 ? score + "" : "0" + score;
};

