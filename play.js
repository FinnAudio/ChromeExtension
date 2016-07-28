


chrome.runtime.sendMessage({action: "pause"}, function(response)
{
   var url = response.url;
   if (url.includes("youtube")) {
		youtubePlay();
	}
	else if (url.includes("pandora")) {
		pandoraPlay();
	}
});
// var url = background.tabURL;
// alert(url);


function youtubePlay() {
    var parents = document.getElementsByClassName("ytp-play-button");
    //var child = parents[0].getElementsByTagName('a')[0];
    parents[0].click();
}

function pandoraPlay() {
    var parents = document.getElementsByClassName("playButton");
    var child = parents[0].getElementsByTagName('a')[0];
    child.click();
}