nosex = 0 ;
nosey = 0 ;

right_wrist_x = 0 ;
left_wrist_x = 0 ;
difference = 0 ; 
function setup() {
    video = createCapture(VIDEO);
    video.size(650 , 600 );
    canvas = createCanvas(650 , 580 );
    canvas.position(670 , 120);
    ipose = ml5.poseNet(video , modelloaded );
    ipose.on("pose",gotposes );
   }
   
   function modelloaded() {
    console.log("Model is loaded ");
   }

function draw() {
    background("black");
    fill("red");
    stroke("black");
    square(nosex,nosey,difference);
    document.getElementById("pxspan").innerHTML= "The width and height of square will be " + difference + " px" ; 
}   

function gotposes(results) {
    if (results.length > 0 ){
        console.log(results);
        nosex = results[0].pose.nose.x ; 
        nosey = results[0].pose.nose.y ;
        console.log("Nosex = " + nosex + "Nosey = " + nosey );
        right_wrist_x = results[0].pose.rightWrist.x ; 
        left_wrist_x  = results[0].pose.leftWrist.x  ;
        difference = floor(left_wrist_x - right_wrist_x );
        console.log("Right wrist x = " + right_wrist_x + "Left wrist x = " + left_wrist_x + "Difference" + difference );
    }
}