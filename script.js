function redirect() {
	var linksArray = [
		"/",
		"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		"../Secret/secret.html",
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

document.onload = getQuote();

function playSound() {
	var soundsArray = [
		"/Sounds/alien_sound_1.mp3",
		"/Sounds/alien_sound_2.mp3",
		"/Sounds/alien_sound_3.mp3",
		"/Sounds/alien_sound_4.mp3",
		"/Sounds/alien_sound_5.mp3",
		"/Sounds/alien_sound_6.mp3",
	];
	var randomNumber = Math.floor(Math.random() * soundsArray.length);
	var sound = soundsArray[randomNumber];

	var audio = new Audio(sound);
	console.log(`Playing ${sound}`);
	audio.play();
}
