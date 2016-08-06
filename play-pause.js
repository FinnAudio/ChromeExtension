chrome.runtime.sendMessage({action: "play"}, function(response)
{
    var tabList = response.tabList;
    for (var i = 0; tabList.length; i++) {
        var url = tabList[i].url;
        if (url.includes("youtube")) {
            youtubePlay();
        }
        else if (url.includes("pandora")) {
            var parents = document.getElementsByClassName("playButton");
            var s = parents[0].style.display;
            if(s == ("none")) {
                pandoraPause();
            }
            else {
                pandoraPlay();
            }
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
        else if (url.includes("amazon.com/dp")) {
            var playParent = document.getElementsByClassName("playIcon");
            var pauseParent = document.getElementsByClassName("pausedIcon");
            var animatedPausedIcon = document.getElementsByClassName("animatedPausedIcon");
            var playButton = playParent[0];
            var pauseButton = pauseParent[0];
            var animatedButton = animatedPausedIcon[0];

            if (playButton != null) {
                amazonVideoPlay();
            }
            else if (pauseButton != null) {
                amazonVideoPause();
            }
            else {
                animatedButton.click();
            }
        }
    }
    
});

function youtubePlay() {
    var parents = document.getElementsByClassName("ytp-play-button");
    parents[0].click();
}

function pandoraPlay() {
    var parents = document.getElementsByClassName("playButton");
    var child = parents[0].getElementsByTagName('a')[0];
    child.click();
}

function pandoraPause() {
    var parents = document.getElementsByClassName("pauseButton");
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

function amazonVideoPause() {
    var parents = document.getElementsByClassName("pausedIcon");
    parents[0].click();
}