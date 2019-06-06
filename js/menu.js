('#btn-play').on('click',function() {
	
	
	$("#container").css({
		"background-color":"#88001b"
	});
	var width=window.innerWidth;
	var height=window.innerHeight;

	var stage = new Konva.Stage({
	    container: 'container',   // id of container <div>
	    width: width,
	    height: height,

	});
})

document.getElementById('btn-play').addEventListener('click',function() {
	alert("tesy");
})
