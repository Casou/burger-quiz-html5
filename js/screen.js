const SCREEN_WORKFLOW = [ INTRO_SCREEN,
	NUGGET_TRANSITION, NUGGET_SCREEN,
	"sel_ou_poivre",
	"menus",
	"addition",
	"burger_de_la_mort"
];

let CURRENT_SCREEN_INDEX = parseInt(localStorage.getItem("currentScreenIndex")) || 0;
let CURRENT_SCREEN;

const previousScreen = () => {
	CURRENT_SCREEN_INDEX--;
	CURRENT_SCREEN_INDEX = Math.max(0, CURRENT_SCREEN_INDEX);
	showScreenIndex(CURRENT_SCREEN_INDEX);
};

const nextScreen = () => {
	CURRENT_SCREEN_INDEX++;
	CURRENT_SCREEN_INDEX = Math.min(CURRENT_SCREEN_INDEX, SCREEN_WORKFLOW.length);
	showScreenIndex(CURRENT_SCREEN_INDEX);
};

const showScreenIndex = (index) => {
	localStorage.setItem("currentScreenIndex", index + "");
	CURRENT_SCREEN = SCREEN_WORKFLOW[index];

	showScreen(CURRENT_SCREEN);
};

const showScreen = (id) => {
	document.querySelectorAll(".screen").forEach(section => section.classList.add("hide"));
	document.getElementById(id).classList.remove("hide");
};

showScreenIndex(CURRENT_SCREEN_INDEX);

addKeyDownCallback("p", previousScreen, "Previous");
addKeyDownCallback("n", nextScreen, "Next");