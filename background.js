chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: "script.js"});
}); 

// chrome.tabs.onActivated.addListener(function(activeInfo){
//   chrome.tabs.executeScript(activeInfo.tabId, {file: "script.js"});
// });

chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({}, function (tabs) {
    for (var i = 0; tabs.length; i++) {
      var url = tabs[i].url;
      var tabId;

      if (url.includes("pandora") || url.includes("youtube") || url.includes("netflix") || 
          url.includes("amazon.com/dp") ||  url.includes("soundcloud") ||  url.includes("spotify")) {

          tabId = tabs[i].id;

          chrome.tabs.executeScript(tabId, {file: "play-pause.js"});
      }
    }
	});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.tabs.query({}, function (tabs) {
  		if (request.action == "pause" || request.action == "play") {
  			sendResponse({tabList: tabs});
  		}
  	});
    return true;
 });