function setup()
{
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
song = "";

function draw()
{
    Image(video , 0 , 0 ,600 ,500);
}

function preload()
{
    song = loadSound("music.mp3");
}

function play()
{
    song.play();
}