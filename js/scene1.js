var width=window.innerWidth;
var height=window.innerHeight;
var widthZoneJeu = width-width/4;
var heightZonJeu = height-height/4;
var xJeu = width/2-widthZoneJeu/2;
var yJeu = 0;
var tailleCarreau = widthZoneJeu/6;
var widthCareau = widthZoneJeu/6;
var heightCareau = heightZonJeu/4;
var number=0;
if(widthCareau>heightCareau) number=heightCareau;
else number=widthCareau;


var stage = new Konva.Stage({
    container: 'scene1',   
    width: width,
    height: height	
});


//Gestion de la grille
var carreauxLayer = new Konva.Layer();

var carreauxGroup = new Konva.Group({
	x: xJeu,
	y: yJeu
});


/*function loadImages(source,callback) {

	// get num of sources
	var image = new Image();
    	image.onload = function(){
      	callback(image);
    };
    image.src=source;        
}

var k=1;

for(var i=0; i<6; i++)
{
	for(var j=0; j<5; j++)
	{

      var simpleText = new Konva.Text({
        x: i * widthCareau,
        y: j * heightCareau,
        text: ''+k,
        fontSize: number,
        fontFamily: 'Calibri',
        fill: 'green'
      });

			var carreau = new Konva.Rect({
		      x: i * widthCareau,
		      y: j * heightCareau ,
		      width: widthCareau,
		      height: heightCareau,
		      name: ""+i,		      
		      fill: "white",
		      stroke: 'black',
		      strokeWidth: 4		
			});
			carreauxGroup.add(carreau);				
      carreauxGroup.add(simpleText);
		k++;
	}
}

carreauxLayer.add(carreauxGroup);
stage.add(carreauxLayer);*/


//////Utilisation des images///////////////////////////////////////////////////////

      function loadImages(source,callback) {

        // get num of sources
        var image1 = new Image();
            image1.onload = function(){
              callback(image1);
            };
            image1.src=source;        
      }     

      function draw(images) {
        var width = window.innerWidth;
        var height = window.innerHeight;

        var layer = new Konva.Layer();        


        var mesRect = {};
        var groupRect = new Konva.Group({
          x:xJeu,
          y:yJeu
        })
var k=0;
for(var j=0; j<=2; j++)
{
      for(var i=0; i<=2; i++)
      { 
        mesRect[k] = new Konva.Rect({
          x: i * widthCareau,
          y: j*heightCareau,
          width: widthCareau,
          height:heightCareau,
          //sides: 5,
          //radius: 70,
          fillPatternImage: images[k],
          fillPatternOffset: { x: 0, y: 0 },
          fillPatternRepeat:'no-repeat',
          stroke: 'black',
          strokeWidth: 4
        });

        groupRect.add(mesRect[k]);
        k++;
      }
}     k=0;
        layer.add(groupRect);
        stage.add(layer);
      }
 
 var imgs = [];

 for(var i=1; i<=10; i++){
      loadImages('img/'+i+'.png',function(image) {
        imgs.push(image)
        //draw(images);
      });
}

loadImages('img/play.png',function(image){
  draw(imgs);
});



//Gestion du personnage////////////////////////////////////////////////////////////////////////////////////
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
        x: (xJeu+widthCareau/2)-(widthCareau/8),
        y: (yJeu+heightCareau/2)-(heightCareau/4),
        image: perso,
        width: widthCareau/4,
        height: heightCareau/2,
        shadowOffsetX: 20,
        shadowOffset: 25,
        shadowBlur : 40
      });

 		persolayer.add(play);
 		stage.add(persolayer);

      container.addEventListener('keydown', function(e) {
        if (e.keyCode === gauche) {
                                   	
          play.x(play.x() - widthCareau);
        } 
        else if (e.keyCode === haut) {        	
          play.y(play.y() - heightCareau);
        } 
        else if (e.keyCode === droite) {          
          play.x(play.x() + widthCareau);
        } 
        else if (e.keyCode === bas) {
          play.y(play.y() + heightCareau);
        } 
        else {
          return;
        }
        e.preventDefault();
        persolayer.batchDraw();
      }); 		
    };
    perso.src = 'img/droite.png';

