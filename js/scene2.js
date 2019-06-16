var width = window.innerWidth;
var height = window.innerHeight;

var tween = null;
var imgLayer = new Konva.Layer();
var dragLayer = new Konva.Layer();


var stagescene2 = new Konva.Stage(
  {
      container: 'scene2',
      width: width,
      height: height
  });

function addimg(imgLayer, stagescene2) {
var imagebonbon = new Image();
imagebonbon.onload = function() 
   {
      var img = new Konva.Image(
      {
          x:(width/2-width/3)/2,
          y:height/2+height/8,
          image: imagebonbon,
          width:width/10 ,
          height:height/10
      }); 
      imgLayer.add(img);
      stagescene2.add(imgLayer);
  };
  imagebonbon.src='img/YELLOWCANDY.png';
}


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


