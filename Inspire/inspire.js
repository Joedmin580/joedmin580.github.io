fetch("https://api.quotable.io/random")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		document.getElementById("quote").innerHTML = data.content;
		document.getElementById("author").innerHTML = data.author;

		console.log(data.content);
		console.log(data.author);
	});
