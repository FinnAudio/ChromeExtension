function clickPause() {
    var parents = document.getElementsByClassName("pauseButton");
    var child = parents[0].getElementsByTagName('a')[0];
    child.click();
}
 

chrome.extension.sendMessage({state: "pause"}, function(response) {
	clickPause();
});