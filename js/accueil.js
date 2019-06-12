      function writeMessage(message) {
        text.text(message);
        layer.draw();
      }

      var stage = new Konva.Stage({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight
      });

      var layer = new Konva.Layer();

      var triangle = new Konva.RegularPolygon({
        x: 80,
        y: 120,
        sides: 3,
        radius: 80,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        strokeEnabled:false
      });

      var text = new Konva.Text({
        x: 10,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '',
        fill: 'black'
      });

      triangle.on('mouseover',function(){
        triangle.strokeEnabled(true);
      }); 

      triangle.on('mouseout', function() {        
        triangle.strokeEnabled(false);
        writeMessage('Mouseout triangle');
      });

      triangle.on('mousemove', function() {
        var mousePos = stage.getPointerPosition();
        var x = mousePos.x - 190;
        var y = mousePos.y - 40;
        writeMessage('x: ' + x + ', y: ' + y);
      });

      var circle = new Konva.Circle({
        x: 230,
        y: 100,
        radius: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      });

      circle.on('mouseover', function() {
        writeMessage('Mouseover circle');
      });
      circle.on('mouseout', function() {
        writeMessage('Mouseout circle');
      });
      circle.on('mousedown', function() {
        writeMessage('Mousedown circle');
      });
      circle.on('mouseup', function() {
        writeMessage('Mouseup circle');
      });



    var wayImg = new Image();
    wayImg.onload = function() {
    var way = new Konva.Image({
      x:600,
      y:100,
      image: wayImg,
      width:100,
      height:100,
      stroke:'white',
      strokeWidth:10,
      strokeEnabled:false
    });
    
    //Evenements de la première image
    way.on('mouseover',function(){
      way.strokeEnabled(true);
    }); 

    way.on('mouseout',function(){
      way.strokeEnabled(false);
    }); 

    //Ajout dans la scene
    layer.add(way);       
  };
  wayImg.src='img/scene1.png';

      layer.add(triangle);
      layer.add(circle);
      layer.add(text);

      // add the layer to the stage
      stage.add(layer);



      var rect = new Konva.Rect({
        x: (width/2-width/3)/2,
        y: height/4,
        width: width/4,
        height: height/4,
        fillPatternImage: wayImg,
        //fillPatternOffset: { x: -220, y: 70 },
    stroke:'white',
    strokeWidth:4,
    strokeEnabled:false
      });

  wayLayer.add(rect);
  stageMenu.add(wayLayer);
/*      function writeMessage(message) {
        text.text(message);
        layer.draw();
      }

      var stage = new Konva.Stage({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight
      });

      var layer = new Konva.Layer();

      var text = new Konva.Text({
        x: 70,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '',
        fill: 'black'
      });

      var oval = new Konva.Circle({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 50,
        scaleX: 2,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        strokeScaleEnabled: false,
        listening: false
      });

      oval.on('mouseover', function() {
        writeMessage('Mouseover oval');
      });
      oval.on('mouseout', function() {
        writeMessage('');
      });

      layer.add(oval);
      layer.add(text);
      stage.add(layer);

      document.getElementById('listen').addEventListener(
        'click',
        function() {
          oval.listening(true);
          layer.drawHit();
        },
        false
      );

      document.getElementById('dontListen').addEventListener(
        'click',
        function() {
          oval.listening(false);
          layer.drawHit();
        },
        false
      );*/

/*
window.addEventListener("load",function(){
  var playPromise = document.querySelector('#audioPlayer').play();

if (playPromise !== undefined) {
  playPromise.then(function() {
    playPromise.play();
  }).catch(function(error) {
    alert("error");
  });
}
})*/

/*window.addEventListener("load",setTimeout(function(){
  var playPromise = document.querySelector('#audioPlayer').play();

if (playPromise !== undefined) {
  playPromise.then(function() {
    playPromise.play();
  }).catch(function(error) {
    alert("error");
  });
}
}, 2000))*/

/*window.addEventListener("load",function play1() {

var promise = document.querySelector('#audioPlayer').play();

  if (promise !== undefined) {
      promise.then(_ => {
        var player = document.querySelector('#audioPlayer');
      
        if (player.paused) {
            player.play();
            //control.textContent = 'Pause';
        } else {
            player.pause(); 
            //control.textContent = 'Play';
        }
      }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
      });
  }  

});

window.addEventListener("load",function(){
  
  var media = document.getElementById("audioPlayer");
  const playPromise = media.play();
  if (playPromise !== null){
    playPromise.catch(() => { media.play(); })
}
})

 function play(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
    player.play();

    console.log("tst");
    if (player.paused) {
        player.play();
        //control.textContent = 'Pause';
    } else {
        player.pause(); 
        //control.textContent = 'Play';
    }
}


function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
  
    player.currentTime = 0;
    player.pause();
}*/



