var width = window.innerWidth;
var height = window.innerHeight;

var tween = null;
var imageLayer00 = new Konva.Layer();
var imageLayer0 = new Konva.Layer();
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
var imageLayer11 = new Konva.Layer();
var imageLayer12 = new Konva.Layer();
var imageLayer13 = new Konva.Layer();
var imageLayer14 = new Konva.Layer();
var imageLayer15 = new Konva.Layer();
var imagell0= new Konva.Layer();
var imagell1= new Konva.Layer();

var bg0=2;
var bo0=1;

var stagescene2 = new Konva.Stage(
  {
      container: 'scene2',
      width: width,
      height: height
  });
var imagerefresh = new Image();
imagerefresh.onload = function() 
   {
      var imageref = new Konva.Image(
      {
          x:width/2+width/2.6,
          y:height/20,
          image: imagerefresh,
          width:width/12 ,
          height:height/12,
          stroke:'white',
      strokeWidth:4,
      strokeEnabled:false
    });
    
          console.log(imageref.strokeEnabled());
    //Evenements de la première image
    imageref.on('mouseover',function(){
      imageref.strokeEnabled(true);
      console.log(imageref.strokeEnabled());
    }); 

    imageref.on('mouseout',function(){
      imageref.strokeEnabled(false);
      console.log(imageref.strokeEnabled());
    }); 

    imageref.on('click',function(){
      $("#menu").hide();
      $("#container").hide(); 
      $("#boutonPlay").hide();
      $("#scene1").hide();
      $("#scene2").hide();
      $("#scene3").hide();
      $("#scene4").hide();
      $("#scene5").hide();   
       $("#scene21").show();   
    });

      
      imageLayer0.add(imageref);
      stagescene2.add(imageLayer0);
  };
  imagerefresh.src='img/refresh-arrow.svg';


var imageback = new Image();
imageback.onload = function() 
   {
      var imagebck = new Konva.Image(
      {
          x:0.3*stagescene2.width() / 8,
          y:height/20,
          image: imageback,
          width:width/12 ,
          height:height/12,
          stroke:'white',
      strokeWidth:4,
      strokeEnabled:false
    });  
          console.log(imagebck.strokeEnabled());
    imagebck.on('mouseover',function(){
      imagebck.strokeEnabled(true);
      console.log(imagebck.strokeEnabled());
    }); 

    imagebck.on('mouseout',function(){
      imagebck.strokeEnabled(false);
      console.log(imagebck.strokeEnabled());
    }); 

    imagebck.on('click',function(){
      $("#menu").show();
      $("#container").hide(); 
      $("#boutonPlay").hide();
      $("#scene1").hide();
      $("#scene2").hide();
      $("#scene3").hide();
      $("#scene4").hide();
      $("#scene5").hide();   
       $("#scene21").hide();   
    });
      imageLayer00.add(imagebck);
      stagescene2.add(imageLayer00);
  };
  imageback.src='img/back.svg';

