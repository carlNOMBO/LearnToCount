var width = window.innerWidth;
var height = window.innerHeight;

var tween = null;

var imageL00 = new Konva.Layer();
var imageL01 = new Konva.Layer();
var imageL0 = new Konva.Layer();
var imageL1 = new Konva.Layer();
var imageL2 = new Konva.Layer();
var imageL3 = new Konva.Layer();
var imageL4 = new Konva.Layer();
var imageL5 = new Konva.Layer();
var imageL6 = new Konva.Layer();
var imageL7 = new Konva.Layer();
var imageL8 = new Konva.Layer();
var imageL9 = new Konva.Layer();
var imageL10 = new Konva.Layer();
var imageL11 = new Konva.Layer();
var imageL12 = new Konva.Layer();
var imageL13 = new Konva.Layer();
var imageL14 = new Konva.Layer();
var imageL15 = new Konva.Layer();
var imageL16 = new Konva.Layer();
var imageL17 = new Konva.Layer();
var imageL18 = new Konva.Layer();
var imageL19 = new Konva.Layer();


var imageL30 = new Konva.Layer();
var imageL31 = new Konva.Layer();
var imageL32 = new Konva.Layer();
var layer = new Konva.Layer();

var bg=3;
var bo=4;

var stagescene21 = new Konva.Stage(
  {
      container: 'scene21',
      width: width,
      height: height
  });

 

var imagerefresh1 = new Image();
imagerefresh1.onload = function() 
   {
      var imageref1 = new Konva.Image(
      {
          x:width/2+width/2.6,
          y:height/20,
          image: imagerefresh1,
          width:width/12 ,
          height:height/12,
          
       }); 
      imageL0.add(imageref1);
      stagescene21.add(imageL0);
  };
  imagerefresh1.src='img/refresh-arrow.svg';

var imagebk1 = new Image();
imagebk1.onload = function() 
   {
      var imagebck1 = new Konva.Image(
      {
          x:0.3*stagescene21.width() / 8,
          y:height/20,
          image: imagebk1,
          width:width/12 ,
          height:height/12,
          stroke:'white',
      strokeWidth:4,
      strokeEnabled:false
    });
    
          console.log(imagebck1.strokeEnabled());
    //Evenements de la première image
    imagebck1.on('mouseover',function(){
      imagebck1.strokeEnabled(true);
      console.log(imagebck1.strokeEnabled());
    }); 

    imagebck1.on('mouseout',function(){
      imagebck1.strokeEnabled(false);
      console.log(imagebck1.strokeEnabled());
    }); 

    imagebck1.on('click',function(){
      $("#menu").hide();
      $("#container").hide(); 
      $("#boutonPlay").hide();
      $("#scene1").hide();
      $("#scene2").show();
      $("#scene3").hide();
      $("#scene4").hide();
      $("#scene5").hide();   
       $("#scene21").hide();   
    });

      
      imageL00.add(imagebck1);
      stagescene21.add(imageL00);
  };
  imagebk1.src='img/back.svg';


