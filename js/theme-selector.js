(function setThemeInitial(){
	try {
		var localStore = window.localStorage;
		var theme = localStorage.getItem('theme');
		// console.log(theme)
		if(theme === "dark") {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.add('light');
		}
	} catch(err) {
		console.log(err);
	}
})()

function setThemeDark() {
	document.documentElement.classList.remove('light');
	document.documentElement.classList.add('dark');

	try {
		var localStore = window.localStorage;
		var theme = localStorage.setItem('theme','dark');
	} catch(err) {
		console.log(err);
	}
}

function setThemeLight() {
	document.documentElement.classList.remove('dark');
	document.documentElement.classList.add('light');

	try {
		var localStore = window.localStorage;
		var theme = localStorage.setItem('theme','light');
	} catch(err) {
		console.log(err);
	}
	
}

function scrollToElement(id) {
	document.getElementById(id).scrollIntoView();
}