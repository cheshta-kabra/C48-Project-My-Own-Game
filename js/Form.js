class Form{
    constructor(){
        /*NOTE: There are some properties which have many elements/audios/images assigned to the same property.
        This is to avoid slow down of the program*/ 

        //Creating question image
        this.quesImgMath1 = createImg("");
        this.quesImgMath1.position(440,50);
        this.quesImgMath1.hide();
       
        //Creating math logo image
        math_logo = createImg('assets/mathLogo.png');
        math_logo.position(70,120);

        //Creating level element
        this.level1 = createElement('h2',"");
        this.level1.position(20,0);
        this.level1.hide();

        //Creating question element
        this.question1 = createElement('h2',"");
        this.question1.position(240,200);
        this.question1.hide();

        //Creating (Here's the solution:) element 
        solText = createElement('h2',"Here's the solution:");
        solText.position(320,350);
        //solText.style('color',"red");
        solText.hide();

        //Creating solution image
        sol = createImg('');
        sol.position(550,400);
        sol.hide();

        //Creating the donutVoice audio
        donutVoice = createAudio("assets/clock.mp3"); 
    }

    display(){
        //Giving background color
        background("#D3D3D3");

        //mousePressed activity of the ch1 button
        ch1m.mousePressed(()=>{
            //Hiding some elements
            ch1m.hide();
            ch2m.hide();
            ch3m.hide();
            math_logo.hide();
            ch1s.hide();
            ch2s.hide();
            ch3s.hide();
            science_logo.hide();
            introImg.hide();
            listen.hide();
    
            //Positioning the invisible donut
            donut.x = 170;
            donut.visible = false;

            //Positioning sound buttons
            muteBtn.position(200,10);
            unmuteBtn.position(200,10);

            //Playing the help sound
            help.volume(1);
            help.play();

            /*Displaying the level element (NOTE: show function is not used here as there 
            are different levels assigned to the same property. {You could also experiment with show if you want to check})*/
            this.level1 = createElement('h2',"Level : Easy");
            this.level1.position(20,0);
      
            //Displaying the question element
            this.question1 = createElement('h2',"1)What is the time shown on the face of this clock? ");
            this.question1.position(windowWidth-900,200);
           
            //Displaying the question image
            this.quesImgMath1 = createImg("assets/clock.png");
            this.quesImgMath1.position(windowWidth-693,50);

            //Displaying the solution image
            sol = createImg('assets/clockSol.png');
            sol.position(windowWidth-700,440);
            sol.hide();

            //Recreating the solText
            solText = createElement('h2',"Here's the solution:");
            solText.position(windowWidth-750,400);
            solText.hide();
           
            /*The recreation of donutVoice is done here as there are many voices assigned to the same property
            (You could also experiment without this line if you want to check)*/
            donutVoice = createAudio("assets/clock.mp3");
       
            //There is a recreation of player as he gets destroyed in many parts of the code
            player = createSprite(80,120,440,80);
            player.addAnimation("pl1",playerImg);
            player.scale = 0.03;

            //Creating continue button and hiding it
            continueBtn = createButton('Continue');
            continueBtn.position(windowWidth-350,610);
            continueBtn.size(200,40);
            continueBtn.style('background-color',"yellow");
            continueBtn.hide();

            //Recreating and resetting options
            op1.destroy();
            op1 = createSprite(windowWidth-110,100,70,30);
            reset(op1);
        
            op2.destroy();
            op2 = createSprite(windowWidth-110,250,70,30);
            reset(op2);

            op3.destroy();
            op3 = createSprite(windowWidth-110,400,70,30);
            reset(op3);

            op4.destroy();
            op4 = createSprite(windowWidth-110,550,70,30);
            reset(op4);
            
            //Displaying option's text on the option sprites
            op1text = createElement('h3',"4:40");
            op1text.position(windowWidth-120,75);

            op2text = createElement('h3',"4:08");
            op2text.position(windowWidth-120,225);

            op3text = createElement('h3',"8:20");
            op3text.position(windowWidth-120,377);

            op4text = createElement('h3',"8:40");
            op4text.position(windowWidth-120,527);
           
            /*button_back is a global variable and is created in draw() of sketch.js
            (Currently we don't require it. So, it is better to remove it)*/
            button_back.remove();
    
                //mousePressed activity of the continue button
                continueBtn.mousePressed(()=>{
                    //Hiding some elements
                    continueBtn.hide();
                    donut.visible = false;
                    solText.hide();
                    solText.position(windowWidth-827,400);

                    //Stopping the donutVoice and recreating it with a different sound
                    donutVoice.stop();
                    donutVoice.remove();
                    donutVoice = createAudio("assets/pen.mp3");

                    //Recreating sol
                    sol.remove();
                    sol = createImg('assets/pen2.png');
                    sol.size(660,260);
                    sol.position(windowWidth-850,410);
                    sol.hide();

                    //Recreating the destroyed player
                    player = createSprite(80,120,440,80);
                    player.addAnimation("pl1",playerImg);
                    player.scale = 0.03;
                    player.x = 0

                    //Recreating quesImgMath1
                    this.quesImgMath1.remove();
                    this.quesImgMath1 = createImg("assets/pencil.png");
                    this.quesImgMath1.position(windowWidth-900,100); 

                    //Recreating question1
                    this.question1.remove();
                    this.question1 = createElement('h2',"2)How long is the pencil?");
                    this.question1.position(windowWidth-750,230);

                    //Recreating all option's text
                    op1text.remove();
                    op2text.remove();
                    op3text.remove();
                    op4text.remove();
                    
                    op1text = createElement('h3',"11 units");
                    op1text.position(windowWidth-140,75);

                    op2text = createElement('h3',"5 units");
                    op2text.position(windowWidth-140,225);

                    op3text = createElement('h3',"9 units");
                    op3text.position(windowWidth-140,377);

                    op4text = createElement('h3',"8 units");
                    op4text.position(windowWidth-140,527);

                    //Resetting the option sprites and positioning them
                    reset(op1);
                    reset(op2);
                    reset(op3);
                    reset(op4);

                    op1.y = 100;
                    op2.y = 250;
                    op3.y = 400;
                    op4.y = 550;

                    //The solution image covers the continue button
                    /*Without the recreation, the continue button takes a lot of time to respond. 
                    ie. You have to click on the button for several times */
                    continueBtn.remove();
                    continueBtn = createButton('Continue');
                    continueBtn.position(windowWidth-350,610);
                    continueBtn.size(200,40);
                    continueBtn.style('background-color',"yellow");
                    continueBtn.hide();

                    //mousePressed activity of the continue button
                    continueBtn.mousePressed(()=>{
                        //Hiding some elements
                        continueBtn.hide();
                        donut.visible = false;
                        solText.hide();
                        solText.position(windowWidth-720,390);

                        //Stopping the donutVoice and recreating it with a different sound
                        donutVoice.stop();
                        donutVoice.remove();
                        donutVoice = createAudio("assets/4a.mp3");

                        //Recreating sol
                        sol.remove();
                        sol = createImg('assets/sqsol.png');
                        sol.position(windowWidth-710,420);
                        sol.hide();

                        //Recreating the destroyed player
                        player = createSprite(80,120,440,80);
                        player.addAnimation("pl1",playerImg);
                        player.scale = 0.03;
                
                        //Recreating quesImgMath1
                        this.quesImgMath1.remove();
                        this.quesImgMath1 = createImg("assets/square1.png");
                        this.quesImgMath1.position(windowWidth-700,100);
                        
                        //Recreating question1
                        this.question1.remove();
                        this.question1 = createElement('h2',"3)What is the perimeter of the given figure?");
                        this.question1.position(windowWidth-850,230);

                        //Recreating all option's text
                        op1text.remove();
                        op2text.remove();
                        op3text.remove();
                        op4text.remove();

                        op1text = createElement('h3',"a² units");
                        op1text.position(windowWidth-140,377);

                        op2text = createElement('h3',"2a units");
                        op2text.position(windowWidth-140,225);

                        op3text = createElement('h3',"4a units");
                        op3text.position(windowWidth-140,75);

                        op4text = createElement('h3',"4a² units");
                        op4text.position(windowWidth-140,527);

                        //Resetting the option sprites and positioning them
                        reset(op1);
                        reset(op2);
                        reset(op3);
                        reset(op4);

                        op1.y = 400;
                        op2.y = 250;
                        op3.y = 100;
                        op4.y = 550;

                        //mousePressed activity of the continue button
                        continueBtn.mousePressed(()=>{
                            //Hiding some elements
                            continueBtn.hide();
                            donut.visible = false;
                            solText.position(windowWidth-710,380);
                            solText.hide();

                            //Stopping the donutVoice and recreating it with a different sound
                            donutVoice.stop();
                            donutVoice.remove();
                            donutVoice = createAudio("assets/perimeter.mp3");

                            //Recreating the level element
                            this.level1.remove();
                            this.level1 = createElement('h2',"Level : Medium");
                            this.level1.position(20,0);
           
                            //Recreating sol
                            sol.remove();
                            sol = createImg('assets/perimetersol3.png');
                            sol.position(windowWidth-840,430);
                            sol.hide();

                            //Recreating the destroyed player
                            player = createSprite(80,120,440,80);
                            player.addAnimation("pl1",playerImg);
                            player.scale = 0.03;
                            
                            //Recreating quesImgMath1
                            this.quesImgMath1.remove();
                            this.quesImgMath1 = createImg("assets/perimeter1.png");
                            this.quesImgMath1.position(windowWidth-630,110);
                            this.quesImgMath1.size(100,100);
                            
                            //Recreating question1
                            this.question1.remove();
                            this.question1 = createElement('h2',"4)The violet squares each have a perimetеr of 12 cm.");
                            this.question1.position(windowWidth-850,210);

                            //Creating question1 line2
                            this.question1line2 = createElement('h2',"What is the perimetеr of the big square?");
                            this.question1line2.position(windowWidth-790,250);

                            //Recreating all option's text
                            op1text.remove();
                            op2text.remove();
                            op3text.remove();
                            op4text.remove();

                            op1text = createElement('h3',"48 cm");
                            op1text.position(windowWidth-140,377);

                            op2text = createElement('h3',"108 cm");
                            op2text.position(windowWidth-140,225);

                            op3text = createElement('h3',"36 cm");
                            op3text.position(windowWidth-140,75);

                            op4text = createElement('h3',"12 cm");
                            op4text.position(windowWidth-140,527);

                            //Resetting the option sprites and positioning them
                            reset(op1);
                            reset(op2);
                            reset(op3);
                            reset(op4);

                            op1.y = 400;
                            op2.y = 250;
                            op3.y = 100;
                            op4.y = 550;

                            //The solution image covers the continue button
                            /*Without the recreation, the continue button takes a lot of time to respond. 
                            ie. You have to click on the button for several times */
                            continueBtn.remove();
                            continueBtn = createButton('Continue');
                            continueBtn.position(windowWidth-350,610);
                            continueBtn.size(200,40);
                            continueBtn.style('background-color',"yellow");
                            continueBtn.hide();
                            
                            //mousePressed activity of the continue button
                            continueBtn.mousePressed(()=>{
                                //Hiding some elements
                                continueBtn.hide();
                                donut.visible = false;
                                solText.position(windowWidth-720,390);
                                solText.hide();

                                //Stopping the donutVoice and recreating it with a different sound
                                donutVoice.stop();
                                donutVoice.remove();
                                donutVoice = createAudio("assets/triSol1.mp3");

                                //Recreating sol
                                sol.remove();
                                sol = createImg('assets/trisol.png');
                                sol.position(windowWidth-812,410);
                                sol.hide();
                                
                                //Recreating the destroyed player
                                player = createSprite(80,120,440,80);
                                player.addAnimation("pl1",playerImg);
                                player.scale = 0.03;
                               
                                //Recreating quesImgMath1
                                this.quesImgMath1.remove();
                                this.quesImgMath1 = createImg("assets/triangle1.png");
                                this.quesImgMath1.position(windowWidth-678,83);
                                this.quesImgMath1.size(250,150);
                                
                                //Recreating question1
                                this.question1.remove();
                                this.question1 = createElement('h2',"5)Find the area of the given triangle");
                                this.question1.position(windowWidth-740,204);
    
                                //Recreating question1 line2
                                this.question1line2.remove();
                                this.question1line2 = createElement('h2',"(Here b represents base and h represents height)");
                                this.question1line2.position(windowWidth-804,244);

                                //Creating hint
                                this.question1hint = createElement('h2',"Handy hint: Area of a triangle =1/2 *base*height");
                                this.question1hint.position(windowWidth-530,10);
                                this.question1hint.style('background-color',"#00FF00");

                                //Recreating all option's text
                                op1text.remove();
                                op2text.remove();
                                op3text.remove();
                                op4text.remove();
    
                                op1text = createElement('h3',"16 cm");
                                op1text.position(windowWidth-140,75);
    
                                op2text = createElement('h3',"63 cm");
                                op2text.position(windowWidth-140,377);

                                op3text = createElement('h3',"56 cm");
                                op3text.position(windowWidth-140,225);
    
                                op4text = createElement('h3',"49 cm");
                                op4text.position(windowWidth-140,527);

                                //Resetting the option sprites and positioning them
                                reset(op1);
                                reset(op2);
                                reset(op3);
                                reset(op4);
                                
                                op1.y = 100;
                                op2.y = 400;
                                op3.y = 250;
                                op4.y = 550;

                                //mousePressed activity of the continue button
                                continueBtn.mousePressed(()=>{
                                    //Hiding some elements
                                    continueBtn.hide();
                                    donut.visible = false;
                                    solText.position(windowWidth-720,330);
                                    solText.hide();

                                    //Stopping the donutVoice and recreating it with a different sound 
                                    donutVoice.stop();
                                    donutVoice.remove();
                                    donutVoice = createAudio("assets/solBan.mp3");

                                    //Recreating the level element
                                    this.level1.remove();
                                    this.level1 = createElement('h2',"Level : Hard");
                                    this.level1.position(20,0);

                                    //Recreating sol
                                    sol.remove();
                                    sol = createImg('assets/bananasol1.png');
                                    sol.position(windowWidth-820,380);
                                    sol.hide();

                                    //Recreating the destroyed player
                                    player = createSprite(80,120,440,80);
                                    player.addAnimation("pl1",playerImg);
                                    player.scale = 0.03;

                                    //Recreating quesImgMath1
                                    this.quesImgMath1.remove();
                                    this.quesImgMath1 = createImg("assets/banana.png");
                                    this.quesImgMath1.position(windowWidth-790,83);
                                   
                                    //Recreating question1
                                    this.question1.remove();
                                    this.question1 = createElement('h2',"6)");
                                    this.question1.position(windowWidth-810,90);
                                    
                                    //Removing question1 line2
                                    this.question1line2.remove();
                                    
                                    //Removing hint
                                    this.question1hint.remove();
                                   
                                    //Recreating all option's text
                                    op1text.remove();
                                    op2text.remove();
                                    op3text.remove();
                                    op4text.remove();

                                    op1text = createElement('h3',"$ 6.50");
                                    op1text.position(windowWidth-140,75);

                                    op2text = createElement('h3',"$ 65.0");
                                    op2text.position(windowWidth-140,225);
        
                                    op3text = createElement('h3',"$ 3.25");
                                    op3text.position(windowWidth-140,377);
        
                                    op4text = createElement('h3',"$ 32.5");
                                    op4text.position(windowWidth-140,527);

                                    //Resetting the option sprites and positioning them
                                    reset(op1);
                                    reset(op2);
                                    reset(op3);
                                    reset(op4);

                                    op1.y = 100;
                                    op2.y = 250;
                                    op3.y = 400;
                                    op4.y = 550;
            
                                    //mousePressed activity of the continue button
                                    continueBtn.mousePressed(()=>{
                                        continueBtn.remove();
                                        continueBtn = createButton('View score');
                                        continueBtn.position(windowWidth-350,610);
                                        continueBtn.size(200,40);
                                        continueBtn.style('background-color',"yellow");
                                        continueBtn.hide();

                                        //Hiding some elements
                                        donut.visible = false;
                                        solText.position(windowWidth-820,330);
                                        solText.hide();

                                        //Stopping the donutVoice and recreating it with a different sound 
                                        donutVoice.stop();
                                        donutVoice.remove();
                                        donutVoice = createAudio("assets/table.mp3");

                                        //Recreating sol
                                        sol.remove();
                                        sol = createImg('assets/tableSol.png');
                                        sol.size(500,270);
                                        sol.position(windowWidth-820,380);
                                        sol.hide();
            
                                        //Recreating the destroyed player
                                        player = createSprite(80,120,440,80);
                                        player.addAnimation("pl1",playerImg);
                                        player.scale = 0.03;

                                        //Recreating quesImgMath1
                                        this.quesImgMath1.remove();
                                        this.quesImgMath1 = createImg("assets/table.png");
                                        this.quesImgMath1.position(windowWidth-790,83);
                                        this.quesImgMath1.size(450,170);
                                        
                                        //Recreating question1
                                        this.question1.remove();
                                        this.question1 = createElement('h2',"7)");
                                        this.question1.position(windowWidth-760,65);
            
                                        //Recreating all option's text
                                        op1text.remove();
                                        op2text.remove();
                                        op3text.remove();
                                        op4text.remove();

                                        op1text = createElement('h3',"170 cm");
                                        op1text.position(windowWidth-140,75);

                                        op2text = createElement('h3',"300 cm");
                                        op2text.position(windowWidth-140,225);
            
                                        op3text = createElement('h3',"150 cm");
                                        op3text.position(windowWidth-140,527);

                                        op4text = createElement('h3',"40 cm");
                                        op4text.position(windowWidth-140,377);

                                        //Resetting the option sprites and positioning them
                                        reset(op1);
                                        reset(op2);
                                        reset(op3);
                                        reset(op4);
                                        
                                        op1.y = 100;
                                        op2.y = 250;
                                        op3.y = 550;
                                        op4.y = 400;
            
                                        //Recreating destroyed back button
                                        button_back = createImg('assets/back1.png');
                                        button_back.position(19, 550);
                                        button_back.hide();

                                        continueBtn.mousePressed(()=>{
                                            continueBtn.hide();

                                            //Stopping the donutVoice and hiding elements
                                            donutVoice.stop();
                                            button_back.show();
                                            this.level1.hide();
                                            this.quesImgMath1.hide();
                                            sol.hide();
                                            solText.hide();
                                            donut.visible = false;

                                            //Destroying and removing elements
                                            op1.destroy();
                                            op2.destroy();
                                            op3.destroy();
                                            op4.destroy();

                                            op1text.remove();
                                            op2text.remove();
                                            op3text.remove();
                                            op4text.remove();
                                            this.question1.remove();

                                            //Positioning the sound buttons
                                            muteBtn.position(10,10);
                                            unmuteBtn.position(10,10);

                                            if(score===0){
                                                //Creating score text
                                                scoreText = createImg("Score/0points.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                            else if(score===1){
                                                //Creating score text
                                                scoreText = createImg("Score/1point.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                            else if(score===2){
                                                //Creating score text
                                                scoreText = createImg("Score/2points.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                            else if(score===3){
                                                //Creating score text
                                                scoreText = createImg("Score/3points.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                            else if(score===4){
                                                //Creating score text
                                                scoreText = createImg("Score/4points.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                            else if(score===5){
                                                //Creating score text
                                                scoreText = createImg("Score/5points.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                            else if(score===6){
                                                //Creating score text
                                                scoreText = createImg("Score/6points.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                            else if(score===7){
                                                //Creating score text
                                                scoreText = createImg("Score/7points.gif");
                                                scoreText.position(windowWidth-900,windowHeight/2);  
                                            }
                                        })
                                        //mousePressed activities of back button
                                        button_back.mousePressed(()=>{
                                            //Resetting score
                                            score = score-score;

                                            //Stopping the donutVoice and hiding elements
                                            donutVoice.stop();
                                            button_back.hide();
                                            this.level1.hide();
                                            this.quesImgMath1.hide();
                                            sol.hide();
                                            solText.hide();
                                            donut.visible = false;

                                            //Destroying and removing elements
                                            op1.destroy();
                                            op2.destroy();
                                            op3.destroy();
                                            op4.destroy();

                                            op1text.remove();
                                            op2text.remove();
                                            op3text.remove();
                                            op4text.remove();
                                            this.question1.remove();

                                            //Positioning the sound buttons
                                            muteBtn.position(10,10);
                                            unmuteBtn.position(10,10);
                                        
                                            //Showing the elements of home page
                                            ch1m.show();
                                            ch2m.show();
                                            ch3m.show();
                                            math_logo.show();
                                            ch1s.show();
                                            ch2s.show();
                                            ch3s.show();
                                            science_logo.show();
                                            scoreText.hide();
                                            continueBtn.hide();
                                        })     
                                    })
                                })
                            })
                        })
                    }) 
                })
            });
        
        drawSprites();
    }   
}/*Agnika Sunil*/