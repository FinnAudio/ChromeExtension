document.addEventListener('DOMContentLoaded', function() {
	var pandoraButton = document.getElementById('pandora');
	pandoraButton.addEventListener('click', function() {
		var newURL = "http://pandora.com/";
		chrome.tabs.create({url: newURL});
	})
});