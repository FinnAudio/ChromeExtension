


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
    var playButton = document.getElementById("play-pause");
    alert(playButton);
    playButton.click();
}