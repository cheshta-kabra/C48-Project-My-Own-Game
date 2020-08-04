//Declaring global variables
var form,form2,form3,form4,form5,form6;
var button_back;
var player,playerImg;
var op1,op2,op3,op4;
var sol,solText;
var donutAni,donut;
var donutVoice;
var bgm;
var hi;
var introImg;
var help;
var score = 0;
var continueBtn;
var ch1m,ch2m,ch3m;
var listen;
var ch1s,ch2s,ch3s;
var math_logo;
var science_logo;
var solution;
var op1text,op2text,op3text,op4text;
var scoreText;
var correct,wrong;
function preload(){
  playerImg = loadAnimation("assets/p1.png","assets/p2.png","assets/p3.png");
  donutAni = loadAnimation("Gif/aa0.png","Gif/aa1.png","Gif/aa2.png","Gif/aa3.png","Gif/aa4.png","Gif/aa5.png","Gif/aa6.png","Gif/aa7.png","Gif/aa8.png","Gif/aa7.png","Gif/aa6.png","Gif/aa5.png","Gif/aa4.png","Gif/aa3.png","Gif/aa2.png","Gif/aa1.png","Gif/aa0.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  //Creating chapter buttons of math
  ch1m = createImg('assets/tape5.png');
  ch1m.position(150,140);
  ch1m.size(180,90);

  ch2m = createImg('assets3/shapes.png');
  ch2m.position(400,140);
  ch2m.size(190,93);

  ch3m = createImg('assets5/circlegeo.png');
  ch3m.position(640,140);
  ch3m.size(200,100);

  //Creating chapter buttons of science
  ch1s = createImg('assets2/energy.png');
  ch1s.position(150,310);
  ch1s.size(180,90);

  ch2s = createImg('assets4/universe.png');
  ch2s.position(400,310);
  ch2s.size(185,97);

  ch3s = createImg('assets6/matter.png');
  ch3s.position(650,310);
  ch3s.size(190,95);

  //Creating the (She want's to say something...) image
  introImg = createImg("assets/intro.png");
  introImg.position(windowWidth-510,windowHeight-250);
  introImg.show();

  //Creating a listen button
  listen = createButton('Listen');

  //Creating donut sprite
  donut = createSprite(windowWidth-210,windowHeight-150,50,50);
  donut.addAnimation("mrsDonut",donutAni);
  donut.scale = 0.3;

  //Creating back button
  button_back = createImg('assets/back1.png');
  button_back.position(19, 550);
  button_back.hide();

  //Creating player sprite
  player = createSprite(80,120,440,80);
  player.addAnimation("pl1",playerImg);
  player.scale = 0.03;
  player.visible = false;

  //Creating option sprites
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

  //Creating bgm audio
  bgm = createAudio('assets/bgmusic.mp3');
  
  //Creating hi audio
  hi = createAudio("assets/hi.mp3");
  
  //Creating mute and unmute buttons
  muteBtn = createImg("assets/mute.png");
  muteBtn.position(10,10);
  muteBtn.size(50,50);

  unmuteBtn = createImg("assets/unmute.jpg");
  unmuteBtn.position(10,10);
  unmuteBtn.size(50,50);
  unmuteBtn.hide();

  //Creating help audio
  help = createAudio("assets/help1.mp3");

  //Creating score text
  scoreText = createImg("Score/7points.gif");
  scoreText.position(windowWidth-330,windowHeight-190);
  scoreText.hide();

  //Creating correct and wrong audios
  correct = createAudio("assets/correct.mp3");
  wrong = createAudio("assets/wrong3.mp3");

  //Creating 6 forms for 6 chapters
  form = new Form();
  form2 = new Form2();
  form3 = new Form3();
  form4 = new Form4();
  form5 = new Form5();
  form6 = new Form6();
}


function draw() {
 
  background("#F9ED69");
   //Positioning and mousePressed activities of the listen button
   listen.position(windowWidth-360,windowHeight-160);
   listen.size(100,30);
   listen.mousePressed(()=>{
       introImg.hide();
       listen.hide();
       hi.volume(1);
       hi.play();
   })
 
  //Displaying 6 forms for 6 chapters
  form.display();
  form2.display();
  form3.display();
  form4.display();
  form5.display();
  form6.display();

  //Drawing the sprites
  drawSprites();
  
  //mousePressed activities of the mute and unmute button
  muteBtn.mousePressed(function(){
    muteBtn.hide();
    unmuteBtn.show();
    bgm.autoplay(true);
    bgm.volume(0.55);
    bgm.loop();
    unmuteBtn.mousePressed(function(){
      unmuteBtn.hide();
      muteBtn.show();
      bgm.stop();
    })
  })
  
  //Checking for the right and wrong answers by collisions
  if(player.isTouching(op1)){
    op1text.style('color',"red");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(1);
    donutVoice.play();
    help.stop();
    button_back.show();
    solution.show();
    wrong.volume(0.4);
    wrong.stop();
    wrong.play();
  }

  if(player.isTouching(op2)){
    op2text.style('color',"red");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(1);
    donutVoice.play();
    help.stop();
    button_back.show();
    solution.show();
    wrong.volume(0.4);
    wrong.stop();
    wrong.play();
  }

  if(player.isTouching(op3)){
    op3text.style('color',"#00CC00");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(1);
    donutVoice.play();
    help.stop();
    button_back.show();
    score++;
    solution.show();
    correct.volume(0.7);
    correct.stop();
    correct.play();
  }

  if(player.isTouching(op4)){
    op4text.style('color',"red");
    player.destroy();
    donut.visible = true;
    sol.show();
    solText.show();
    continueBtn.show();
    donutVoice.volume(1);
    donutVoice.play();
    help.stop();
    button_back.show();
    solution.show();
    wrong.volume(0.4);
    wrong.stop();
    wrong.play();
  }

  console.log(score);
}

function mouseDragged(){
  player.x = mouseX;
  player.y = mouseY;
}

function reset(option){
  option.shapeColor ="#D3D3D3";
}


