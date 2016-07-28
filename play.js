


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
});
// var url = background.tabURL;
// alert(url);


function youtubePlay(className) {
    var parents = document.getElementsByClassName("ytp-play-button");
    //var child = parents[0].getElementsByTagName('a')[0];
    parents[0].click();
}

function pandoraPlay() {
    var parents = document.getElementsByClassName("playButton");
    var child = parents[0].getElementsByTagName('a')[0];
    child.click();
}

function netflixPlay() {
	var parents = document.getElementsByClassName("player-play-pause");
    //var child = parents[0].getElementsByTagName('a')[0];
    parents[0].click();
}