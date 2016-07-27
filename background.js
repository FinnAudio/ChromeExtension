chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  		if (command == "Pause") {
  			chrome.tabs.executeScript(tabs[0].id, {file: "pause.js"});
  		}
  		else if (command == "Play") {
  			chrome.tabs.executeScript(tabs[0].id, {file: "play.js"});
  		}
	});
});

