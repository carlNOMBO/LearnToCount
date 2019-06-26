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

var rowNumber=6;
var columnNumber=5;


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


//////Utilisation des images///////////////////////////////////////////////////////


//load images and use the callback to execute the draw function
function loadImages(source,callback) {

  // get num of sources
  var image1 = new Image();
      image1.onload = function(){
        callback(image1);
      };
      image1.src=source;        
}     



//Draw the grid within rect shapes
function draw(images) 
{
  var width = window.innerWidth;
  var height = window.innerHeight;

  var layer = new Konva.Layer();        

  var mesRect = {};
  var groupRect = new Konva.Group({
    x:xJeu,
    y:yJeu
  })

  var k=0;
  for(var j=0; j<columnNumber; j++)
  {
      for(var i=0; i<rowNumber; i++)
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

 for(var i=1; i<=30; i++){
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
        var deplacement;

        if (e.keyCode === gauche) {
          
          deplacement=play.x() - widthCareau;                                    
          if(deplacement>xJeu) 
            play.x(deplacement);          
        } 
        else if (e.keyCode === haut) {  

          deplacement = play.y() - heightCareau;       
          if(deplacement>yJeu)
            play.y(deplacement);
        } 
        else if (e.keyCode === droite) {   

          deplacement = play.x() + widthCareau;    
          if(deplacement<xJeu+widthCareau*rowNumber)
            play.x(deplacement);
        } 
        else if (e.keyCode === bas) {

          deplacement = play.y() + heightCareau;
          if(deplacement<yJeu+heightCareau*columnNumber)
            play.y(deplacement);
        } 
        else {
          return;
        }
        e.preventDefault();
        persolayer.batchDraw();
      });     
    };
    perso.src = 'img/droite.png';

