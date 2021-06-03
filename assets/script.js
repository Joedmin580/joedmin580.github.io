function redirect() {
	var linksArray = [
		"/",
		"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		"/pages/secret.html",
	];
	var randomNumber = Math.floor(Math.random() * linksArray.length);
	var link = linksArray[randomNumber];

	console.log(`Changed link in text to ${link}`);
	document.getElementById("link").setAttribute("href", link);

	console.log(`Redirecting to ${link}`);
	setTimeout(() => (window.location.href = link), 1000);
}

function getQuote() {
	fetch("https://api.quotable.io/random")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			document.getElementById("quote").innerHTML = data.content;
			document.getElementById("author").innerHTML = "- " + data.author;

			console.log(data.content);
			console.log(data.author);
		});
}

function playSound() {
	var soundsArray = [
		"/media/sounds/alien-SFX/sound_1.mp3",
		"/media/sounds/alien-SFX/sound_2.mp3",
		"/media/sounds/alien-SFX/sound_3.mp3",
		"/media/sounds/alien-SFX/sound_4.mp3",
		"/media/sounds/alien-SFX/sound_5.mp3",
		"/media/sounds/alien-SFX/sound_6.mp3",
	];
	var randomNumber = Math.floor(Math.random() * soundsArray.length);
	var sound = soundsArray[randomNumber];

	var audio = new Audio(sound);
	console.log(`Playing ${sound}`);
	audio.play();
}

// Navbar collapsing
var isNavOpen = false;
function toggleNav() {
	if (!isNavOpen) {
		document.getElementById("nav-collapsing").style.width = "15rem";
		document.querySelectorAll("[id=bright-change]").forEach((item) => {
			item.style.filter = "brightness(30%)";
		});
		document.querySelectorAll("[class=nav-link]").forEach((item) => {
			item.style.opacity = "100%";
		});
		isNavOpen = true;
	} else {
		closeNav();
	}
}
function closeNav() {
	if (isNavOpen) {
		document.getElementById("nav-collapsing").style.width = "0";
		document.querySelectorAll("[id=bright-change]").forEach((item) => {
			item.style.filter = "brightness(100%)";
		});
		document.querySelectorAll("[class=nav-link]").forEach((item) => {
			item.style.opacity = "0%";
		});
		isNavOpen = false;
	}
}
