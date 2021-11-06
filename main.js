Webcam.set({
    height: 315,
    width: 350,
    image_format: 'png',
    png_quality:90
});

var Camera = document.getElementById("camera");
Webcam.attach("#camera");


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='Capture_image' src="+ data_uri +"></img>"
    });
}

console.log('ml5 version',ml5.version);

classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/ScLpxihe5/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    var speakdata1 = "The First Prediction Is" + Prediction1;
    var speakdata2 = "The Second Prediction Is" + Prediction2;
    var utterThis = new SpeechSyntheSisUtterance(speakdata1, speakdata2);
    synth.speak(utterThis);
}
Prediction1 = "";
Prediction2 = "";
