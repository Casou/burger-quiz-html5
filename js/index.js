const showScreen = (id) => {
	document.querySelectorAll(".screen").forEach(section => section.classList.remove("show"));
	document.getElementById(id).classList.add("show");
};

const formatScore = (score) => {
	return score >= 10 ? score + "" : "0" + score;
};

document.body.onkeydown = function(e){
	KEY_DOWN_CALLBACKS[e.key] && KEY_DOWN_CALLBACKS[e.key].callback();
};

const addKeyDownCallback = (key, callback, description) => {
	KEY_DOWN_CALLBACKS[key] = { callback, description };
};