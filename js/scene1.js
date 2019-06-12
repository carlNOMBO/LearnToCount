var width=window.innerWidth;
var height=window.innerHeight;

$("body").css({
	"background-color":"#88001b"
});

$("#scene1").css({
	"background-color":"#88001b"
});

var stage = new Konva.Stage({
    container: 'scene1',   
    width: width-width/4,
    height: height-width/4,	
});

var layer = new Konva.Layer();

var imageObj = new Image();
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
    imageObj.src = 'img/droite.png';