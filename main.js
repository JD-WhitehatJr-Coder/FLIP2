function preload() {

}

function setup() {
canvas = createCanvas(400,300);
canvas.center();
video = createCapture(VIDEO);
video.size(400, 300);
video.center();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
  if(results.length > 0)
  {
   console.log(results);
   console.log("nose x = "+ results[0].pose.nose.x);
   console.log("nose y = "+ results[0].pose.nose.y);
  }
}

function modelLoaded() {
   console.log("PoseNet is initialized");
}
function draw() {
Image(video, 0, 0, 350, 350);

}
function take_snapshot() {
   save('myMustacheFilter_img.png');
}