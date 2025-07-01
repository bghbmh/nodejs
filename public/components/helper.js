

export const throttle = (callback, timeout = 600) => {
	let timer;
	return (...args) => {
		if (!timer) {
			timer = setTimeout(() => {
				callback.apply(this, args);
				timer = undefined;
			}, timeout);
		}
	};
};
  

export const debounce = (callback, timeout = 400) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => { callback.apply(this, args);  console.log("debounce") }, timeout);
	};
};