class Form4 {
    constructor(){
        /*NOTE: There are some properties which have many elements/audios/images assigned to the same property.
        This is to avoid slow down of the program*/ 

        //Creating question image
        this.quesImgSci2 = createImg("");
        this.quesImgSci2.position(400,30);
        this.quesImgSci2.hide();
       
        //Creating level element
        this.level4 = createElement('h2',"");
        this.level4.position(20,0);
        this.level4.hide();

        //Creating question element
        this.question4 = createElement('h2',"");
        this.question4.position(240,210);
        this.question4.hide();

        //Creating (Here's the solution:) element 
        solText = createElement('h2',"Here's the solution:");
        solText.position(270,400);
        solText.hide();
         
        //Creating solution image
        sol = createImg('');
        sol.position(550,400);
        sol.hide();

        //
        solution = createElement('h2',"");
        solution.position(550,400);
        solution.hide();

        
        donutVoice = createAudio("assets/pen.mp3");

        
        /*introImg = createImg("assets/mrsDonut1.png");
        introImg.position(570,400);
        introImg.show();*/

        help = createAudio("assets/help1.mp3");


        //listen = createButton('Listen');
    }
    display(){
        //mousePressed activity of the ch1 button
        ch2s.mousePressed(()=>{
            //Hiding some elements
            ch1m.hide();
            ch2m.hide();
            ch3m.hide();
            math_logo.hide();
            ch1s.hide();
            ch2s.hide();
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
            help.volume(0.5);
            help.play();
        
            /*Displaying the level element (NOTE: show function is not used here as there 
            are different levels assigned to the same property. {You could also experiment with show if you want to check})*/
            this.level4 = createElement('h2',"Level : Easy");
            this.level4.position(20,0);
      
            //Displaying the question element
            this.question4 = createElement('h2',"1)What is the correct term for this grouping of stars, gas, and dust?");
            this.question4.position(windowWidth-900,200);

            //Displaying the question's 2nd line
            /*this.question4line2 = createElement('h2',"sharpener turns?");
            this.question4line2.position(windowWidth-660,233);*/
           
            //Displaying the question image
            this.quesImgSci2 = createImg("assets4/galaxy1.png");
            this.quesImgSci2.position(windowWidth-640,90);
            this.quesImgSci2.size(190,120);

            //Removing Sol (It is not required for this question)
            sol.remove();
           
            /*The recreation of donutVoice is done here as there are many voices assigned to the same property
            (You could also experiment without this line if you want to check)*/
            donutVoice = createAudio("assets4/galaxy.mp3");
       
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
            op3 = createSprite(windowWidth-110,250,70,30);
            reset(op3);

            op4.destroy();
            op4 = createSprite(windowWidth-110,400,70,30);
            reset(op4);
            
            //Displaying option's text on the option sprites
            op1text = createElement('h3',"Planet");
            op1text.position(windowWidth-140,75);

            op2text = createElement('h3',"Stars");
            op2text.position(windowWidth-140,527);

            op3text = createElement('h3',"Galaxy");
            op3text.position(windowWidth-140,225);

            op4text = createElement('h3',"Universe");
            op4text.position(windowWidth-140,377);

           
           
            //Recreating solution element
            solution.remove();
            solution = createElement('h2','A galaxy is a large group of stars, gas, and dust');
            solution.position(windowWidth-900,480);
            solution.hide();

            /*button_back is a global variable and is created in draw() of sketch.js
            (Currently we don't require it. So, it is better to remove it)*/
            button_back.remove();

            //mousePressed activity of the continue button
            continueBtn.mousePressed(()=>{
                //Hiding some elements
                //this.optextbSupport.hide();
                //this.question4line2.hide();
                continueBtn.hide();
                donut.visible = false;
                solText.hide();
                solText.position(windowWidth-900,440);
                solution.hide();

                //Stopping the donutVoice and recreating it with a different sound
                donutVoice.stop();
                donutVoice.remove();
                donutVoice = createAudio("assets4/solar system.mp3");

                //Recreating sol
                solution.remove();
                solution = createElement('h2','The solar system consists of the sun and everything that orbits the sun');
                //solution.size(300,300);
                solution.position(windowWidth-900,480);
                solution.hide();

                //Recreating the destroyed player
                player = createSprite(80,120,440,80);
                player.addAnimation("pl1",playerImg);
                player.scale = 0.03;

                //Recreating quesImgSci1
                this.quesImgSci2.remove();
                this.quesImgSci2 = createImg("assets4/solar1.jpg");
                this.quesImgSci2.position(windowWidth-750,73); 
                this.quesImgSci2.size(190,140);

                //Recreating question2
                this.question4.remove();
                this.question4 = createElement('h2',"2)Which term best describes the image shown?");
                this.question4.position(windowWidth-900,200);

                //Recreating all option's text
                op1text.remove();
                op2text.remove();
                op3text.remove();
                op4text.remove();
                
                op1text = createElement('h3',"Orbits");
                op1text.position(windowWidth-150,75);

                op2text = createElement('h3',"Universe");
                op2text.position(windowWidth-150,527);

                op3text = createElement('h3',"Solar system");
                op3text.position(windowWidth-150,225);

                op4text = createElement('h3',"Planets");
                op4text.position(windowWidth-150,377);

                //Resetting the option sprites and positioning them
                reset(op1);
                reset(op2);
                reset(op3);
                reset(op4);

                op1.y = 100;
                op2.y = 550;
                op3.y = 250;
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
                    donutVoice = createAudio("assets4/Mars.mp3");
     
                    //Recreating sol
                    solution.remove();
                    solution = createElement('h2','Mars is referred to as the "Red Planet"');
                    solution.position(windowWidth-840,467);
                    solution.hide();

                    //Recreating the destroyed player
                    player = createSprite(80,120,440,80);
                    player.addAnimation("pl1",playerImg);
                    player.scale = 0.03;
            
                    //Recreating quesImgSci1
                    this.quesImgSci2.remove();
                    this.quesImgSci2 = createImg("assets4/mars.png");
                    this.quesImgSci2.position(windowWidth-650,70);
                    this.quesImgSci2.size(140,140);
                    
                    //Recreating question2
                    this.question4.remove();
                    this.question4 = createElement('h2','3)What is this "Red Planet" that is 4th from the sun?');
                    this.question4.position(windowWidth-840,200);

                    //Recreating all option's text
                    op1text.remove();
                    op2text.remove();
                    op3text.remove();
                    op4text.remove();

                    op1text = createElement('h3',"Earth");
                    op1text.position(windowWidth-140,75);

                    op2text = createElement('h3',"Venus");
                    op2text.position(windowWidth-140,225);

                    op3text = createElement('h3',"Mars");
                    op3text.position(windowWidth-140,377);

                    op4text = createElement('h3',"Pluto");
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
                        donutVoice = createAudio("assets4/Earth.mp3");
        
                        //Creating removed solution
                        solution = createElement('h2','Earth is the only known planet to have bodies of liquid water on its surface.');
                        //solution.size(600,270);
                        solution.position(windowWidth-900,480);
                        solution.hide();

                        //Recreating level element
                        this.level4.remove();
                        this.level4 = createElement('h2',"Level : Medium");
                        this.level4.position(20,0);

                        //Removing sol
                        sol.remove();
                        /*sol = createImg('assets2/nucleusImg.png');
                        sol.position(340,400);
                        sol.hide();*/

                        //Recreating the destroyed player
                        player = createSprite(80,120,440,80);
                        player.addAnimation("pl1",playerImg);
                        player.scale = 0.03;
                
                        //Recreating quesImgSci1
                        this.quesImgSci2.remove();
                        this.quesImgSci2 = createImg("assets4/Earth.png");
                        this.quesImgSci2.position(windowWidth-690,93);
                        this.quesImgSci2.size(120,120);
                        
                        //Recreating question2
                        this.question4.remove();
                        this.question4 = createElement('h2',"4)Earth is the only planet in our solar system that has");
                        this.question4.position(windowWidth-900,200);

                        //Recreating all option's text
                        op1text.remove();
                        op2text.remove();
                        op3text.remove();
                        op4text.remove();

                        op1text = createElement('h3',"Volcanoes");
                        op1text.position(windowWidth-150,75);

                        op2text = createElement('h3',"Atmosphere");
                        op2text.position(windowWidth-150,225);

                        op3text = createElement('h3',"Liquid water");
                        op3text.position(windowWidth-150,527);
                       

                        op4text = createElement('h3',"Rocky surface");
                        op4text.position(windowWidth-150,377);

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
                            solText.position(windowWidth-840,400);
                            solution.remove();

                            //Stopping the donutVoice and recreating it with a different sound
                            donutVoice.stop();
                            donutVoice.remove();
                            donutVoice = createAudio("assets4/geo.mp3");

                            //Recreating level element
                           /* this.level4.remove();
                            this.level4 = createElement('h2',"Level : Medium");
                            this.level4.position(20,0);*/

                            //Creating removed sol
                            //sol.remove();
                            solution = createElement('h2','"Geo" in the word geosphere refers to land.');
                            solution.position(windowWidth-843,440);
                            solution.hide();

                            //Recreating the destroyed player
                            player = createSprite(80,120,440,80);
                            player.addAnimation("pl1",playerImg);
                            player.scale = 0.03;
                    
                            //Recreating quesImgSci1
                            this.quesImgSci2.remove();
                            this.quesImgSci2 = createImg("assets4/geosphere.png");
                            this.quesImgSci2.position(windowWidth-660,70);
                            this.quesImgSci2.size(140,140);
                            
                            //Recreating question2
                            this.question4.remove();
                            this.question4 = createElement('h2','5)The prefix "geo" in the word geosphere refers to');
                            this.question4.position(windowWidth-840,210);

                            //Recreating all option's text
                            op1text.remove();
                            op2text.remove();
                            op3text.remove();
                            op4text.remove();
                           

                            op1text = createElement('h3',"Space");
                            op1text.position(windowWidth-140,75);
                            
                            op2text = createElement('h3',"Air");
                            op2text.position(windowWidth-140,225);
                        

                            op3text = createElement('h3',"Land");
                            op3text.position(windowWidth-140,377);

                            op4text = createElement('h3',"Water");
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
                                solText.position(windowWidth-800,440);
                                solution.remove();
                                sol.remove();

                                //Stopping the donutVoice and recreating it with a different sound
                                donutVoice.stop();
                                donutVoice.remove();
                                donutVoice = createAudio("assets4/uranus.mp3");

                                //Recreating level element
                                this.level4.remove();
                                this.level4 = createElement('h2',"Level : Hard");
                                this.level4.position(20,0);

                                //Creating removed sol
                                sol.remove();
                                /*sol = createImg('assets2/soundSol.png');
                                sol.position(314,400);
                                sol.hide();*/
                                solution = createElement('h2',"Saturn is larger than Uranus");
                                solution.position(windowWidth-800,480);
                                solution.hide();

                                //Recreating the destroyed player
                                player = createSprite(80,120,440,80);
                                player.addAnimation("pl1",playerImg);
                                player.scale = 0.03;
                        
                                //Recreating quesImgSci1
                                this.quesImgSci2.remove();
                                this.quesImgSci2 = createImg("assets4/Uranus.png");
                                this.quesImgSci2.position(windowWidth-590,60);
                                this.quesImgSci2.size(140,140);
                                
                                //Recreating question2
                                this.question4.remove();
                                this.question4 = createElement('h2',"6)Which of the following planets is larger than Uranus?");
                                this.question4.position(windowWidth-800,200);

                                //Recreating all option's text
                                op1text.remove();
                                op2text.remove();
                                op3text.remove();
                                op4text.remove();
                               

                                op1text = createElement('h3',"Earth");
                                op1text.position(windowWidth-140,377);

                                op2text = createElement('h3',"Neptune");
                                op2text.position(windowWidth-140,225);

                                op3text = createElement('h3',"Saturn");
                                op3text.position(windowWidth-140,75);

                                op4text = createElement('h4',"Mars");
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
                                    continueBtn.remove();
                                    donut.visible = false;
                                    solution.remove();
                                    solText.position(windowWidth-840,440);
                                    solText.hide();

                                    //Stopping the donutVoice and recreating it with a different sound 
                                    donutVoice.stop();
                                    donutVoice.remove();
                                    donutVoice = createAudio("assets4/Hydrogen.mp3");

                                    //Recreating the level element
                                    /*this.level1.remove();
                                    this.level1 = createElement('h2',"Level : Hard");
                                    this.level1.position(20,0);*/
                                   
                                    //Recreating sol
                                    solution = createElement('h2',"Hydrogen gas is the most abundant in space");
                                    solution.position(windowWidth-840,480);
                                    solution.hide();
                                   
        
                                    //Recreating the destroyed player
                                    player = createSprite(80,120,440,80);
                                    player.addAnimation("pl1",playerImg);
                                    player.scale = 0.03;

                                    //Recreating quesImgMath1
                                    this.quesImgSci2.remove();
                                    this.quesImgSci2 = createImg("assets4/space.jpeg");
                                    this.quesImgSci2.position(windowWidth-620,87);
                                    this.quesImgSci2.size(120,120);
                                    
                                    //Recreating question1
                                    this.question4.remove();
                                    this.question4 = createElement('h2',"7)Which of the following gas is most abundant in space?");
                                    this.question4.position(windowWidth-840,200);
        
                                    //Recreating all option's text
                                    op1text.remove();
                                    op2text.remove();
                                    op3text.remove();
                                    op4text.remove();

                                    op1text = createElement('h3',"Helium");
                                    op1text.position(windowWidth-140,75);

                                    op2text = createElement('h3',"Oxygen");
                                    op2text.position(windowWidth-140,225);
        
                                    op3text = createElement('h3',"Hydrogen");
                                    op3text.position(windowWidth-140,527);

                                    op4text = createElement('h3',"Nitrogen");
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

                                    //mousePressed activities of back button
                                    button_back.mousePressed(()=>{
                                        //Resetting score
                                        score = score-score;

                                        //Stopping the donutVoice and hiding elements
                                        donutVoice.stop();
                                        button_back.hide();
                                        this.level4.hide();
                                        this.quesImgSci2.hide();
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
                                        this.question4.remove();

                                        //Positioning the sound buttons
                                        muteBtn.position(10,10);
                                        unmuteBtn.position(10,10);
                                    
                                        //Showing the elements of home page
                                        ch1m.show();
                                        ch2m.show();
                                        math_logo.show();
                                        ch1s.show();
                                        ch2s.show();
                                        science_logo.show();
                                        solution.remove();

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