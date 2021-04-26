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

document.onload = redirect();
