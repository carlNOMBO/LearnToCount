var width = window.innerWidth;
var height = window.innerHeight;


var stage = new Konva.Stage({
		container:'container',
		width:width,
		height:height
});

 var imgLayer = new Konva.Layer();
var imgGroup= new Konva.Group({
	x:10,
	y:10
});

for(var i=1; i<4; i++)
{
	var carreau = new Image();
			carreau.onload = function() {
				var nombre = new Konva.Image({
					x:  i*100,
					//y:  300 ,
					image: carreau,
					width: 100,
					height: 100,
					stroke: 'black',
					strokeWidth: 4,
					draggable:true
				});
			imgGroup.add(nombre);
			//if(i>=4) 
			{
				imgLayer.add(imgGroup);
				 
			}                           
			};
	carreau.src = 'img/'+i+'.png';
}
stage.add(imgLayer);


      function loadImages1(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for (var src in sources) {
          numImages++;
        }
        for (var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if (++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }

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
					x:100,
					y:100
				})
var k=0;
for(var j=0; j<=2; j++)
{
			for(var i=0; i<=2; i++)
			{	
				mesRect[k] = new Konva.Rect({
					x: i*100,
					y: j*100,
					width: 100,
					height:100,
					//sides: 5,
					//radius: 70,
					fillPatternImage: images[k],
					fillPatternOffset: { x: 0, y: 0 },
					fillPatternRepeat:'no-repeat',
					stroke: 'black',
					strokeWidth: 4,
					draggable: true
				});

				groupRect.add(mesRect[k]);
				k++;
			}
}			k=0;
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

      /*var sources = {
        darthVader: 'img/5.png',
        yoda: 'img/5.png'
      };*/

      /*loadImages1(sources, function(images) {
        draw(images);
      });*/




/*var testLayer = new Konva.Layer();

testLayer.size({
	width:500,
	height:500
})

var group = new Konva.Group({
	x:10,
	y:10
});

/*for(var i=1; i<5; i++)
{
loadImages('img/'+i+'.png',function(image){
	var recLayer = new Konva.Layer();
	var monRec = new Konva.Rect({
		x:50*i,
		y:0,
		width:100,
		height:100,    
		fillPatternImage:image,
		fillPatternRepeat:'no-repeat',    
		fillPatternOffset: { x: -20, y: -2 },
		draggable:true
	});    

	//group.add(monRec);
	recLayer.add(monRec);
	stage.add(recLayer);
});
}*/
/*testLayer.add(group);
stage.add(testLayer); 
testLayer.draw(); */
	
