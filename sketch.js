var form,form1;
var button_back;

var player,playerImg,op1;
var sol,solText;
var donutAni,donut;
var donutVoice;
var bgm;
var hi;
//var intro;
var introImg;
var help;
var score = 0;
var continueBtn;
var ch1m,ch2m;
var listen;
var ch1s;
var math_logo;
var science_logo;
var solution;
var op1text,op2text,op3text,op4text;

function preload(){
  playerImg = loadAnimation("assets/p1.png","assets/p2.png","assets/p3.png");
  donutAni = loadAnimation("Gif/aa0.png","Gif/aa1.png","Gif/aa2.png","Gif/aa3.png","Gif/aa4.png","Gif/aa5.png","Gif/aa6.png","Gif/aa7.png","Gif/aa8.png","Gif/aa7.png","Gif/aa6.png","Gif/aa5.png","Gif/aa4.png","Gif/aa3.png","Gif/aa2.png","Gif/aa1.png","Gif/aa0.png");
}
function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);

  /*canvas.mousePressed(function(){
    hi.play();
  })*/
  

  //Creating ch1 button of math
  ch1m = createImg('assets/tape5.png');
  ch1m.position(150,140);
  ch1m.size(180,90);

  ch2m = createImg('assets/tape5.png');
  ch2m.position(400,140);
  ch2m.size(180,90);

  /*ch3m = createImg('assets/tape5.png');
  ch3m.position(650,140);
  ch3m.size(180,90);*/

  ch1s = createImg('assets2/energy.png');
  ch1s.position(150,310);
  ch1s.size(180,90);

  ch2s = createImg('assets2/energy.png');
  ch2s.position(400,310);
  ch2s.size(180,90);

  //Creating the (She want's to say something...) image
  introImg = createImg("assets/intro.png");
  introImg.position(windowWidth-510,windowHeight-280);
  introImg.show();

  //Creating a listen button
  listen = createButton('Listen');
 

  donut = createSprite(windowWidth-210,windowHeight-170,50,50);
  donut.addAnimation("mrsDonut",donutAni);
  donut.scale = 0.3;
  //donut.visible = true;

  button_back = createImg('assets/back1.png');
  button_back.position(19, 550);
  button_back.hide();

  //If this block is not written, the program will throw errors
  player = createSprite(80,120,440,80);
  player.addAnimation("pl1",playerImg);
  player.scale = 0.03;
  player.visible = false;
  
  

  op1 = createSprite(3000,50,0,0);
  op1.shapeColor ="#D3D3D3";
  op1.visible = false;

  op2 = createSprite(3000,200,0,0);
  op2.shapeColor ="#D3D3D3";
  op2.visible = false;

  op3 = createSprite(3000,350,0,0);
  op3.shapeColor ="#D3D3D3";
  op3.visible = false;

  op4 = createSprite(3000,500,0,0);
  op4.shapeColor ="#D3D3D3";
  op4.visible = false;

  /*continueBtn = createButton('Continue');
  continueBtn.position(800,565);
  continueBtn.size(200,40);
  continueBtn.style('background-color',"yellow");
  continueBtn.hide();*/

  bgm = createAudio('assets/bgmusic.mp3');
  
  hi = createAudio("assets/hi.mp3");
  
  muteBtn = createImg("assets/mute.png");
  muteBtn.position(10,10);
  muteBtn.size(50,50);


  unmuteBtn = createImg("assets/unmute.jpg");
  unmuteBtn.position(10,10);
  unmuteBtn.size(50,50);
  unmuteBtn.hide();

  help = createAudio("assets/help1.mp3");


  form = new Form();
  form2 = new Form2();
  form3 = new Form3();
  form4 = new Form4();
  //form5 = new Form5();
  
}


function draw() {
 
  background("#F9ED69");
  
   //Positioning and mousePressed activities of the listen button
   listen.position(windowWidth-330,windowHeight-190);
   listen.mousePressed(()=>{
       introImg.hide();
       listen.hide();
       hi.volume(0.5);
       hi.play();
   })
 
  form.display();
  form2.display();
  form3.display();
  form4.display();
  //form5.display();
  drawSprites();
  
  muteBtn.mousePressed(function(){
    muteBtn.hide();
    unmuteBtn.show();
    bgm.autoplay(true);
    bgm.volume(0.07);
    bgm.loop();
    //eli.show();
    unmuteBtn.mousePressed(function(){
      unmuteBtn.hide();
      muteBtn.show();
      bgm.stop();
      //eli.show();
      //bgm.volume(0.05);
      //bgm.loop();
    })
  })
  
  
  //moveWithMouse();
  
 
  if(player.isTouching(op1)){
    //op1.shapeColor = "red";
    op1text.style('color',"red");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(0.45);
    donutVoice.play();
    //introImg.show();
    help.stop();
    button_back.show();
    solution.show();
    //intro.show();
  }

  if(player.isTouching(op2)){
    //op2.shapeColor = "red";
    op2text.style('color',"red");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(0.45);
    donutVoice.play();
    //introImg.show();
    help.stop();
    button_back.show();
    solution.show();
    //intro.show();
  }

  if(player.isTouching(op3)){
    //op3.shapeColor = "#00FF00";
    op3text.style('color',"#00CC00");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(0.45);
    donutVoice.play();
    //introImg.show();
    help.stop();
    button_back.show();
    score++;
    solution.show();
    //intro.show();
  }

  if(player.isTouching(op4)){
    //op4.shapeColor = "red";
    op4text.style('color',"red");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(0.45);
    donutVoice.play();
    //introImg.show();
    help.stop();
    button_back.show();
    solution.show();
    //intro.show();
  }
console.log(score);
  


  
  
  //form.hide()
}
 function mouseDragged(){
  player.x = mouseX;
  player.y = mouseY;
}
function reset(option){
  option.shapeColor ="#D3D3D3";
}


