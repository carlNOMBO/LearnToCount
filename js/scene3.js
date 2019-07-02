var width = window.innerWidth;
var height = window.innerHeight;

var tween = null;
var Layer1 = new Konva.Layer();
var Layer2 = new Konva.Layer();
var Layer3 = new Konva.Layer();
var Layer4 = new Konva.Layer();
var Layer5 = new Konva.Layer();
var Layer6 = new Konva.Layer();
var Layer7 = new Konva.Layer();
var Layer8 = new Konva.Layer();
var Layer9 = new Konva.Layer();
var Layer10 = new Konva.Layer();
var Layer11 = new Konva.Layer();
var Layer12 = new Konva.Layer();
var Layer13 = new Konva.Layer();
var Layer14 = new Konva.Layer();
var Layer15  = new Konva.Layer();



var stagescene3 = new Konva.Stage(
  {
      container: 'scene3',
      width: width,
      height: height
  });


var imagechiffre1 = new Image();
imagechiffre1.onload = function() 
   {
      var imagech1 = new Konva.Image(
      {

          x:8*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagechiffre1,
          width:width/16 ,
          height:height/10,
          draggable:true
          

      }); 
      Layer1.add(imagech1);
      stagescene3.add(Layer1);
  };
  imagechiffre1.src='img/11s.png';


var imagechiffre2 = new Image();
imagechiffre2.onload = function() 
   {
      var imagech2 = new Konva.Image(
      {
          
          x:2*((width/2-width/3)/2)+1/2*((width/2-width/3)/2),
          y:height/2+height/3,
          image: imagechiffre2,
          width:width/18 ,
          height:height/10,
      }); 
      Layer2.add(imagech2);
      stagescene3.add(Layer2);
  };
  imagechiffre2.src='img/21.png';


  var imagechiffre3 = new Image();
imagechiffre3.onload = function() 
   {
      var imagech3 = new Konva.Image(
      {
          
           x:(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagechiffre3,
          width:width/16 ,
          height:height/10,
          draggable:true
      }); 
      Layer3.add(imagech3);
      stagescene3.add(Layer3);
  };
  imagechiffre3.src='img/31.png';

var imagechiffre4 = new Image();
imagechiffre4.onload = function() 
   {
      var imagech4 = new Konva.Image(
      {
    
          


           x:10*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagechiffre4,
          width:width/16 ,
          height:height/10,
          draggable:true
      }); 
      Layer4.add(imagech4);
      stagescene3.add(Layer4);
  };
  imagechiffre4.src='img/41.png';

  var imagechiffre5 = new Image();
imagechiffre5.onload = function() 
   {
      var imagech5 = new Konva.Image(
      {
          

          

          x:3*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagechiffre5,
          width:width/16 ,
          height:height/10,
          draggable:true
      }); 
      Layer5.add(imagech5);
      stagescene3.add(Layer5);
  };
  imagechiffre5.src='img/51.png';

var imagechiffre6 = new Image();
imagechiffre6.onload = function() 
   {
      var imagech6 = new Konva.Image(
      {
          

          x:((width/2-width/3)/2)+1/2*((width/2-width/3)/2),
          y:height/2+height/3,
          image: imagechiffre6,
          width:width/16 ,
          height:height/10,
          draggable:true
      }); 
      Layer6.add(imagech6);
      stagescene3.add(Layer6);
  };
  imagechiffre6.src='img/6AVECDESYEUX.png';


var imagechiffre7 = new Image();
imagechiffre7.onload = function() 
   {
      var imagech7 = new Konva.Image(
      {
          x:9*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagechiffre7,
          width:width/16 ,
          height:height/10,
          draggable:true
      }); 
      Layer7.add(imagech7);
      stagescene3.add(Layer7);
  };
  imagechiffre7.src='img/7AVECDESYEUX.png';

  var imagechiffre8 = new Image();
imagechiffre8.onload = function() 
   {
      var imagech8 = new Konva.Image(
      {
         

          x:8*(width/2-width/3)/2+(1/2*(width/2-width/3)/2),
          y:height/2+height/3,
          image: imagechiffre8,
          width:width/16 ,
          height:height/10,
          draggable:true
      }); 
      Layer8.add(imagech8);
      stagescene3.add(Layer8);
  };
  imagechiffre8.src='img/8AVECDESYEUX.png';



var imagechiffre9 = new Image();
imagechiffre9.onload = function() 
   {
      var imagech9 = new Konva.Image(
      {
          

          x:2*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagechiffre9,
          width:width/16 ,
          height:height/10,
          draggable:true
      }); 
      Layer9.add(imagech9);
      stagescene3.add(Layer9);
  };
  imagechiffre9.src='img/9AVECDESYEUX.png';



var imagechiffre10 = new Image();
imagechiffre10.onload = function() 
   {
      var imagech10 = new Konva.Image(
      {
          x:9*(width/2-width/3)/2+(1/2*(width/2-width/3)/2),
          y:height/2+height/3,
          image: imagechiffre10,
          width:width/16,
          height:height/10,
          draggable:true
      });  
      Layer10.add(imagech10);
      stagescene3.add(Layer10);
  };
  imagechiffre10.src='img/10AVECDESYEUX.png';
