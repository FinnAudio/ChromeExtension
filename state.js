chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	alert("message");
	if (request.action == "pause") {
		alert("pass");
		chrome.tabs.executeScript(sender.tab.id, {file: "pause.js"});

		 sendResponse({state: "pause"});
	}
	else {
		chrome.tabs.executeScript(sender.tab.id, {file: "play.js"});
		sendResponse({state: "playing"});
	}
});