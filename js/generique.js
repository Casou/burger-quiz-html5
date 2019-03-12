const generiqueEnded = () => {
	CURRENT_SCREEN_INDEX++;
	CURRENT_SCREEN = SCREEN_WORKFLOW[CURRENT_SCREEN_INDEX];
	localStorage.setItem("currentScreenIndex", CURRENT_SCREEN_INDEX + "");
};