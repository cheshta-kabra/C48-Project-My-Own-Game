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
            donutVoice = createAudio("assets3/hexagon.mp3");
       
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
                    solText.position(windowWidth-780,440);
                    solution.hide();

                    //Stopping the donutVoice and recreating it with a different sound
                    donutVoice.stop();
                    donutVoice.remove();
                    donutVoice = createAudio("assets3/polygon.mp3");

                    //Recreating sol
                    /*sol.remove();
                    sol = createImg('assets3/polygon?.png');
                    sol.size(660,260);
                    sol.position(windowWidth-850,410);
                    sol.hide();*/

                    //Displaying the solution image
                    solution.remove();
                    solution = createElement('h2',"Polygon is a simple closed figure formed by line segments");
                    solution.position(windowWidth-780,480);
                    solution.hide();

                    //Recreating the destroyed player
                    player = createSprite(80,120,440,80);
                    player.addAnimation("pl1",playerImg);
                    player.scale = 0.03;
                    player.x = 0

                    //Recreating quesImgMath2
                    this.quesImgMath3.remove();
                    this.quesImgMath3 = createImg("assets3/polygon.png");
                    this.quesImgMath3.position(windowWidth-680,80); 
                    this.quesImgMath3.size(130,130);

                    //Recreating question3
                    this.question5.remove();
                    this.question5 = createElement('h2',"2)The above figure can be called as a _");
                    this.question5.position(windowWidth-800,200);

                    //Recreating all option's text
                    op1text.remove();
                    op2text.remove();
                    op3text.remove();
                    op4text.remove();
                    
                    op1text = createElement('h3',"Line");
                    op1text.position(windowWidth-140,75);

                    op2text = createElement('h3',"Ray");
                    op2text.position(windowWidth-140,225);

                    op3text = createElement('h3',"Polygon");
                    op3text.position(windowWidth-140,377);

                    op4text = createElement('h3',"None");
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
                        solText.position(windowWidth-780,440);
                        solution.hide();

                        //Stopping the donutVoice and recreating it with a different sound
                        donutVoice.stop();
                        donutVoice.remove();
                        donutVoice = createAudio("assets3/edges.mp3");

                        //Recreating sol
                        /*sol.remove();
                        sol = createImg('assets/sqsol.png');
                        sol.position(windowWidth-710,420);
                        sol.hide();*/

                        //Displaying the solution image
                        solution.remove();
                        solution = createElement('h2',"An edge is where two faces meet");
                        solution.position(windowWidth-780,480);
                        solution.hide();

                        //Recreating the destroyed player
                        player = createSprite(80,120,440,80);
                        player.addAnimation("pl1",playerImg);
                        player.scale = 0.03;
                
                        //Recreating quesImgMath2
                        this.quesImgMath3.remove();
                        this.quesImgMath3 = createImg("assets3/cube.png");
                        this.quesImgMath3.position(windowWidth-693,80);
                        this.quesImgMath3.size(200,140);
                        
                        //Recreating question3
                        this.question5.remove();
                        this.question5 = createElement('h2',"3)The lines on a 3D shape are called");
                        this.question5.position(windowWidth-800,200);

                        //Recreating all option's text
                        op1text.remove();
                        op2text.remove();
                        op3text.remove();
                        op4text.remove();

                        op1text = createElement('h3',"Lines");
                        op1text.position(windowWidth-140,377);

                        op2text = createElement('h3',"Vertices");
                        op2text.position(windowWidth-140,75);

                        op3text = createElement('h3',"Edges");
                        op3text.position(windowWidth-140,225);

                        op4text = createElement('h3',"Faces");
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
                            solText.position(windowWidth-820,440);
                            solText.hide();
                            solution.hide();

                            //Stopping the donutVoice and recreating it with a different sound
                            donutVoice.stop();
                            donutVoice.remove();
                            donutVoice = createAudio("assets3/prism1.mp3");

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
                            solution = createElement('h2',"A triangular prism has 5 faces");
                            solution.position(windowWidth-820,480);
                            solution.hide();

                            //Recreating the destroyed player
                            player = createSprite(80,120,440,80);
                            player.addAnimation("pl1",playerImg);
                            player.scale = 0.03;
                            
                            //Recreating quesImgMath2
                            this.quesImgMath3.remove();
                            this.quesImgMath3 = createImg("assets3/prism.png");
                            this.quesImgMath3.position(windowWidth-667,115);
                            this.quesImgMath3.size(140,100);
                            
                            //Recreating question3
                            this.question5.remove();
                            this.question5 = createElement('h2',"4)How many faces does a triangular prism have?");
                            this.question5.position(windowWidth-850,210);

                          
                            //Recreating all option's text
                            op1text.remove();
                            op2text.remove();
                            op3text.remove();
                            op4text.remove();

                            op1text = createElement('h3',"6 faces");
                            op1text.position(windowWidth-140,377);

                            op2text = createElement('h3',"4 faces");
                            op2text.position(windowWidth-140,75);

                            op3text = createElement('h3',"5 faces");
                            op3text.position(windowWidth-140,225);

                            op4text = createElement('h3',"3 faces");
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
                                solText.position(windowWidth-780,440);
                                solText.hide();
                                solution.hide();

                                //Stopping the donutVoice and recreating it with a different sound
                                donutVoice.stop();
                                donutVoice.remove();
                                donutVoice = createAudio("assets3/vertices.mp3");

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
                                solution = createElement('h2',"The corners on a 3D shape are called vertices");
                                solution.position(windowWidth-780,480);
                                solution.hide();

                                //Recreating the destroyed player
                                player = createSprite(80,120,440,80);
                                player.addAnimation("pl1",playerImg);
                                player.scale = 0.03;
                               
                                //Recreating quesImgMath2
                                this.quesImgMath3.remove();
                                this.quesImgMath3 = createImg("assets3/corner.png");
                                this.quesImgMath3.position(windowWidth-678,83);
                                this.quesImgMath3.size(200,140);
                                
                                //Recreating question3
                                this.question5.remove();
                                this.question5 = createElement('h2',"5)The corners on a 3D shape are called");
                                this.question5.position(windowWidth-800,200);
    
                               

                                //Recreating all option's text
                                op1text.remove();
                                op2text.remove();
                                op3text.remove();
                                op4text.remove();
    
                                op1text = createElement('h3',"outlines");
                                op1text.position(windowWidth-140,75);
    
                                op2text = createElement('h3',"dots");
                                op2text.position(windowWidth-140,225);

                                op3text = createElement('h3',"vertices");
                                op3text.position(windowWidth-140,377);
    
                                op4text = createElement('h3',"points");
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
                                    solText.position(windowWidth-780,430);
                                    solText.hide();
                                    solution.remove();

                                    //Stopping the donutVoice and recreating it with a different sound 
                                    donutVoice.stop();
                                    donutVoice.remove();
                                    donutVoice = createAudio("assets3/10cubes.mp3");

                                    //Recreating the level element
                                    this.level5.remove();
                                    this.level5 = createElement('h2',"Level : Hard");
                                    this.level5.position(20,0);

                                    //Recreating sol
                                    //sol.remove();
                                    sol = createImg('assets3/10sol.png');
                                    sol.position(windowWidth-810,420);
                                    sol.hide();

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
                                    this.quesImgMath3 = createImg("assets3/10cubes.png");
                                    this.quesImgMath3.position(windowWidth-637,75);
                                    this.quesImgMath3.size(170,150);

                                    //Recreating question3
                                    this.question5.remove();
                                    this.question5 = createElement('h2',"6)How many cubes are there in the given figure");
                                    this.question5.position(windowWidth-800,200);
                                    
                                  
                                   
                                    //Recreating all option's text
                                    op1text.remove();
                                    op2text.remove();
                                    op3text.remove();
                                    op4text.remove();

                                    op1text = createElement('h3',"6 cubes");
                                    op1text.position(windowWidth-140,75);

                                    op2text = createElement('h3',"8 cubes");
                                    op2text.position(windowWidth-140,377);
        
                                    op3text = createElement('h3',"10 cubes");
                                    op3text.position(windowWidth-140,527);
        
                                    op4text = createElement('h3',"9 cubes");
                                    op4text.position(windowWidth-140,225);

                                    //Resetting the option sprites and positioning them
                                    reset(op1);
                                    reset(op2);
                                    reset(op3);
                                    reset(op4);

                                    op1.y = 100;
                                    op2.y = 400;
                                    op3.y = 550;
                                    op4.y = 250;
            
                                    //mousePressed activity of the continue button
                                    continueBtn.mousePressed(()=>{
                                        //Hiding some elements
                                        continueBtn.remove();
                                        donut.visible = false;
                                        solText.position(windowWidth-780,430);
                                        solText.hide();
                                        solution.remove();

                                        //Stopping the donutVoice and recreating it with a different sound 
                                        donutVoice.stop();
                                        donutVoice.remove();
                                        donutVoice = createAudio("assets3/net.mp3");

                                        //Recreating the level element
                                        /*this.level5.remove();
                                        this.level5 = createElement('h2',"Level : Hard");
                                        this.level5.position(20,0);*/
                                       
                                        //Recreating sol
                                        sol.remove();
                                        sol = createImg('assets3/cubenet.gif');
                                        sol.size(200,200);
                                        sol.position(windowWidth-750,430);
                                        sol.hide();
            
                                        //Recreating the destroyed player
                                        player = createSprite(80,120,440,80);
                                        player.addAnimation("pl1",playerImg);
                                        player.scale = 0.03;

                                        //Recreating quesImgMath2
                                        this.quesImgMath3.remove();
                                        this.quesImgMath3 = createImg("assets3/cubenet.png");
                                        this.quesImgMath3.position(windowWidth-680,30);
                                        this.quesImgMath3.size(200,200);
                                        
                                        //Recreating question3
                                        this.question5.remove();
                                        this.question5 = createElement('h2',"7)Can this net be folded into a cube?");
                                        this.question5.position(windowWidth-800,200);
            
                                        //Recreating all option's text
                                        op1text.remove();
                                        op2text.remove();
                                        op3text.remove();
                                        op4text.remove();

                                        op1text = createElement('h3',"Can't say");
                                        op1text.position(windowWidth-140,377);

                                        op2text = createElement('h3',"No");
                                        op2text.position(windowWidth-140,225);
            
                                        op3text = createElement('h3',"Yes");
                                        op3text.position(windowWidth-140,75);

                                        op4text = createElement('h3',"All");
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
                                            this.question5.remove();

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