class Form5{
    constructor(){
        /*NOTE: There are some properties which have many elements/audios/images assigned to the same property.
        This is to avoid slow down of the program*/ 

        //Creating question image
        this.quesImgMath3 = createImg("");
        this.quesImgMath3.position(440,50);
        this.quesImgMath3.hide();
    
        //Creating level element
        this.level5 = createElement('h2',"");
        this.level5.position(20,0);
        this.level5.hide();

        //Creating question element
        this.question5 = createElement('h2',"");
        this.question5.position(240,200);
        this.question5.hide();

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
        donutVoice = createAudio("assets/time.mp3"); 
    }

    display(){
        //Giving background color
        background("#D3D3D3");

        //mousePressed activity of the ch1 button
        ch3m.mousePressed(()=>{
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
           
            //Recreating the
            /*donut.remove();
            donut = createSprite(170,500,50,50);
            donut.addAnimation("mrsDonut",donutAni);
            donut.scale = 0.3;*/

            //Positioning the invisible donut
            donut.x = 170;
            donut.visible = false;

            //Positioning sound buttons
            muteBtn.position(200,10);
            unmuteBtn.position(200,10);

            //Playing the help sound
            help.volume(0.5);
            help.play();

            /*Displaying the level element (NOTE: show function is not used here as there 
            are different levels assigned to the same property. {You could also experiment with show if you want to check})*/
            this.level5 = createElement('h2',"Level : Easy");
            this.level5.position(20,0);
      
            //Displaying the question element
            this.question5 = createElement('h2',"1)A line has how many endpoints?");
            this.question5.position(windowWidth-800,200);
           
            //Displaying the question image
            this.quesImgMath3 = createImg("assets5/line.png");
            this.quesImgMath3.position(windowWidth-740,150);
            //this.quesImgMath3.size(120,120);

            //Displaying the solution image
            solution = createElement('h2',"A line extends forever in both directions.It has no end points.");
            solution.position(windowWidth-800,480);
            solution.hide();

            //Recreating the solText
            solText = createElement('h2',"Here's the solution:");
            solText.position(windowWidth-800,440);
            solText.hide();
           
            /*The recreation of donutVoice is done here as there are many voices assigned to the same property
            (You could also experiment without this line if you want to check)*/
            donutVoice = createAudio("assets5/line.mp3");
       
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
            op1text = createElement('h3',"1");
            op1text.position(windowWidth-140,225);
            

            op2text = createElement('h3',"2");
            op2text.position(windowWidth-140,377);

            op3text = createElement('h3',"0");
            op3text.position(windowWidth-140,75);
            

            op4text = createElement('h3',"3");
            op4text.position(windowWidth-140,527);

            op1.y = 250;
            op2.y = 400;
            op3.y = 100;
            op4.y = 550;
           
            /*button_back is a global variable and is created in draw() of sketch.js
            (Currently we don't require it. So, it is better to remove it)*/
            button_back.remove();
    
                //mousePressed activity of the continue button
                continueBtn.mousePressed(()=>{
                    //Hiding some elements
                    continueBtn.hide();
                    donut.visible = false;
                    solText.hide();
                    solText.position(windowWidth-800,440);
                    solution.hide();

                    //Stopping the donutVoice and recreating it with a different sound
                    donutVoice.stop();
                    donutVoice.remove();
                    donutVoice = createAudio("assets5/360.mp3");

                    //Recreating sol
                    /*sol.remove();
                    sol = createImg('assets3/polygon?.png');
                    sol.size(660,260);
                    sol.position(windowWidth-850,410);
                    sol.hide();*/

                    //Displaying the solution image
                    solution.remove();
                    solution = createElement('h2',"1 degree is 1/360th part of a 360° circle");
                    solution.position(windowWidth-800,480);
                    solution.hide();

                    //Recreating the destroyed player
                    player = createSprite(80,120,440,80);
                    player.addAnimation("pl1",playerImg);
                    player.scale = 0.03;
                    player.x = 0

                    //Recreating quesImgMath2
                    this.quesImgMath3.remove();
                    this.quesImgMath3 = createImg("assets5/circle1.png");
                    this.quesImgMath3.position(windowWidth-700,70); 
                    this.quesImgMath3.size(170,150);

                    //Recreating question3
                    this.question5.remove();
                    this.question5 = createElement('h2',"2)One degree is _______ of a circle");
                    this.question5.position(windowWidth-800,200);

                    //Recreating all option's text
                    op1text.remove();
                    op2text.remove();
                    op3text.remove();
                    op4text.remove();
                    
                    op1text = createElement('h3',"1/4");
                    op1text.position(windowWidth-140,377);

                    op2text = createElement('h3',"1/180");
                    op2text.position(windowWidth-140,225);

                    op3text = createElement('h3',"1/360");
                    op3text.position(windowWidth-140,75);

                    op4text = createElement('h3',"1/120");
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
                        solText.hide();
                        solText.position(windowWidth-800,440);
                        solution.hide();

                        //Stopping the donutVoice and recreating it with a different sound
                        donutVoice.stop();
                        donutVoice.remove();
                        donutVoice = createAudio("assets5/45°.mp3");

                        //Recreating sol
                        /*sol.remove();
                        sol = createImg('assets/sqsol.png');
                        sol.position(windowWidth-710,420);
                        sol.hide();*/

                        //Displaying the solution image
                        solution.remove();
                        solution = createElement('h2',"A full circle is 360°. 360/8 = 45. So a° = 45°");
                        solution.position(windowWidth-800,480);
                        solution.hide();

                        //Recreating the destroyed player
                        player = createSprite(80,120,440,80);
                        player.addAnimation("pl1",playerImg);
                        player.scale = 0.03;
                
                        //Recreating quesImgMath2
                        this.quesImgMath3.remove();
                        this.quesImgMath3 = createImg("assets5/45circle.png");
                        this.quesImgMath3.position(windowWidth-680,68);
                        this.quesImgMath3.size(180,160);
                        
                        //Recreating question3
                        this.question5.remove();
                        this.question5 = createElement('h2',"3)How many degrees is each of the angles?");
                        this.question5.position(windowWidth-800,200);

                        //Recreating all option's text
                        op1text.remove();
                        op2text.remove();
                        op3text.remove();
                        op4text.remove();

                        op1text = createElement('h3',"15°");
                        op1text.position(windowWidth-140,377);

                        op2text = createElement('h3',"30°");
                        op2text.position(windowWidth-140,75);

                        op3text = createElement('h3',"45°");
                        op3text.position(windowWidth-140,225);

                        op4text = createElement('h3',"60°");
                        op4text.position(windowWidth-140,527);

                        //Resetting the option sprites and positioning them
                        reset(op1);
                        reset(op2);
                        reset(op3);
                        reset(op4);

                        op1.y = 400;
                        op2.y = 100;
                        op3.y = 250;
                        op4.y = 550;

                        //mousePressed activity of the continue button
                        continueBtn.mousePressed(()=>{
                            //Hiding some elements
                            continueBtn.hide();
                            donut.visible = false;
                            solText.position(windowWidth-850,440);
                            solText.hide();
                            solution.hide();

                            //Stopping the donutVoice and recreating it with a different sound
                            donutVoice.stop();
                            donutVoice.remove();
                            donutVoice = createAudio("assets5/acute.mp3");

                            //Recreating the level element
                            this.level5.remove();
                            this.level5 = createElement('h2',"Level : Medium");
                            this.level5.position(20,0);
           
                            //Recreating sol
                            /*sol.remove();
                            sol = createImg('assets/perimetersol3.png');
                            //sol.size(500,220);
                            sol.position(windowWidth-840,430);
                            sol.hide();*/

                            //Displaying the solution image
                            solution.remove();
                            solution = createElement('h2',"An acute angle is > 0° and < 90°");
                            solution.position(windowWidth-850,480);
                            solution.hide();

                            //Recreating the destroyed player
                            player = createSprite(80,120,440,80);
                            player.addAnimation("pl1",playerImg);
                            player.scale = 0.03;
                            
                            //Recreating quesImgMath2
                            this.quesImgMath3.remove();
                            this.quesImgMath3 = createImg("assets5/angle.png");
                            this.quesImgMath3.position(windowWidth-680,40);
                            this.quesImgMath3.size(200,200);
                    
                            //Recreating question3
                            this.question5.remove();
                            this.question5 = createElement('h2',"4)Angle ABC is 89 degrees. What type of angle is it?");
                            this.question5.position(windowWidth-850,210);

                          
                            //Recreating all option's text
                            op1text.remove();
                            op2text.remove();
                            op3text.remove();
                            op4text.remove();

                            op1text = createElement('h3',"Right angle");
                            op1text.position(windowWidth-140,377);

                            op2text = createElement('h3',"Obtuse angle");
                            op2text.position(windowWidth-140,75);

                            op3text = createElement('h3',"Acute angle");
                            op3text.position(windowWidth-140,527);

                            op4text = createElement('h3',"Zero angle");
                            op4text.position(windowWidth-140,225);

                            //Resetting the option sprites and positioning them
                            reset(op1);
                            reset(op2);
                            reset(op3);
                            reset(op4);

                            op1.y = 400;
                            op2.y = 100;
                            op3.y = 550;
                            op4.y = 250;

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
                                solText.position(windowWidth-800,440);
                                solText.hide();
                                solution.hide();

                                //Stopping the donutVoice and recreating it with a different sound
                                donutVoice.stop();
                                donutVoice.remove();
                                donutVoice = createAudio("assets5/radius.mp3");

                                //Recreating the level element
                                /*this.level5.remove();
                                this.level5 = createElement('h2',"Level : Medium");
                                this.level5.position(20,0);*/
                            
                                //Recreating sol
                                /*sol.remove();
                                sol = createImg('assets/solutionTri.png');
                                sol.position(windowWidth-840,430);
                                sol.hide();*/
                                
                                //Displaying the solution image
                                solution.remove();
                                solution = createElement('h2',"The circumference of a circle = π*diameter = 3.14*3 = 9.42 inches");
                                solution.position(windowWidth-800,480);
                                solution.hide();

                                //Recreating the destroyed player
                                player = createSprite(80,120,440,80);
                                player.addAnimation("pl1",playerImg);
                                player.scale = 0.03;
                               
                                //Recreating quesImgMath2
                                this.quesImgMath3.remove();
                                this.quesImgMath3 = createImg("assets5/3inch.png");
                                this.quesImgMath3.position(windowWidth-678,60);
                                this.quesImgMath3.size(180,150);
                                
                                //Recreating question3
                                this.question5.remove();
                                this.question5 = createElement('h2',"5)What is the circumference of this circle?");
                                this.question5.position(windowWidth-800,200);
    
                               

                                //Recreating all option's text
                                op1text.remove();
                                op2text.remove();
                                op3text.remove();
                                op4text.remove();
    
                                op1text = createElement('h3',"3.14 inches");
                                op1text.position(windowWidth-140,75);
    
                                op2text = createElement('h3',"6.14 inches");
                                op2text.position(windowWidth-140,225);

                                op3text = createElement('h3',"9.42 inches");
                                op3text.position(windowWidth-140,377);
    
                                op4text = createElement('h3',"9 inches");
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
                                    solText.position(windowWidth-800,430);
                                    solText.hide();
                                    solution.remove();

                                    //Stopping the donutVoice and recreating it with a different sound 
                                    donutVoice.stop();
                                    donutVoice.remove();
                                    donutVoice = createAudio("assets5/1unit.mp3");

                                    //Recreating the level element
                                    this.level5.remove();
                                    this.level5 = createElement('h2',"Level : Hard");
                                    this.level5.position(20,0);

                                    //Recreating sol
                                    //sol.remove();
                                    solution = createElement('h2','Circumference = π*diameter = π. ∴ diameter=1 unit');
                                    solution.position(windowWidth-800,470);
                                    solution.hide();

                                    //Displaying the solution image
                                    /*solution.remove();
                                    solution = createElement('h2',"The corners on a 3D shape are called vertices");
                                    solution.position(windowWidth-780,480);
                                    solution.hide();*/

                                    //Recreating the destroyed player
                                    player = createSprite(80,120,440,80);
                                    player.addAnimation("pl1",playerImg);
                                    player.scale = 0.03;

                                    //Recreating quesImgMath2
                                    this.quesImgMath3.remove();
                                    this.quesImgMath3 = createImg("assets5/πcircum.png");
                                    this.quesImgMath3.position(windowWidth-620,60);
                                    this.quesImgMath3.size(170,150);

                                    //Recreating question3
                                    this.question5.remove();
                                    this.question5 = createElement('h2',"6)If a circle's circumference = π, what is its diameter?");
                                    this.question5.position(windowWidth-800,200);
                                    
                                  
                                   
                                    //Recreating all option's text
                                    op1text.remove();
                                    op2text.remove();
                                    op3text.remove();
                                    op4text.remove();

                                    op1text = createElement('h3',"3.14 units");
                                    op1text.position(windowWidth-140,527);

                                    op2text = createElement('h3',"10 units");
                                    op2text.position(windowWidth-140,377);
        
                                    op3text = createElement('h3',"1 unit");
                                    op3text.position(windowWidth-140,75);
        
                                    op4text = createElement('h3',"31 units");
                                    op4text.position(windowWidth-140,225);

                                    //Resetting the option sprites and positioning them
                                    reset(op1);
                                    reset(op2);
                                    reset(op3);
                                    reset(op4);

                                    op1.y = 550;
                                    op2.y = 400;
                                    op3.y = 100;
                                    op4.y = 250;
            
                                    //mousePressed activity of the continue button
                                    continueBtn.mousePressed(()=>{
                                        //Hiding some elements
                                        continueBtn.remove();
                                        donut.visible = false;
                                        solText.position(windowWidth-800,430);
                                        solText.hide();
                                        solution.remove();

                                        //Stopping the donutVoice and recreating it with a different sound 
                                        donutVoice.stop();
                                        donutVoice.remove();
                                        donutVoice = createAudio("assets5/4pi.mp3");

                                        //Recreating the level element
                                        /*this.level5.remove();
                                        this.level5 = createElement('h2',"Level : Hard");
                                        this.level5.position(20,0);*/
                                       
                                        //Recreating sol
                                        solution.remove();
                                        solution = createElement('h2','Area = πr² = π(2)² = 4π cm²');
                                        solution.size(200,200);
                                        solution.position(windowWidth-800,470);
                                        solution.hide();
            
                                        //Recreating the destroyed player
                                        player = createSprite(80,120,440,80);
                                        player.addAnimation("pl1",playerImg);
                                        player.scale = 0.03;

                                        //Recreating quesImgMath2
                                        this.quesImgMath3.remove();
                                        this.quesImgMath3 = createImg("assets5/area.png");
                                        this.quesImgMath3.position(windowWidth-660,30);
                                        this.quesImgMath3.size(220,200);
                                        
                                        //Recreating question3
                                        this.question5.remove();
                                        this.question5 = createElement('h2',"7)What is the area of a circle whose radius is 2cm?");
                                        this.question5.position(windowWidth-800,200);
            
                                        //Recreating all option's text
                                        op1text.remove();
                                        op2text.remove();
                                        op3text.remove();
                                        op4text.remove();

                                        op1text = createElement('h3',"2π cm²");
                                        op1text.position(windowWidth-140,377);

                                        op2text = createElement('h3',"3π cm²");
                                        op2text.position(windowWidth-140,75);
            
                                        op3text = createElement('h3',"4π cm²");
                                        op3text.position(windowWidth-140,225);

                                        op4text = createElement('h3',"5π cm²");
                                        op4text.position(windowWidth-140,527);

                                        //Resetting the option sprites and positioning them
                                        reset(op1);
                                        reset(op2);
                                        reset(op3);
                                        reset(op4);
                                        
                                        op1.y = 400;
                                        op2.y = 100;
                                        op3.y = 250;
                                        op4.y = 550;
            
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
                                            this.level5.hide();
                                            this.quesImgMath3.hide();
                                            solution.hide();
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
                                            this.question5.remove();

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