var width = window.innerWidth;
var height = window.innerHeight;

var testLayer = new Konva.Layer();
var stage = new Konva.Stage({
    container:'container',
    width:width,
    height:height
});

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

        var patternPentagon = new Konva.RegularPolygon({
          x: 220,
          y: stage.height() / 2,
          sides: 5,
          radius: 70,
          fillPatternImage: images,
          //fillPatternOffset: { x: -220, y: 70 },
          stroke: 'black',
          strokeWidth: 4,
          draggable: true
        });


        layer.add(patternPentagon);
        stage.add(layer);
      }
 
      loadImages('img/5.png',function(images) {
        draw(images);
      });

for(var i=1; i<2; i++)
{
loadImages('img/'+i+'.png',function(image){
  var monRec = new Konva.Rect({
   
    width:100,
    height:100,    
    fillPatternImage:image,
    fillPatternRepeat:'no-repeat',    
    fillPatternOffset: { x: -20, y: -2 }
  });    

  testLayer.add(monRec);
  stage.add(testLayer);
});
}  
  
