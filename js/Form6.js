class Form6 {
    constructor(){
        /*NOTE: There are some properties which have many elements/audios/images assigned to the same property.
        This is to avoid slow down of the program*/ 

        //Creating question image
        this.quesImgSci3 = createImg("");
        this.quesImgSci3.position(400,30);
        this.quesImgSci3.hide();
       
        //Creating level element
        this.level6 = createElement('h2',"");
        this.level6.position(20,0);
        this.level6.hide();

        //Creating question element
        this.question6 = createElement('h2',"");
        this.question6.position(240,210);
        this.question6.hide();

        //Creating (Here's the solution:) element 
        solText = createElement('h2',"Here's the solution:");
        solText.position(270,400);
        solText.hide();
         
        //Creating solution image
        sol = createImg('');
        sol.position(550,400);
        sol.hide();

        //Creating solution 
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
        ch3s.mousePressed(()=>{
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
           
            solText.position(windowWidth-900,440);
            //Positioning sound buttons
            muteBtn.position(200,10);
            unmuteBtn.position(200,10);

            //Playing the help sound
            help.volume(1);
            help.play();
        
            /*Displaying the level element (NOTE: show function is not used here as there 
            are different levels assigned to the same property. {You could also experiment with show if you want to check})*/
            this.level6 = createElement('h2',"Level : Easy");
            this.level6.position(20,0);
      
            //Displaying the question element
            this.question6 = createElement('h2',"1)What is the process of conversion of solid to liquid called?");
            this.question6.position(windowWidth-900,200);

            //Displaying the question image
            this.quesImgSci3 = createImg("assets6/ice.gif");
            this.quesImgSci3.position(windowWidth-670,60);
            this.quesImgSci3.size(150,150);

            //Removing Sol (It is not required for this question)
            sol.remove();
           
            /*The recreation of donutVoice is done here as there are many voices assigned to the same property
            (You could also experiment without this line if you want to check)*/
            donutVoice = createAudio("assets6/melting.mp3");
       
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
            op2 = createSprite(windowWidth-110,550,70,30);
            reset(op2);

            op3.destroy();
            op3 = createSprite(windowWidth-110,400,70,30);
            reset(op3);

            op4.destroy();
            op4 = createSprite(windowWidth-110,250,70,30);
            reset(op4);
            
            //Displaying option's text on the option sprites
            op1text = createElement('h3',"Drying");
            op1text.position(windowWidth-140,75);

            op2text = createElement('h3',"Icing");
            op2text.position(windowWidth-140,527);

            op3text = createElement('h3',"Melting");
            op3text.position(windowWidth-140,377);

            op4text = createElement('h3',"Watering");
            op4text.position(windowWidth-140,225);
           
            //Recreating solution element
            solution.remove();
            solution = createElement('h2','The process of a solid becoming a liquid is called melting.');
            solution.position(windowWidth-900,480);
            solution.hide();

            /*button_back is a global variable and is created in draw() of sketch.js
            (Currently we don't require it. So, it is better to remove it)*/
            button_back.remove();

            //mousePressed activity of the continue button
            continueBtn.mousePressed(()=>{
                //Hiding some elements
                continueBtn.hide();
                donut.visible = false;
                solText.hide();
                solText.position(windowWidth-900,440);
                solution.hide();

                //Stopping the donutVoice and recreating it with a different sound
                donutVoice.stop();
                donutVoice.remove();
                donutVoice = createAudio("assets6/gas.mp3");

                //Recreating sol
                solution.remove();
                solution = createElement('h2','A gas is a substance with no definite volume and no definite shape.');
                solution.position(windowWidth-900,480);
                solution.hide();

                //Recreating the destroyed player
                player = createSprite(80,120,440,80);
                player.addAnimation("pl1",playerImg);
                player.scale = 0.03;

                //Recreating quesImgSci3
                this.quesImgSci3.remove();
                this.quesImgSci3 = createImg("assets6/matter1.png");
                this.quesImgSci3.position(windowWidth-700,73); 
                this.quesImgSci3.size(230,140);

                //Recreating question6
                this.question6.remove();
                this.question6 = createElement('h2',"2)Which of these has no definite volume");
                this.question6.position(windowWidth-800,200);

                //Recreating all option's text
                op1text.remove();
                op2text.remove();
                op3text.remove();
                op4text.remove();
                
                op1text = createElement('h3',"Liquid");
                op1text.position(windowWidth-150,225);

                op2text = createElement('h3',"Matter");
                op2text.position(windowWidth-150,527);

                op3text = createElement('h3',"Gas");
                op3text.position(windowWidth-150,75);

                op4text = createElement('h3',"Solid");
                op4text.position(windowWidth-150,377);

                //Resetting the option sprites and positioning them
                reset(op1);
                reset(op2);
                reset(op3);
                reset(op4);

                op1.y = 250;
                op2.y = 550;
                op3.y = 100;
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
                    solText.position(windowWidth-840,427);
                    solution.hide();

                    //Stopping the donutVoice and recreating it with a different sound
                    donutVoice.stop();
                    donutVoice.remove();
                    donutVoice = createAudio("assets6/random.mp3");
     
                    //Recreating sol
                    solution.remove();
                    solution = createElement('h2','Gas particles are in constant random motion');
                    solution.position(windowWidth-840,467);
                    solution.hide();

                    //Recreating the destroyed player
                    player = createSprite(80,120,440,80);
                    player.addAnimation("pl1",playerImg);
                    player.scale = 0.03;
            
                    //Recreating quesImgSci3
                    this.quesImgSci3.remove();
                    this.quesImgSci3 = createImg("assets6/gas1.gif");
                    this.quesImgSci3.position(windowWidth-676,55);
                    this.quesImgSci3.size(140,160);
                    
                    //Recreating question6
                    this.question6.remove();
                    this.question6 = createElement('h2','3)What state of matter does this picture show?');
                    this.question6.position(windowWidth-840,200);

                    //Recreating all option's text
                    op1text.remove();
                    op2text.remove();
                    op3text.remove();
                    op4text.remove();

                    op1text = createElement('h3',"Solid");
                    op1text.position(windowWidth-140,75);

                    op2text = createElement('h3',"Liquid");
                    op2text.position(windowWidth-140,225);

                    op3text = createElement('h3',"Gas");
                    op3text.position(windowWidth-140,377);

                    op4text = createElement('h3',"Matter");
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
                        //Hiding some elements
                        continueBtn.hide();
                        donut.visible = false;
                        solText.hide();
                        solText.position(windowWidth-900,440);
                        solution.hide();
            
                        //Stopping the donutVoice and recreating it with a different sound
                        donutVoice.stop();
                        donutVoice.remove();
                        donutVoice = createAudio("assets6/vapour.mp3");
        
                        //Creating removed solution
                        solution = createElement('h2','When water vapour gets cold, it turns to a liquid');
                        solution.position(windowWidth-900,480);
                        solution.hide();

                        //Recreating level element
                        this.level6.remove();
                        this.level6 = createElement('h2',"Level : Medium");
                        this.level6.position(20,0);

                        //Removing sol
                        sol.remove();

                        //Recreating the destroyed player
                        player = createSprite(80,120,440,80);
                        player.addAnimation("pl1",playerImg);
                        player.scale = 0.03;
                
                        //Recreating quesImgSci3
                        this.quesImgSci3.remove();
                        this.quesImgSci3 = createImg("assets6/liquid.jpg");
                        this.quesImgSci3.position(windowWidth-740,93);
                        this.quesImgSci3.size(150,120);
                        
                        //Recreating question6
                        this.question6.remove();
                        this.question6 = createElement('h2',"4)When water vapour gets cold, it turns to a..");
                        this.question6.position(windowWidth-900,200);

                        //Recreating all option's text
                        op1text.remove();
                        op2text.remove();
                        op3text.remove();
                        op4text.remove();

                        op1text = createElement('h3',"Solid");
                        op1text.position(windowWidth-150,527);

                        op2text = createElement('h3',"Rain");
                        op2text.position(windowWidth-150,225);

                        op3text = createElement('h3',"Liquid");
                        op3text.position(windowWidth-150,75);
                       

                        op4text = createElement('h3',"Ice");
                        op4text.position(windowWidth-150,377);

                        //Resetting the option sprites and positioning them
                        reset(op1);
                        reset(op2);
                        reset(op3);
                        reset(op4);

                        op1.y = 550;
                        op2.y = 250;
                        op3.y = 100;
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
                            solText.position(windowWidth-760,440);

                            //Stopping the donutVoice and recreating it with a different sound
                            donutVoice.stop();
                            donutVoice.remove();
                            donutVoice = createAudio("assets6/air.mp3");

                            //Recreating solution
                            solution.remove();
                            solution = createElement('h2','Air is a mixture of gases');
                            solution.position(windowWidth-760,480);
                            solution.hide();

                            //Recreating the destroyed player
                            player = createSprite(80,120,440,80);
                            player.addAnimation("pl1",playerImg);
                            player.scale = 0.03;
                    
                            //Recreating quesImgSci3
                            this.quesImgSci3.remove();
                            this.quesImgSci3 = createImg("assets6/mixture1.png");
                            this.quesImgSci3.position(windowWidth-660,80);
                            this.quesImgSci3.size(140,140);
                            
                            //Recreating question6
                            this.question6.remove();
                            this.question6 = createElement('h2','5)Give an example of a mixture.');
                            this.question6.position(windowWidth-760,210);

                            //Recreating all option's text
                            op1text.remove();
                            op2text.remove();
                            op3text.remove();
                            op4text.remove();
                         
                            op1text = createElement('h3',"Salt");
                            op1text.position(windowWidth-140,75);
                            
                            op2text = createElement('h3',"Sugar");
                            op2text.position(windowWidth-140,377);

                            op3text = createElement('h3',"Air");
                            op3text.position(windowWidth-140,225);

                            op4text = createElement('h3',"Water");
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
                                solution.remove();
                                sol.remove();

                                //Stopping the donutVoice and recreating it with a different sound
                                donutVoice.stop();
                                donutVoice.remove();
                                donutVoice = createAudio("assets6/boiling.mp3");

                                //Recreating level element
                                this.level6.remove();
                                this.level6 = createElement('h2',"Level : Hard");
                                this.level6.position(20,0);

                                //Recreating solution
                                solution = createElement('h2',"The boiling point of water is 100°C");
                                solution.position(windowWidth-800,480);
                                solution.hide();

                                //Recreating the destroyed player
                                player = createSprite(80,120,440,80);
                                player.addAnimation("pl1",playerImg);
                                player.scale = 0.03;
                        
                                //Recreating quesImgSci3
                                this.quesImgSci3.remove();
                                this.quesImgSci3 = createImg("assets6/boiling.gif");
                                this.quesImgSci3.position(windowWidth-700,110);
                                this.quesImgSci3.size(170,100);
                                
                                //Recreating question6
                                this.question6.remove();
                                this.question6 = createElement('h2',"6)What is the boiling point of water?");
                                this.question6.position(windowWidth-800,200);

                                //Recreating all option's text
                                op1text.remove();
                                op2text.remove();
                                op3text.remove();
                                op4text.remove();
                               
                                op1text = createElement('h3',"10°C");
                                op1text.position(windowWidth-140,377);

                                op2text = createElement('h3',"70°C");
                                op2text.position(windowWidth-140,225);

                                op3text = createElement('h3',"100°C");
                                op3text.position(windowWidth-140,527);

                                op4text = createElement('h4',"30°C");
                                op4text.position(windowWidth-140,75);
                                
                                //Resetting the option sprites and positioning them
                                reset(op1);
                                reset(op2);
                                reset(op3);
                                reset(op4);

                                op1.y = 400;
                                op2.y = 250;
                                op3.y = 550;
                                op4.y = 100;

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
                                    solText.position(windowWidth-840,440);
                                    solText.hide();

                                    //Stopping the donutVoice and recreating it with a different sound 
                                    donutVoice.stop();
                                    donutVoice.remove();
                                    donutVoice = createAudio("assets6/weight.mp3");

                                    //Recreating sol
                                    solution = createElement('h2',"Weight is the measure of gravity on an object");
                                    solution.position(windowWidth-840,480);
                                    solution.hide();
                                   
                                    //Recreating the destroyed player
                                    player = createSprite(80,120,440,80);
                                    player.addAnimation("pl1",playerImg);
                                    player.scale = 0.03;

                                    //Recreating quesImgMath1
                                    this.quesImgSci3.remove();
                                    this.quesImgSci3 = createImg("assets6/gravity.jpg");
                                    this.quesImgSci3.position(windowWidth-700,110);
                                    this.quesImgSci3.size(200,100);
                                    
                                    //Recreating question6
                                    this.question6.remove();
                                    this.question6 = createElement('h2',"7)What is the measure of gravity on an object?");
                                    this.question6.position(windowWidth-840,200);
        
                                    //Recreating all option's text
                                    op1text.remove();
                                    op2text.remove();
                                    op3text.remove();
                                    op4text.remove();

                                    op1text = createElement('h3',"Mass");
                                    op1text.position(windowWidth-140,75);

                                    op2text = createElement('h3',"Matter");
                                    op2text.position(windowWidth-140,225);
        
                                    op3text = createElement('h3',"Weight");
                                    op3text.position(windowWidth-140,377);

                                    op4text = createElement('h3',"Volume");
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
        
                                    //Recreating destroyed back button
                                    button_back = createImg('assets/back1.png');
                                    button_back.position(19, 550);
                                    button_back.hide();

                                    continueBtn.mousePressed(()=>{
                                      continueBtn.hide(); 
                                      
                                      //Stopping the donutVoice and hiding elements
                                      donutVoice.stop();
                                      //button_back.hide();
                                      this.level6.hide();
                                      this.quesImgSci3.hide();
                                      sol.hide();
                                      solText.hide();
                                      donut.visible = false;
                                      solution.remove();

                                      //Destroying and removing elements
                                      op1.destroy();
                                      op2.destroy();
                                      op3.destroy();
                                      op4.destroy();

                                      op1text.remove();
                                      op2text.remove();
                                      op3text.remove();
                                      op4text.remove();
                                      this.question6.remove();  

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
                                        this.level6.hide();
                                        this.quesImgSci3.hide();
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
                                        this.question6.remove();

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