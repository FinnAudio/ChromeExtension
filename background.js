// var tabURL = "";

chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  		tabURL = tabs[0].url;
  		if (command == "Pause") {
  			chrome.tabs.executeScript(tabs[0].id, {file: "pause.js"});
  		}
  		else if (command == "Play") {
  			chrome.tabs.executeScript(tabs[0].id, {file: "play.js"});
  		}
	});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  		if (request.action == "pause" || request.action == "play") {
  			sendResponse({url: tabs[0].url});
  		}
  	});
    return true;
 });