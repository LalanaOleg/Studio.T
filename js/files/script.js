// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener("load", () => {
	const htmlElement = document.documentElement;
	const buttonChange = document.querySelector(".change-theme");

	let userTheme = 'light';
	if (window.matchMedia) {
		userTheme = window.matchMedia(("(prefers-color-scheme: dark")).matches ? 'dark' : 'light';
	}

	htmlElement.classList.add(userTheme);
	window.matchMedia(("(prefers-color-scheme: dark")).addEventListener('change', changeTheme);

	if (buttonChange) {
		buttonChange.addEventListener("click", changeTheme);
	}

	function changeTheme() {
		let currentTheme = htmlElement.classList.contains('light') ? 'light' : 'dark';
		let newTheme;
		if (currentTheme == 'dark') newTheme = 'light';
		else newTheme = 'dark';
		htmlElement.classList.remove(currentTheme);
		htmlElement.classList.add(newTheme);
	}
});
