// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: 1280,
    width: 720,
    videoId: 'PKG4iuTJ_E4',
    playerVars: {
      'loop': 1,
      'autoplay': 1,
      'controls': 0,
      'enablejsapi': 1,
      'fs': 0,
      'modestbranding': 1,
      'showinfo': 0,
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}
