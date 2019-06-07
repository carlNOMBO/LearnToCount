$('#boutonPlay').on('click',function() {
	
	console.log("test");

	
	/*var player = document.querySelector('#idAudioAccueil');
	player.play();*/
  	

	$("#container").css({
		"background-color":"#88001b"
	});
	var width=window.innerWidth;
	var height=window.innerHeight;

	var stage = new Konva.Stage({
	    container: 'container',   // id of container <div>
	    width: width,
	    height: height,

	});
});

/*document.getElementById('btn-play').addEventListener('click',function() {
	alert("tesy");
})*/

 function play(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
  	player.play();
}

function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
  
    player.currentTime = 0;
    player.pause();
}

$("#source").on("load",function() {
  var player = document.querySelector('#audioPlayer');
  player.play();
});