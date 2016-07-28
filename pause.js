chrome.runtime.sendMessage({action: "pause"}, function(response)
{
   	var url = response.url;
   	if (url.includes("youtube")) {
		youtubePause();
	}
	else if (url.includes("pandora")) {
		pandoraPause();
	}
	else if (url.includes("netflix")) {
		netflixPlay();
	}
});

function pandoraPause() {
    var parents = document.getElementsByClassName("pauseButton");
    var child = parents[0].getElementsByTagName('a')[0];
    child.click();
}

function youtubePause() {
    var parents = document.getElementsByClassName("ytp-play-button");
    //var child = parents[0].getElementsByTagName('a')[0];
    parents[0].click();
}

function netflixPlay() {
	var parents = document.getElementsByClassName("player-play-pause");
    //var child = parents[0].getElementsByTagName('a')[0];
    parents[0].click();
}