class Form2 {
    constructor(){
        /*NOTE: There are some properties which have many elements/audios/images assigned to the same property.
        This is to avoid slow down of the program*/ 

        //Creating question image
        this.quesImgSci1 = createImg("");
        this.quesImgSci1.position(400,30);
        this.quesImgSci1.hide();
       
        //Creating science logo image
        science_logo = createImg('assets2/scienceLogo.png');
        science_logo.position(73,284);

        //Creating level element
        this.level2 = createElement('h2',"");
        this.level2.position(20,0);
        this.level2.hide();

        //Creating question element
        this.question2 = createElement('h2',"");
        this.question2.position(240,210);
        this.question2.hide();

        //Creating (Here's the solution:) element 
        solText = createElement('h2',"Here's the solution:");
        solText.position(270,400);
        solText.hide();
         
        //Creating solution image
        sol = createImg('');
        sol.position(550,400);
        sol.hide();

        //Creating solution element
        solution = createElement('h2',"");
        solution.position(550,400);
        solution.hide();

        //Creating donut voice
        donutVoice = createAudio("assets/pen.mp3");

        //Creating help audio
        help = createAudio("assets/help1.mp3");
    }
    display(){
        //mousePressed activity of the ch1 button
        ch1s.mousePressed(()=>{
            //Hiding some elements
            name1.hide();
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
           
            //Positioning the solText
            solText.position(windowWidth-900,440);
            
            //Positioning sound buttons
            muteBtn.position(200,10);
            unmuteBtn.position(200,10);

            //Playing the help sound
            help.volume(1);
            help.play();
        
            /*Displaying the level element (NOTE: show function is not used here as there 
            are different levels assigned to the same property. {You could also experiment with show if you want to check})*/
            this.level2 = createElement('h2',"Level : Easy");
            this.level2.position(20,0);
      
            //Displaying the question element
            this.question2 = createElement('h2',"1)Which type of energy is produced when the handle of a pencil");
            this.question2.position(windowWidth-900,200);

            //Displaying the question's 2nd line
            this.question2line2 = createElement('h2',"sharpener turns?");
            this.question2line2.position(windowWidth-660,233);
           
            //Displaying the question image
            this.quesImgSci1 = createImg("assets2/pencilGif.png");
            this.quesImgSci1.position(windowWidth-640,80);
            this.quesImgSci1.size(130,130);

            //Removing Sol (It is not required for this question)
            sol.remove();
           
            /*The recreation of donutVoice is done here as there are many voices assigned to the same property
            (You could also experiment without this line if you want to check)*/
            donutVoice = createAudio("assets2/pencil2.mp3");
       
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
            op3 = createSprite(windowWidth-110,550,70,30);
            reset(op3);

            op4.destroy();
            op4 = createSprite(windowWidth-110,400,70,30);
            reset(op4);
            
            //Displaying option's text on the option sprites
            op1text = createElement('h3',"Light");
            op1text.position(windowWidth-140,75);

            op2text = createElement('h4',"Magnetic");
            op2text.position(windowWidth-140,225);

            op3text = createElement('h4',"Mechanical");
            op3text.position(windowWidth-140,527);

            op4text = createElement('h4',"Electrical");
            op4text.position(windowWidth-140,377);
           
            //Recreating solution element
            solution.remove();
            solution = createElement('h2','In fact, mechanical energy is often defined as the ability to do work.');
            solution.position(windowWidth-900,480);
            solution.hide();

            /*button_back is a global variable and is created in draw() of sketch.js
            (Currently we don't require it. So, it is better to remove it)*/
            button_back.remove();

            //mousePressed activity of the continue button
            continueBtn.mousePressed(()=>{
                //Hiding some elements
                this.question2line2.hide();
                continueBtn.hide();
                donut.visible = false;
                solText.hide();
                solText.position(windowWidth-750,440);

                //Stopping the donutVoice and recreating it with a different sound
                donutVoice.stop();
                donutVoice.remove();
                donutVoice = createAudio("assets2/candle.mp3");

                //Recreating sol
                solution.remove();
                solution = createElement('h2','A candle makes both heat and light');
                solution.position(windowWidth-750,480);
                solution.hide();

                //Recreating the destroyed player
                player = createSprite(80,120,440,80);
                player.addAnimation("pl1",playerImg);
                player.scale = 0.03;

                //Recreating quesImgSci1
                this.quesImgSci1.remove();
                this.quesImgSci1 = createImg("assets2/candle.gif");
                this.quesImgSci1.position(windowWidth-680,80); 
                this.quesImgSci1.size(100,100);

                //Recreating question2
                this.question2.remove();
                this.question2 = createElement('h2',"2)A candle makes heat and");
                this.question2.position(windowWidth-760,200);

                //Recreating all option's text
                op1text.remove();
                op2text.remove();
                op3text.remove();
                op4text.remove();
                
                op1text = createElement('h3',"Ice");
                op1text.position(windowWidth-140,75);

                op2text = createElement('h4',"Electricity");
                op2text.position(windowWidth-140,225);

                op3text = createElement('h3',"Light");
                op3text.position(windowWidth-140,527);

                op4text = createElement('h3',"Sound");
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
                    solText.position(windowWidth-800,427);
                    solution.remove();

                    //Stopping the donutVoice and recreating it with a different sound
                    donutVoice.stop();
                    donutVoice.remove();
                    donutVoice = createAudio("assets2/Nuclear.mp3");
     
                    //Recreating sol
                    sol.remove();
                    sol = createImg('assets2/nucleusImg 1.png');
                    sol.position(windowWidth-810,480);
                    sol.hide();

                    //Recreating the destroyed player
                    player = createSprite(80,120,440,80);
                    player.addAnimation("pl1",playerImg);
                    player.scale = 0.03;
            
                    //Recreating quesImgSci1
                    this.quesImgSci1.remove();
                    this.quesImgSci1 = createImg("assets2/nucleusImg1.png");
                    this.quesImgSci1.position(windowWidth-680,50);
                    this.quesImgSci1.size(230,180);
                    
                    //Recreating question2
                    this.question2.remove();
                    this.question2 = createElement('h2',"3)What form of energy comes from the nucleus?");
                    this.question2.position(windowWidth-800,200);

                    //Recreating all option's text
                    op1text.remove();
                    op2text.remove();
                    op3text.remove();
                    op4text.remove();

                    op1text = createElement('h3',"Kinetic");
                    op1text.position(windowWidth-140,377);

                    op2text = createElement('h4',"Chemical");
                    op2text.position(windowWidth-140,225);

                    op3text = createElement('h3',"Nuclear");
                    op3text.position(windowWidth-140,75);

                    op4text = createElement('h3',"Radiant");
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
                        solText.hide();
                        solText.position(windowWidth-800,440);
            
                        //Stopping the donutVoice and recreating it with a different sound
                        donutVoice.stop();
                        donutVoice.remove();
                        donutVoice = createAudio("assets2/geo.mp3");
        
                        //Creating removed solution
                        solution = createElement('h2','Geothermal energy is the heat from the earth. It’s clean and sustainable.');
                        solution.position(windowWidth-800,480);
                        solution.hide();

                        //Recreating level element
                        this.level2.remove();
                        this.level2 = createElement('h2',"Level : Medium");
                        this.level2.position(20,0);

                        //Removing sol
                        sol.remove();
                      
                        //Recreating the destroyed player
                        player = createSprite(80,120,440,80);
                        player.addAnimation("pl1",playerImg);
                        player.scale = 0.03;
                
                        //Recreating quesImgSci1
                        this.quesImgSci1.remove();
                        this.quesImgSci1 = createImg("assets2/heat.png");
                        this.quesImgSci1.position(windowWidth-680,60);
                        this.quesImgSci1.size(200,150);
                        
                        //Recreating question2
                        this.question2.remove();
                        this.question2 = createElement('h2',"4)Trapped heat inside the earth is known as");
                        this.question2.position(windowWidth-800,200);

                        //Recreating all option's text
                        op1text.remove();
                        op2text.remove();
                        op3text.remove();
                        op4text.remove();

                        op1text = createElement('h3',"Heat");
                        op1text.position(windowWidth-140,75);

                        op2text = createElement('h3',"Earth");
                        op2text.position(windowWidth-140,225);

                        op3text = createElement('h4',"Geothermal");
                        op3text.position(windowWidth-140,377);
                       
                        op4text = createElement('h3',"Kinetic");
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
                            solText.position(windowWidth-775,380);
                            solution.remove();

                            //Stopping the donutVoice and recreating it with a different sound
                            donutVoice.stop();
                            donutVoice.remove();
                            donutVoice = createAudio("assets2/sound.mp3");

                            //Creating removed sol
                            sol = createImg('assets2/soundSol.png');
                            sol.position(windowWidth-780,433);
                            sol.hide();

                            //Recreating the destroyed player
                            player = createSprite(80,120,440,80);
                            player.addAnimation("pl1",playerImg);
                            player.scale = 0.03;
                    
                            //Recreating quesImgSci1
                            this.quesImgSci1.remove();
                            this.quesImgSci1 = createImg("assets2/sound.gif");
                            this.quesImgSci1.position(windowWidth-680,60);
                            this.quesImgSci1.size(180,140);
                            
                            //Recreating question2
                            this.question2.remove();
                            this.question2 = createElement('h2',"5)Sound is caused by? ");
                            this.question2.position(windowWidth-700,210);

                            //Recreating all option's text
                            op1text.remove();
                            op2text.remove();
                            op3text.remove();
                            op4text.remove();

                            op1text = createElement('h3',"Force");
                            op1text.position(windowWidth-140,75);
                            
                            op2text = createElement('h4',"Instruments");
                            op2text.position(windowWidth-140,377);
                        
                            op3text = createElement('h4',"Vibrations");
                            op3text.position(windowWidth-140,225);

                            op4text = createElement('h3',"Air");
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
                                solText.hide();
                                solText.position(windowWidth-800,440);
                                sol.remove();

                                //Stopping the donutVoice and recreating it with a different sound
                                donutVoice.stop();
                                donutVoice.remove();
                                donutVoice = createAudio("assets2/fossil.mp3");

                                //Recreating level element
                                this.level2.remove();
                                this.level2 = createElement('h2',"Level : Hard");
                                this.level2.position(20,0);

                                //Recreating solution element
                                solution.remove();
                                solution = createElement('h2',"Fossil fuels are fuels because they release heat energy when they are burned");
                                solution.position(windowWidth-800,480);
                                solution.hide();

                                //Recreating the destroyed player
                                player = createSprite(80,120,440,80);
                                player.addAnimation("pl1",playerImg);
                                player.scale = 0.03;
                        
                                //Recreating quesImgSci1
                                this.quesImgSci1.remove();
                                this.quesImgSci1 = createImg("assets2/fofu.jpeg");
                                this.quesImgSci1.position(windowWidth-630,60);
                                this.quesImgSci1.size(180,140);
                                
                                //Recreating question2
                                this.question2.remove();
                                this.question2 = createElement('h2',"6)Energy is released from fossil fuels when they are");
                                this.question2.position(windowWidth-800,200);

                                //Recreating all option's text
                                op1text.remove();
                                op2text.remove();
                                op3text.remove();
                                op4text.remove();
                               

                                op1text = createElement('h3',"Pumped");
                                op1text.position(windowWidth-140,75);

                                op2text = createElement('h3',"Cooled");
                                op2text.position(windowWidth-140,225);

                                op3text = createElement('h3',"Burned");
                                op3text.position(windowWidth-140,377);

                                op4text = createElement('h4',"Pressurized");
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
                                    solution.remove();
                                    solText.position(windowWidth-900,440);
                                    solText.hide();

                                    //Stopping the donutVoice and recreating it with a different sound 
                                    donutVoice.stop();
                                    donutVoice.remove();
                                    donutVoice = createAudio("assets2/laptop.mp3");

                                    //Recreating sol
                                    solution = createElement('h2',"The energy used by laptop and coffee pot are about the same");
                                    solution.position(windowWidth-900,480);
                                    solution.hide();
                                
                                    //Recreating the destroyed player
                                    player = createSprite(80,120,440,80);
                                    player.addAnimation("pl1",playerImg);
                                    player.scale = 0.03;

                                    //Recreating quesImgMath1
                                    this.quesImgSci1.remove();
                                    this.quesImgSci1 = createImg("assets2/laptop.png");
                                    this.quesImgSci1.position(windowWidth-770,60);
                                    this.quesImgSci1.size(450,170);
                                    
                                    //Recreating question2
                                    this.question2.remove();
                                    this.question2 = createElement('h2',"7)What uses more energy? Six hours of laptop use or making coffee?");
                                    this.question2.position(windowWidth-900,200);
        
                                    //Recreating all option's text
                                    op1text.remove();
                                    op2text.remove();
                                    op3text.remove();
                                    op4text.remove();

                                    op1text = createElement('h3',"Laptop");
                                    op1text.position(windowWidth-140,75);

                                    op2text = createElement('h3',"Coffee");
                                    op2text.position(windowWidth-140,225);
        
                                    op3text = createElement('h3',"Both");
                                    op3text.position(windowWidth-140,527);

                                    op4text = createElement('h3',"None");
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
                                        this.level2.hide();
                                        this.quesImgSci1.hide();
                                        sol.hide();
                                        solText.hide();
                                        solution.hide();
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
                                        this.question2.remove();

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
                                        this.level2.hide();
                                        this.quesImgSci1.hide();
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
                                        this.question2.remove();

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
                                        solution.remove();
                                        scoreText.hide();
                                        continueBtn.hide();
                                        name1.show();
                                    })     
                                })
                            });
                        });
                    });
                });
            });
        });
    }
}/*Agnika Sunil*/