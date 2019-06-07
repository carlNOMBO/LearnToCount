window.addEventListener("load",function function_name() {
	
	console.log("Chargement");
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

  var layer = new Konva.Layer();

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

  layer.add(simpleText);
  stage.add(layer);
	// then create layer
	

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
	 
    

      /*document.getElementById('btn-play').addEventListener(
        'click',
        function() {
            var player = document.querySelector('#idAudioAccueil');
            player.play();
            //oval.listening(true);
            //layer.drawHit();
            console.log("oui");
        },
        false
      );*/

});