var imagesub = new Image();
imagesub.onload = function() 
   {
      var imagesb = new Konva.Image(
      {
          x:width / 2-55,
          y:height/2+height/4,
          image: imagesub,
          width:width/12 ,
          height:height/12,
          stroke:'white',
      strokeWidth:4,
      strokeEnabled:false
    });
    
          console.log(imagesb.strokeEnabled());
    imagesb.on('mouseover',function(){
      imagesb.strokeEnabled(true);
      console.log(imagesb.strokeEnabled());
    }); 

    imagesb.on('mouseout',function(){
      imagesb.strokeEnabled(false);
      console.log(imagesb.strokeEnabled());
    }); 

    imagesb.on('click',function(){
      if(bg==0 && bo==0)
{
      var result = new Konva.Text({
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

    imageL01.add(result);
    stagescene21.add(imageL01);
}
else
{
  var result = new Konva.Text({
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

    imageL01.add(result);
    stagescene21.add(imageL01);
}  
    });

      
      imageL32.add(imagesb);
      stagescene21.add(imageL32);
  };
  imagesub.src='img/green_button_png_607042.png';
var imagebonbon14 = new Image();
imagebonbon14.onload = function() 
   {
      var image14 = new Konva.Image(
      {
          x:(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon14,
          width:width/10 ,
          height:height/10,
          draggable:true
          });
      image14.on('dragend', function() {
        bo--;
      }); 
      imageL1.add(image14);
      stagescene21.add(imageL1);
  };
  imagebonbon14.src='img/ORANGE_CANDY.png';


var imagebonbon15 = new Image();
imagebonbon15.onload = function() 
   {
      var image15 = new Konva.Image(
      {
          x:2*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon15,
          width:width/10 ,
          height:height/10,
          draggable:true
      });
      image15.on('dragend', function() {
        bo--;
      });  
      imageL2.add(image15);
      stagescene21.add(imageL2);
  };
  imagebonbon15.src='img/ORANGE_CANDY.png';


  var imagebonbon16 = new Image();
imagebonbon16.onload = function() 
   {
      var image16 = new Konva.Image(
      {
          x:3*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon16,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      image16.on('dragend', function() {
        bo--;
      }); 
      imageL3.add(image16);
      stagescene21.add(imageL3);
  };
  imagebonbon16.src='img/ORANGE_CANDY.png';

var imagebonbon17 = new Image();
imagebonbon17.onload = function() 
   {
      var image17 = new Konva.Image(
      {
          x:((width/2-width/3)/2)+1/2*((width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon17,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      image17.on('dragend', function() {
        bo--;
      });
      imageL4.add(image17);
      stagescene21.add(imageL4);
  };
  imagebonbon17.src='img/ORANGE_CANDY.png';

  var imagebonbon18 = new Image();
imagebonbon18.onload = function() 
   {
      var image18 = new Konva.Image(
      {
          x:2*((width/2-width/3)/2)+1/2*((width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon18,
          width:width/10 ,
          height:height/10,
          draggable:true
      });
      image18.on('dragend', function() {
        bo--;
      });
      imageL5.add(image18);
      stagescene21.add(imageL5);
  };
  imagebonbon18.src='img/ORANGE_CANDY.png';

var imagebonbon19 = new Image();
imagebonbon19.onload = function() 
   {
      var image19 = new Konva.Image(
      {
          x:8*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon19,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      image19.on('dragend', function() {
        bg--;
      });
      imageL6.add(image19);
      stagescene21.add(imageL6);
  };
  imagebonbon19.src='img/GREENCANDY.png';


var imagebonbon20 = new Image();
imagebonbon20.onload = function() 
   {
      var image20 = new Konva.Image(
      {
          x:9*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon20,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      image20.on('dragend', function() {
        bg--;
      });
      imageL6.add(image20);
      stagescene21.add(imageL6);
  };
  imagebonbon20.src='img/GREENCANDY.png';


  var imagebonbon21 = new Image();
imagebonbon21.onload = function() 
   {
      var image21 = new Konva.Image(
      {
          x:10*(width/2-width/3)/2,
          y:height/2+height/4,
          image: imagebonbon21,
          width:width/10 ,
          height:height/10,
          draggable:true
      }); 
      image21.on('dragend', function() {
        bg--;
      });
      imageL7.add(image21);
      stagescene21.add(imageL7);
  };
  imagebonbon21.src='img/GREENCANDY.png';



var imagebonbon22 = new Image();
imagebonbon22.onload = function() 
   {
      var image22 = new Konva.Image(
      {
          x:8*(width/2-width/3)/2+(1/2*(width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon22,
          width:width/10 ,
          height:height/10,
          draggable:true
          }); 
      image22.on('dragend', function() {
        bg--;
      });  
      imageL8.add(image22);
      stagescene21.add(imageL8);
  };
  imagebonbon22.src='img/GREENCANDY.png';


var imagebonbon23 = new Image();
imagebonbon23.onload = function() 
   {
      var image23 = new Konva.Image(
      {
          x:9*(width/2-width/3)/2+(1/2*(width/2-width/3)/2),
          y:height/2+height/3,
          image: imagebonbon23,
          width:width/10,
          height:height/10,
          draggable:true
      });        
      image23.on('dragend', function() {
        bg--;
      });    
      imageL9.add(image23);
      stagescene21.add(imageL9);
  };
  imagebonbon23.src='img/GREENCANDY.png';

//BONBONS EN OPERATION

var imagebonbon24 = new Image();
imagebonbon24.onload = function() 
   {
      var image24 = new Konva.Image(
      {
          x:0.7*stagescene21.width() / 9,
          y:stagescene21.height() / 2.8,
          image: imagebonbon24,
          width:width/10,
          height:height/10,
          draggable:true
      });  
      imageL10.add(image24);
      stagescene21.add(imageL10);
  };
  imagebonbon24.src='img/GREENCANDY.png';

var imagebonbon25 = new Image();
imagebonbon25.onload = function() 
   {
      var image25 = new Konva.Image(
      {
          x:1.5*stagescene21.width() / 9,
          y:stagescene21.height() / 2.5,
          image: imagebonbon25,
          width:width/10,
          height:height/10,
          
      });  
      imageL11.add(image25);
      stagescene21.add(imageL11);
  };
  imagebonbon25.src='img/GREENCANDY.png';

  var imagebonbon26 = new Image();
imagebonbon26.onload = function() 
   {
      var image26 = new Konva.Image(
      {
          x:3*stagescene21.width() / 8,
          y:stagescene21.height() / 2,
          image: imagebonbon26,
          width:width/9,
          height:height/8.7,
          
      });  
      imageL12.add(image26);
      stagescene21.add(imageL12);
  };
  imagebonbon26.src='img/ORANGE_CANDY.png';

var imagebonbon27 = new Image();
imagebonbon27.onload = function() 
   {
      var image27 = new Konva.Image(
      {
          x:4*stagescene21.width() / 8,
          y:stagescene21.height() / 2.5,
          image: imagebonbon27,
          width:width/9,
          height:height/8.7,
          
      });  
      imageL13.add(image27);
      stagescene21.add(imageL13);
  };
  imagebonbon27.src='img/ORANGE_CANDY.png';


var imagebonbon28 = new Image();
imagebonbon28.onload = function() 
   {
      var image28 = new Konva.Image(
      {
          x:3*stagescene21.width() / 8,
          y:stagescene21.height() / 3,
          image: imagebonbon28,
          width:width/9,
          height:height/8.7,
          
      });  
      imageL14.add(image28);
      stagescene21.add(imageL14);
  };
  imagebonbon28.src='img/ORANGE_CANDY.png';
var imagebonbon29 = new Image();
imagebonbon29.onload = function() 
   {
      var image29 = new Konva.Image(
      {
         x:4*stagescene21.width() / 8,
          y:stagescene21.height() / 4,
          image: imagebonbon29,
          width:width/9,
          height:height/8.7,
          
      });  
      imageL15.add(image29);
      stagescene21.add(imageL15);
  };
  imagebonbon29.src='img/ORANGE_CANDY.png';

  var imagebonbon30 = new Image();
imagebonbon30.onload = function() 
   {
      var image30 = new Konva.Image(
      {
          x:0.7*stagescene21.width() / 9,
          y:stagescene21.height() / 2,
          image: imagebonbon30,
          width:width/10,
          height:height/10,
          
      });  
      imageL16.add(image30);
      stagescene21.add(imageL16);
  };
  imagebonbon30.src='img/GREENCANDY.png';

var imageplus30 = new Image();
imageplus30.onload = function() 
   {
      var plus30 = new Konva.Image(
      {
          x:2.5*stagescene21.width() / 9,
          y:stagescene21.height() / 2.5,
          image: imageplus30,
          width:width/10 ,
          height:height/10,
          
      });  
      imageL30.add(plus30);
      stagescene21.add(imageL30);
  };
  imageplus30.src='img/add.png';

  
var imageegal31 = new Image();
imageegal31.onload = function() 
   {
      var egal31 = new Konva.Image(
      {
          x:5*stagescene21.width() / 8,
          y:stagescene21.height() / 2.5,
          image: imageegal31,
          width:width/10 ,
          height:height/10,
        
      });  
      imageL31.add(egal31);
      stagescene21.add(imageL31);
  };
  imageegal31.src='img/EGAL.png';