var imagesub1 = new Image();
imagesub1.onload = function() 
   {
      var imagesb1 = new Konva.Image(
      {
          x:width / 2-55,
          y:height/2+height/4,
          image: imagesub1,
          width:width/12 ,
          height:height/12,
          stroke:'white',
      strokeWidth:4,
      strokeEnabled:false
    });
    console.log(imagesb1.strokeEnabled());
    imagesb1.on('mouseover',function(){
    imagesb1.strokeEnabled(true);
    console.log(imagesb1.strokeEnabled());
    }); 

    imagesb1.on('mouseout',function(){
    imagesb1.strokeEnabled(false);
    console.log(imagesb1.strokeEnabled());
    }); 

    imagesb1.on('click',function(){
      if(bg0==0 && bo0==0)
{
      var result1 = new Konva.Text({
        x: width/3-width/9,
        y: height/10,
        text: 'Bravoo !',
        fontSize: 60,
        fontFamily: 'comic',
        fill: '#532712',
        shadowOffsetX: 20,
        shadowOffset: 25, 
        shadowBlur : 40       
      });

    imagell0.add(result1);
    stagescene2.add(imagell0);
}
else
{
  var result1 = new Konva.Text({
        x: width/3-width/9,
        y: height/10,
        text: 'Oooh Non !',
        fontSize: 60,
        fontFamily: 'comic',
        fill: '#532712',
        shadowOffsetX: 20,
        shadowOffset: 25, 
        shadowBlur : 40       
      });

    imagell0.add(result1);
    stagescene2.add(imagell0);
}  
    });

      
      imagell1.add(imagesb1);
      stagescene2.add(imagell1);
  };
  imagesub1.src='img/green_button_png_607042.png';

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
      image1.on('dragend', function() {
        bo0--;
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
      image2.on('dragend', function() {
        bo0--;  }); 
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
      image3.on('dragend', function() {
        bo0--; }); 
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
      image7.on('dragend', function() {
        bo0--;  }); 
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
      image8.on('dragend', function() {
        bo0--; }); 
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
      image4.on('dragend', function() {
        bg0--; }); 
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
      image5.on('dragend', function() {
        bg0--; }); 
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
      image6.on('dragend', function() {
        bg0--; }); 
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
      image9.on('dragend', function() {
        bg0--;}); 
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
          width:width/10,
          height:height/10,
          draggable:true
      });  
      image10.on('dragend', function() {
        bg0--;}); 
      imageLayer10.add(image10);
      stagescene2.add(imageLayer10);
  };
  imagebonbon10.src='img/GREENCANDY.png';

//bonbon en operation
var imagebonbon11 = new Image();
imagebonbon11.onload = function() 
   {
      var image11 = new Konva.Image(
      {
          x:0.5*stagescene2.width() / 9,
          y:stagescene2.height() / 2.2,
          image: imagebonbon11,
          width:width/10,
          height:height/10,
          
      });  
      imageLayer11.add(image11);
      stagescene2.add(imageLayer11);
  };
  imagebonbon11.src='img/GREENCANDY.png';

var imagebonbon12 = new Image();
imagebonbon12.onload = function() 
   {
      var image12 = new Konva.Image(
      {
          x:1.6*stagescene2.width() / 9,
          y:stagescene2.height() / 3,
          image: imagebonbon12,
          width:width/10,
          height:height/10,
          
      });  
      imageLayer12.add(image12);
      stagescene2.add(imageLayer12);
  };
  imagebonbon12.src='img/GREENCANDY.png';

  var imagebonbon13 = new Image();
imagebonbon13.onload = function() 
   {
      var image13 = new Konva.Image(
      {
          x:3.7*stagescene2.width() / 8,
          y:stagescene2.height() / 2.5,
          image: imagebonbon13,
          width:width/9,
          height:height/8.7,
          
      });  
      imageLayer13.add(image13);
      stagescene2.add(imageLayer13);
  };
  imagebonbon13.src='img/ORANGE_CANDY.png';



  var layer2= new Konva.Layer();
var imageplus = new Image();
imageplus.onload = function() 
   {
      var plus = new Konva.Image(
      {
          x:2.5*stagescene2.width() / 9,
          y:stagescene2.height() / 2.5,
          image: imageplus,
          width:width/10 ,
          height:height/10,
          
      });  
      layer2.add(plus);
      stagescene2.add(layer2);
  };
  imageplus.src='img/add.png';

  var layer3= new Konva.Layer();
var imageegal = new Image();
imageegal.onload = function() 
   {
      var egal = new Konva.Image(
      {
          x:5*stagescene2.width() / 8,
          y:stagescene2.height() / 2.5,
          image: imageegal,
          width:width/10 ,
          height:height/10,
        
      });  
      layer3.add(egal);
      stagescene2.add(layer3);
  };
  imageegal.src='img/EGAL.png';

