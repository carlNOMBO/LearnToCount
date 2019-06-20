window.addEventListener("load",function function_name() {
	
  $("#container").show(); 
  $("#boutonPlay").show();
  $("#menu").hide();
  $("#scene1").hide();
  $("#scene2").hide();
  $("#scene3").hide();
  $("#scene4").hide();
  $("#scene5").hide();

	console.log("Chargement");
	var width=window.innerWidth;
	var height=window.innerHeight;

	$('#buttons').css({
		"left": width/2-width/30+50,
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
        x: width/3-width/9,
        y: height/8,
        text: 'Apprendre à compter avec nous',
        fontSize: 60,
        fontFamily: 'comic',
        fill: '#532712',
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
