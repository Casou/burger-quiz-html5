const TEAM_KETCHUP = "scoreKetchup";
const TEAM_MAYO = "scoreMayo";
let CURRENT_SCORE_KETCHUP = parseInt(localStorage.getItem(TEAM_KETCHUP)) || 0;
let CURRENT_SCORE_MAYO = parseInt(localStorage.getItem(TEAM_MAYO)) || 0;

const updateScore = () => {
	document.querySelectorAll(".score_ketchup__number").forEach(elt => {
		elt.innerHTML = formatScore(CURRENT_SCORE_KETCHUP);
	});
	document.querySelectorAll(".score_mayo__number").forEach(elt => {
		elt.innerHTML = formatScore(CURRENT_SCORE_MAYO);
	});
};

const addPointsToScore = (team, points) => {
	let score;
	if (team === TEAM_KETCHUP) {
		score = CURRENT_SCORE_KETCHUP + points;
		CURRENT_SCORE_KETCHUP = score;
	} else {
		score = CURRENT_SCORE_MAYO + points;
		CURRENT_SCORE_MAYO = score;
	}
	localStorage.setItem(team, score + "");
	updateScore();
};

updateScore();

addKeyDownCallback("k", () => addPointsToScore(TEAM_KETCHUP, 1), "Ketchup + 1");
addKeyDownCallback("i", () => addPointsToScore(TEAM_KETCHUP, -1), "Ketchup - 1");
addKeyDownCallback("m", () => addPointsToScore(TEAM_MAYO, 1), "Mayo + 1");
addKeyDownCallback("p", () => addPointsToScore(TEAM_MAYO, -1), "Mayo - 1");
