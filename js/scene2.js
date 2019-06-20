var width = window.innerWidth;
var height = window.innerHeight;

var tween = null;
var imageLayer1 = new Konva.Layer();
var imageLayer2 = new Konva.Layer();
var imageLayer3 = new Konva.Layer();
var imageLayer4 = new Konva.Layer();
var imageLayer5 = new Konva.Layer();
var imageLayer6 = new Konva.Layer();
var imageLayer7 = new Konva.Layer();
var imageLayer8 = new Konva.Layer();
var imageLayer9 = new Konva.Layer();
var imageLayer10 = new Konva.Layer();


var stagescene2 = new Konva.Stage(
  {
      container: 'scene2',
      width: width,
      height: height
  });


var imagebonbon1 = new Image();
imagebonbon1.onload = function() 
   {
      var image1 = new Konva.Image(
      {
          x:(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon1,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer1.add(image1);
      stagescene2.add(imageLayer1);
  };
  imagebonbon1.src='img/ORANGE_CANDY.png';


var imagebonbon2 = new Image();
imagebonbon2.onload = function() 
   {
      var image2 = new Konva.Image(
      {
          x:2*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon2,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer2.add(image2);
      stagescene2.add(imageLayer2);
  };
  imagebonbon2.src='img/ORANGE_CANDY.png';


  var imagebonbon3 = new Image();
imagebonbon3.onload = function() 
   {
      var image3 = new Konva.Image(
      {
          x:3*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon3,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer3.add(image3);
      stagescene2.add(imageLayer3);
  };
  imagebonbon3.src='img/ORANGE_CANDY.png';

var imagebonbon7 = new Image();
imagebonbon7.onload = function() 
   {
      var image7 = new Konva.Image(
      {
          x:((width/2-width/3)/2)+1/2*((width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon7,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer7.add(image7);
      stagescene2.add(imageLayer7);
  };
  imagebonbon7.src='img/ORANGE_CANDY.png';

  var imagebonbon8 = new Image();
imagebonbon8.onload = function() 
   {
      var image8 = new Konva.Image(
      {
          x:2*((width/2-width/3)/2)+1/2*((width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon8,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer8.add(image8);
      stagescene2.add(imageLayer8);
  };
  imagebonbon8.src='img/ORANGE_CANDY.png';

var imagebonbon4 = new Image();
imagebonbon4.onload = function() 
   {
      var image4 = new Konva.Image(
      {
          x:8*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon4,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer4.add(image4);
      stagescene2.add(imageLayer4);
  };
  imagebonbon4.src='img/GREENCANDY.png';


var imagebonbon5 = new Image();
imagebonbon5.onload = function() 
   {
      var image5 = new Konva.Image(
      {
          x:9*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon5,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer5.add(image5);
      stagescene2.add(imageLayer5);
  };
  imagebonbon5.src='img/GREENCANDY.png';

  var imagebonbon6 = new Image();
imagebonbon6.onload = function() 
   {
      var image6 = new Konva.Image(
      {
          x:10*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon6,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer6.add(image6);
      stagescene2.add(imageLayer6);
  };
  imagebonbon6.src='img/GREENCANDY.png';



var imagebonbon9 = new Image();
imagebonbon9.onload = function() 
   {
      var image9 = new Konva.Image(
      {
          x:8*(width/2-width/3)/2+(1/2*(width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon9,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer9.add(image9);
      stagescene2.add(imageLayer9);
  };
  imagebonbon9.src='img/GREENCANDY.png';



var imagebonbon10 = new Image();
imagebonbon10.onload = function() 
   {
      var image10 = new Konva.Image(
      {
          x:9*(width/2-width/3)/2+(1/2*(width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon10,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      imageLayer10.add(image10);
      stagescene2.add(imageLayer10);
  };
  imagebonbon10.src='img/GREENCANDY.png';


  
/*
function addimg(imgLayer, stagescene2) {}
var dragLayer = new Konva.Layer();

stagescene2.add(imgLayer, dragLayer);

stagescene2.on('dragstart', function(evt) 
  {

      var shape = evt.target;
      // moving to another layer will improve dragging performance
      shape.moveTo(dragLayer);
      stagescene2.draw();
      
      if (tween)  {
                    tween.pause();
                  }
      shape.setAttrs({
            shadowOffset: {
                              x: 15,
                              y: 15
                          },
                          scale:  {
                                      x: shape.getAttr('startScale') * 1.2,
                                      y: shape.getAttr('startScale') * 1.2
                                  }
                      });
  });

stagescene2.on('dragend', function(evt)
  {
      var shape = evt.target;
      shape.moveTo(imgLayer);
      stagescene2.draw();
      shape.to({
                    duration: 0.5,
                    easing: Konva.Easings.ElasticEaseOut,
                    scaleX: shape.getAttr('startScale'),
                    scaleY: shape.getAttr('startScale'),
                    shadowOffsetX: 5,
                    shadowOffsetY: 5
              });
  });

var width = window.innerWidth;
var height = window.innerHeight;

var tween = null;

function addStar(layer, stage) {
  var scale = Math.random();

  var star = new Konva.Star({
    x: Math.random() * stage.getWidth(),
    y: Math.random() * stage.getHeight(),
    numPoints: 5,
    innerRadius: 30,
    outerRadius: 50,
    fill: '#89b717',
    opacity: 0.8,
    draggable: true,
    scale: {
      x : scale,
      y : scale
    },
    rotation: Math.random() * 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {
      x : 5,
      y : 5
    },
    shadowOpacity: 0.6,
    // custom attribute
    startScale: scale
  });

  layer.add(star);
}
var stage = new Konva.Stage({
  container: 'scene2',
  width: width,
  height: height
});

var layer = new Konva.Layer();
var dragLayer = new Konva.Layer();

for(var n = 0; n < 30; n++) {
  addStar(layer, stage);
}

stage.add(layer, dragLayer);

stage.on('dragstart', function(evt) {
  var shape = evt.target;
  // moving to another layer will improve dragging performance
  shape.moveTo(dragLayer);
  stage.draw();
  
  if (tween) {
    tween.pause();
  }
  shape.setAttrs({
    shadowOffset: {
      x: 15,
      y: 15
    },
    scale: {
      x: shape.getAttr('startScale') * 1.2,
      y: shape.getAttr('startScale') * 1.2
    }
  });
});

stage.on('dragend', function(evt) {
  var shape = evt.target;
  shape.moveTo(layer);
  stage.draw();
  shape.to({
    duration: 0.5,
    easing: Konva.Easings.ElasticEaseOut,
    scaleX: shape.getAttr('startScale'),
    scaleY: shape.getAttr('startScale'),
    shadowOffsetX: 5,
    shadowOffsetY: 5
  });
});

*/

