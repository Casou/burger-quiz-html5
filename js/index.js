document.body.onkeydown = function(e){
	KEY_DOWN_CALLBACKS[e.key] && KEY_DOWN_CALLBACKS[e.key].callback();
};

const addKeyDownCallback = (key, callback, description) => {
	KEY_DOWN_CALLBACKS[key] = { callback, description };
};

const logAllCallbacks = () => {
	console.group("Key callbacks");
	Object.keys(KEY_DOWN_CALLBACKS).forEach(letter => {
		KEY_DOWN_CALLBACKS[letter].description && console.log(letter, KEY_DOWN_CALLBACKS[letter].description);
	});
	console.groupEnd();
};

addKeyDownCallback("a", () => localStorage.clear(), "Clear");