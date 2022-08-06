img = "";
noseX = 0;
noseY = 0;
ballX = 325;
ballY = 325;


function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
  video.size(600,300);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

	instializeInSetup(mario);
}

function draw() {
	game()
	if(noseX < 300){
		ballX = ballX - 1;
	  }
	  if(noseX > 300){
      ballX = ballX + 1;
	  }
	  if(noseY < 150){
      ballY = ballY - 1;
	  }
	}

function gotPoses(result){
	if(result.length > 0){
		console.log(result);
		 noseX = result[0].pose.nose.x;
		 noseY = result[0].pose.nose.y;
	   }
  }
  function modelLoaded(){
	console.log('Model Loaded!');
  }





