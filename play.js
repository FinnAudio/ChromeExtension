function clickPlay() {
    var parents = document.getElementsByClassName("playButton");
    var child = parents[0].getElementsByTagName('a')[0];
    child.click();
}
 
clickPlay();
