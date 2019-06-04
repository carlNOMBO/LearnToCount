window.addEventListener("load",function function_name() {

	var width=window.innerWidth;
	var height=window.innerHeight;

	console.log("window loaded");
	// first we need to create a stage
	var stage = new Konva.Stage({
	    container: 'container',   // id of container <div>
	    width: width,
	    height: height,
	    fill: 'yellow'
	});


	    var simpleText = new Konva.Text({
        x: width/2-width/10,
        y: height-height/4,
        text: 'Jouer',
        fontSize: 30,
        fontFamily: 'comic',
        fill: 'white'
      });

	// then create layer
	var layer = new Konva.Layer();
	  
	 var rect = new Konva.Rect({
	    x: width/2-width/10,
	    y: height-height/4,

	    width: width/5,
	    height: 50,
	    fill: '#4233c6',
	    //stroke: 'black',
	    strokeWidth: 0,

	    
	    innerRadius: 30,
	    outerRadius: 50,
	    cornerRadius: 10,
	    opacity: 0.8,	    	 
	    
	    shadowColor: 'black',
	    shadowBlur: 10,
	    shadowOffset: {
	      x : 10,
	      y : 10
	    },
	    shadowOpacity: 0.7,
	    
	        
	  });
	 
	  // add the shape to the layer
	  layer.add(rect);
	  layer.add(simpleText);
	  

	  // add the layer to the stage
	  stage.add(layer);


});

