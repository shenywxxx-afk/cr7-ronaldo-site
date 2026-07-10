function setWelcomeMessage() {
	var welcome = document.getElementById("welcome-message");

	if (!welcome) {
		return;
	}

	var hour = new Date().getHours();
	var greeting = "Welcome";

	if (hour < 12) {
		greeting = "Good morning";
	} else if (hour < 18) {
		greeting = "Good afternoon";
	} else {
		greeting = "Good evening";
	}

	welcome.textContent = greeting + "! Welcome to my CR7 fan website.";
}

function createRonaldoMoment(skill) {
	var output = document.getElementById("moment-result");

	if (!output) {
		return;
	}

	var selectedSkill = (skill || "").trim();
	var ideas = [
		"a last-minute free kick flying into the top corner",
		"a sprint past the defender before a calm finish",
		"a powerful header after hanging in the air",
		"a fearless penalty in a packed stadium",
		"a captain's celebration after carrying the team"
	];
	var choice = ideas[Math.floor(Math.random() * ideas.length)];

	if (selectedSkill.length === 0) {
		output.textContent = "Choose a skill first, then build your own CR7 moment.";
		return;
	}

	output.replaceChildren(
		document.createTextNode("Your CR7 moment: "),
		createHighlight(selectedSkill),
		document.createTextNode(" becomes " + choice + ". Siiiu!")
	);
}

function createHighlight(text) {
	var highlight = document.createElement("span");
	highlight.textContent = text;
	return highlight;
}

window.addEventListener("DOMContentLoaded", setWelcomeMessage);
