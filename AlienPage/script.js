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
