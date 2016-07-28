chrome.runtime.sendMessage({action: "play"}, function(response)
{
    var url = response.url;
    if (url.includes("youtube")) {
		youtubePlay();
	}
	else if (url.includes("pandora")) {
		pandoraPlay();
	}
	else if (url.includes("netflix")) {
		netflixPlay();
	}
    else if (url.includes("spotify")) {
        spotifyPlay();
    }
    else if (url.includes("soundcloud")) {
        soundcloudPlay();
    }
    else if (url.includes("amazon")) {
        amazonVideoPlay();
    }
});
// var url = background.tabURL;
// alert(url);


function youtubePlay(className) {
    var parents = document.getElementsByClassName("ytp-play-button");
    parents[0].click();
}

function pandoraPlay() {
    var parents = document.getElementsByClassName("playButton");
    var child = parents[0].getElementsByTagName('a')[0];
    child.click();
}

function netflixPlay() {
	var parents = document.getElementsByClassName("player-play-pause");
    parents[0].click();
}

function spotifyPlay() {
    var iframe = document.getElementById('app-player');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var playButton = iframeDocument.getElementById('play-pause');
    playButton.click();
}

function soundcloudPlay() {
    var parents = document.getElementsByClassName("playControl");
    parents[0].click();
}

function amazonVideoPlay() {
    var parents = document.getElementsByClassName("playIcon");
    parents[0].click();
}