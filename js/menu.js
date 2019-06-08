$('#boutonPlay').on('click',function() {
	
	console.log("test");


	$("#container").hide();
	$("#boutonPlay").hide();

	$("#menu").css({
		"background-color":"#88001b"
	});

	var width=window.innerWidth;
	var height=window.innerHeight;

	var wayLayer = new Konva.Layer();
	var starLayer = new Konva.Layer();

	var stageMenu = new Konva.Stage({
	    container: 'menu',   // id of container <div>
	    width: width,
	    height: height,

	});


	  var layerTittle = new Konva.Layer();

	    var simpleText = new Konva.Text({
        x: width/2-width/5,
        y: height/5,
        text: 'Apprendre à compter',
        fontSize: 60,
        fontFamily: 'comic',
        fill: '#E16B5A',
        shadowOffsetX: 20,
        shadowOffset: 25, 
        shadowBlur : 40       
      });

	  layerTittle.add(simpleText);
	  stageMenu.add(layerTittle);

	/*var wayImg = new Image();
	wayImg.onload = function() {
		var way = new Konva.Image({
			x:100,
			y:100,
			image: wayImg,
			width:width/4,
			height:height/4
		});
	};
	wayImg.src='';*/

	var starImg = new Image();
	starImg.onload = function() {
		var star = new Konva.Image({
			x:width/2-width/5,
			y:height/2,
			image: starImg,
			width:width/4,
			height:height/4
		});	
		starLayer.add(star);
		stageMenu.add(starLayer);
	};
	starImg.src='img/menuStar.svg';

	//wayLayer.add(way);
	
	//stage.add(wayLayer);
	

});

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