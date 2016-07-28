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
		netflixPause();
	}
    else if (url.includes("spotify")) {
        spotifyPause();
    }
    else if (url.includes("soundcloud")) {
        soundcloudPause();
    }
    else if (url.includes("amazon")) {
        amazonVideoPause();
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

function netflixPause() {
	var parents = document.getElementsByClassName("player-play-pause");
    //var child = parents[0].getElementsByTagName('a')[0];
    parents[0].click();
}

function spotifyPause() {
    var iframe = document.getElementById('app-player');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var playButton = iframeDocument.getElementById('play-pause');
    playButton.click();
}

function soundcloudPause() {
    var parents = document.getElementsByClassName("playControl");
    parents[0].click();
}

function amazonVideoPause() {
    var parents = document.getElementsByClassName("pausedIcon");
    parents[0].click();
}