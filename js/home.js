window.addEventListener("load",function function_name() {
	
	console.log("Chargrmrny");
	var width=window.innerWidth;
	var height=window.innerHeight;

	$('#buttons').css({
		"left": width/2-width/10,
		"top": height-height/3
	});

	$('#btn-play').css({
		"width":width/10,
		"height":width/10,
	})

	// first we need to create a stage
	var stage = new Konva.Stage({
	    container: 'container',   // id of container <div>
	    width: width,
	    height: height,
	});


	    var simpleText = new Konva.Text({
        x: width/2-width/10,
        y: height-height/4,
        text: 'Jouer',
        fontSize: 30,
        fontFamily: 'comic',
        fill: 'white'
      });

	// then create layer
	var layer = new Konva.Layer();

    /*var imageObj = new Image();
    imageObj.onload = function() {
      var play = new Konva.Image({
        x: width/2-width/10,
        y: height-height/4,
        image: imageObj,
        width: width/5,
        height: 118,
        shadowOffsetX: 20,
        shadowOffset: 25,
        shadowBlur : 40
      });

 		layer.add(play);
 		stage.add(layer);
    };
    imageObj.src = 'img/play.svg';*/  	 
	 
    

      document.getElementById('btn-play').addEventListener(
        'click',
        function() {
          //oval.listening(true);
          //layer.drawHit();
          console.log("oui");
        },
        false
      );

	/*var player = document.querySelector('#idAudioAccueil');
	player.play();*/

});


