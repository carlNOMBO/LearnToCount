var width=window.innerWidth;
var height=window.innerHeight;
var widthZoneJeu = width-width/4;
var heightZonJeu = height-height/4;
var xJeu = width/2-widthZoneJeu/2;
var yJeu = height/2-heightZonJeu/2;
var tailleCarreau = widthZoneJeu/6;

$("body").css({
	"background-color":"#88001b"
});

$("#scene1").css({
	"background-color":"88001b"
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


//Gestion de la grille
var carreauxLayer = new Konva.Layer();

var carreauxGroup = new Konva.Group({
	x: xJeu,
	y: yJeu
});


function loadImages(source,callback) {

	// get num of sources
	var image = new Image();
    	image.onload = function(){
      	callback(image);
    };
    image.src=source;        
}

var k=1;
var carreau;
for(var i=0; i<4; i++)
{
	for(var j=0; j<3; j++)
	{
		//loadImages('img/'+k+'.png',function(image) {

			carreau = new Konva.Rect({
		      x: i * tailleCarreau,
		      y: j * tailleCarreau ,
		      width: tailleCarreau,
		      height: tailleCarreau,
		      name: ""+i,
			 // fillPatternImage:image,
			 // fillPatternRepeat:'no-repeat',		      
		      fill: "white",
		      stroke: 'black',
		      strokeWidth: 4		
			});
			carreauxGroup.add(carreau);				
		//});
		k++;
	}
}

carreauxLayer.add(carreauxGroup);
stage.add(carreauxLayer);



//Gestion du personnage
var persolayer = new Konva.Layer();
     var container = stage.container();

      // make it focusable

      container.tabIndex = 1;
      // focus it
      // also stage will be in focus on its click
      container.focus();

      const DELTA = 4, gauche=37, haut=38, droite=39, bas=40;

var perso = new Image();
    perso.onload = function() {
      var play = new Konva.Image({
        x: (xJeu+tailleCarreau/2)-(tailleCarreau/8),
        y: (yJeu+tailleCarreau/2)-(tailleCarreau/4),
        image: perso,
        width: tailleCarreau/4,
        height: tailleCarreau/2,
        shadowOffsetX: 20,
        shadowOffset: 25,
        shadowBlur : 40
      });

 		persolayer.add(play);
 		stage.add(persolayer);

      container.addEventListener('keydown', function(e) {
        if (e.keyCode === gauche) {        	
          play.x(play.x() - tailleCarreau);
        } else if (e.keyCode === haut) {        	
          play.y(play.y() - tailleCarreau);
        } else if (e.keyCode === droite) {
          play.x(play.x() + tailleCarreau);
        } else if (e.keyCode === bas) {
          play.y(play.y() + tailleCarreau);
        } else {
          return;
        }
        e.preventDefault();
        persolayer.batchDraw();
      }); 		
    };
    perso.src = 'img/droite.png';

