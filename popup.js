document.addEventListener('DOMContentLoaded', function() {
	var pandoraButton = document.getElementById('pandora');
	pandoraButton.addEventListener('click', function() {
		var newURL = "http://pandora.com/";
		chrome.tabs.create({url: newURL});
	});

	var youtubeButton = document.getElementById('youtube');
	youtubeButton.addEventListener('click', function() {
		var newURL = "http://youtube.com/";
		chrome.tabs.create({url: newURL});
	});

	var netflixButton = document.getElementById('netflix');
	netflixButton.addEventListener('click', function() {
		var newURL = "http://netflix.com/";
		chrome.tabs.create({url: newURL});
	});

	var netflixButton = document.getElementById('spotify');
	netflixButton.addEventListener('click', function() {
		var newURL = "http://play.spotify.com/";
		chrome.tabs.create({url: newURL});
	});

	var netflixButton = document.getElementById('soundcloud');
	netflixButton.addEventListener('click', function() {
		var newURL = "http://soundcloud.com/";
		chrome.tabs.create({url: newURL});
	});

	var netflixButton = document.getElementById('amazonVideo');
	netflixButton.addEventListener('click', function() {
		var newURL = "http://amazon.com/";
		chrome.tabs.create({url: newURL});
	});
});