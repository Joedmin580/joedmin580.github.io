function playSound() {
	var soundsArray = [
		"./Sounds/alien_sound_1.mp3",
		"./Sounds/alien_sound_2.mp3",
		"./Sounds/alien_sound_3.mp3",
		"./Sounds/alien_sound_4.mp3",
		"./Sounds/alien_sound_5.mp3",
		"./Sounds/alien_sound_6.mp3",
	];
	var randomNumber = Math.floor(Math.random() * soundsArray.length);
	var sound = soundsArray[randomNumber];

	var audio = new Audio(sound);
	console.log(`Playing ${sound}`);
	audio.play();
}

var playing = true;
var sound = document.getElementById("music");
function playPause() {
	var controler = document.getElementById("controler");
	if (playing) {
		controler.setAttribute("src", "/Images/Sound/off.svg");
		playing = false;
		sound.pause();
	} else if (!playing) {
		controler.setAttribute("src", "/Images/Sound/on.svg");
		playing = true;
		sound.play();
	}
	console.log(`Playing music: ${playing}`);
}
