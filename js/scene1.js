var width=window.innerWidth;
var height=window.innerHeight;
var widthZoneJeu = width-width/4;
var heightZonJeu = height-height/4;
var xJeu = width/2-widthZoneJeu/2;
var yJeu = height/2-heightZonJeu/2;
var tailleCarreau = widthZoneJeu/6;

$("body").css({
	"background-color":"#f9bb35"
});

$("#scene1").css({
	"background-color":" f9bb35"
});

var stage = new Konva.Stage({
    container: 'scene1',   
    width: width,
    height: height	
});

var zoneLayer=new Konva.Layer();

var zoneJeu = new Konva.Rect({
    x: xJeu,
    y: yJeu,
    width: widthZoneJeu,
    height: heightZonJeu,
    fill: '#8D9590'
    /*stroke: 'black',
    strokeWidth: 4*/	
});

zoneLayer.add(zoneJeu);
stage.add(zoneLayer);

var carreauxGroup = new Konva.Group({
	x: xJeu,
	y: yJeu
});

for(var i=0; i<6; i++)
{
	for(var j=0; j<5; j++)
	{
		var carreau = new Konva.Rect({
	      x: i * tailleCarreau,
	      y: j * tailleCarreau ,
	      width: tailleCarreau,
	      height: tailleCarreau,
	      name: ""+i,
	      fill: "white",
	      stroke: 'black',
	      strokeWidth: 4		
		});
		carreauxGroup.add(carreau);
	}
}

var carreauxLayer = new Konva.Layer();
carreauxLayer.add(carreauxGroup);
stage.add(carreauxLayer);

var persolayer = new Konva.Layer();

var imageObj = new Image();
    imageObj.onload = function() {
      var play = new Konva.Image({
        x: (xJeu+tailleCarreau/2)-(tailleCarreau/8),
        y: (yJeu+tailleCarreau/2)-(tailleCarreau/4),
        image: imageObj,
        width: tailleCarreau/4,
        height: tailleCarreau/2,
        shadowOffsetX: 20,
        shadowOffset: 25,
        shadowBlur : 40
      });

 		persolayer.add(play);
 		stage.add(persolayer);
    };
    imageObj.src = 'img/droite.png';