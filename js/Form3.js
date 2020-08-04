class Form3{
    constructor(){
        /*NOTE: There are some properties which have many elements/audios/images assigned to the same property.
        This is to avoid slow down of the program*/ 

        //Creating question image
        this.quesImgMath2 = createImg("");
        this.quesImgMath2.position(440,50);
        this.quesImgMath2.hide();
    
        //Creating level element
        this.level3 = createElement('h2',"");
        this.level3.position(20,0);
        this.level3.hide();

        //Creating question element
        this.question3 = createElement('h2',"");
        this.question3.position(240,200);
        this.question3.hide();

        //Creating (Here's the solution:) element 
        solText = createElement('h2',"Here's the solution:");
        solText.position(320,350);
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
        ch2m.mousePressed(()=>{
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
            sol.remove();
        
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
            this.level3 = createElement('h2',"Level : Easy");
            this.level3.position(20,0);
      
            //Displaying the question element
            this.question3 = createElement('h2',"1)What is the name of this shape?");
            this.question3.position(windowWidth-800,200);
           
            //Displaying the question image
            this.quesImgMath2 = createImg("assets3/hexagon.png");
            this.quesImgMath2.position(windowWidth-680,80);
            this.quesImgMath2.size(120,120);

            //Displaying the solution image
            solution = createElement('h2',"A hexagon has 6 sides and 6 angles");
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
            op3text = createElement('h3',"Hexagon");
            op3text.position(windowWidth-140,75);

            op2text = createElement('h3',"Square");
            op2text.position(windowWidth-140,225);

            op1text = createElement('h3',"Star");
            op1text.position(windowWidth-140,377);

            op4text = createElement('h3',"Circle");
            op4text.position(windowWidth-140,527);

            op1.y = 400;
            op2.y = 250;
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
                    donutVoice = createAudio("assets3/polygon.mp3");

                    //Displaying the solution image
                    solution.remove();
                    solution = createElement('h2',"Polygon is a simple closed figure formed by line segments");
                    solution.position(windowWidth-800,480);
                    solution.hide();

                    //Recreating the destroyed player
                    player = createSprite(80,120,440,80);
                    player.addAnimation("pl1",playerImg);
                    player.scale = 0.03;
                    player.x = 0

                    //Recreating quesImgMath2
                    this.quesImgMath2.remove();
                    this.quesImgMath2 = createImg("assets3/polygon.png");
                    this.quesImgMath2.position(windowWidth-680,80); 
                    this.quesImgMath2.size(130,130);

                    //Recreating question3
                    this.question3.remove();
                    this.question3 = createElement('h2',"2)The above figure can be called as a _");
                    this.question3.position(windowWidth-800,200);

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
                        solText.position(windowWidth-800,440);
                        solution.hide();

                        //Stopping the donutVoice and recreating it with a different sound
                        donutVoice.stop();
                        donutVoice.remove();
                        donutVoice = createAudio("assets3/edges.mp3");

                        //Displaying the solution image
                        solution.remove();
                        solution = createElement('h2',"An edge is where two faces meet");
                        solution.position(windowWidth-800,480);
                        solution.hide();

                        //Recreating the destroyed player
                        player = createSprite(80,120,440,80);
                        player.addAnimation("pl1",playerImg);
                        player.scale = 0.03;
                
                        //Recreating quesImgMath2
                        this.quesImgMath2.remove();
                        this.quesImgMath2 = createImg("assets3/cube.png");
                        this.quesImgMath2.position(windowWidth-693,80);
                        this.quesImgMath2.size(200,140);
                        
                        //Recreating question3
                        this.question3.remove();
                        this.question3 = createElement('h2',"3)The lines on a 3D shape are called");
                        this.question3.position(windowWidth-800,200);

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
                            solText.position(windowWidth-850,440);
                            solText.hide();
                            solution.hide();

                            //Stopping the donutVoice and recreating it with a different sound
                            donutVoice.stop();
                            donutVoice.remove();
                            donutVoice = createAudio("assets3/prism1.mp3");

                            //Recreating the level element
                            this.level3.remove();
                            this.level3 = createElement('h2',"Level : Medium");
                            this.level3.position(20,0);

                            //Displaying the solution image
                            solution.remove();
                            solution = createElement('h2',"A triangular prism has 5 faces");
                            solution.position(windowWidth-850,480);
                            solution.hide();

                            //Recreating the destroyed player
                            player = createSprite(80,120,440,80);
                            player.addAnimation("pl1",playerImg);
                            player.scale = 0.03;
                            
                            //Recreating quesImgMath2
                            this.quesImgMath2.remove();
                            this.quesImgMath2 = createImg("assets3/prism.png");
                            this.quesImgMath2.position(windowWidth-667,115);
                            this.quesImgMath2.size(140,100);
                            
                            //Recreating question3
                            this.question3.remove();
                            this.question3 = createElement('h2',"4)How many faces does a triangular prism have?");
                            this.question3.position(windowWidth-850,210);

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
                                solText.position(windowWidth-800,440);
                                solText.hide();
                                solution.hide();

                                //Stopping the donutVoice and recreating it with a different sound
                                donutVoice.stop();
                                donutVoice.remove();
                                donutVoice = createAudio("assets3/vertices.mp3");

                                //Displaying the solution image
                                solution.remove();
                                solution = createElement('h2',"The corners on a 3D shape are called vertices");
                                solution.position(windowWidth-800,480);
                                solution.hide();

                                //Recreating the destroyed player
                                player = createSprite(80,120,440,80);
                                player.addAnimation("pl1",playerImg);
                                player.scale = 0.03;
                               
                                //Recreating quesImgMath2
                                this.quesImgMath2.remove();
                                this.quesImgMath2 = createImg("assets3/corner.png");
                                this.quesImgMath2.position(windowWidth-678,83);
                                this.quesImgMath2.size(200,140);
                                
                                //Recreating question3
                                this.question3.remove();
                                this.question3 = createElement('h2',"5)The corners on a 3D shape are called");
                                this.question3.position(windowWidth-800,200);

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
                                    solText.position(windowWidth-800,430);
                                    solText.hide();
                                    solution.remove();

                                    //Stopping the donutVoice and recreating it with a different sound 
                                    donutVoice.stop();
                                    donutVoice.remove();
                                    donutVoice = createAudio("assets3/10cubes.mp3");

                                    //Recreating the level element
                                    this.level3.remove();
                                    this.level3 = createElement('h2',"Level : Hard");
                                    this.level3.position(20,0);

                                    //Creating sol
                                    sol = createImg('assets3/10sol.png');
                                    sol.position(windowWidth-830,420);
                                    sol.hide();

                                    //Recreating the destroyed player
                                    player = createSprite(80,120,440,80);
                                    player.addAnimation("pl1",playerImg);
                                    player.scale = 0.03;

                                    //Recreating quesImgMath2
                                    this.quesImgMath2.remove();
                                    this.quesImgMath2 = createImg("assets3/10cubes.png");
                                    this.quesImgMath2.position(windowWidth-637,75);
                                    this.quesImgMath2.size(170,150);

                                    //Recreating question3
                                    this.question3.remove();
                                    this.question3 = createElement('h2',"6)How many cubes are there in the given figure");
                                    this.question3.position(windowWidth-800,200);
                               
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
                                        continueBtn.remove();
                                        continueBtn = createButton('View score');
                                        continueBtn.position(windowWidth-350,610);
                                        continueBtn.size(200,40);
                                        continueBtn.style('background-color',"yellow");
                                        continueBtn.hide();

                                        //Hiding some elements
                                        donut.visible = false;
                                        solText.position(windowWidth-780,430);
                                        solText.hide();
                                        solution.remove();

                                        //Stopping the donutVoice and recreating it with a different sound 
                                        donutVoice.stop();
                                        donutVoice.remove();
                                        donutVoice = createAudio("assets3/net.mp3");

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
                                        this.quesImgMath2.remove();
                                        this.quesImgMath2 = createImg("assets3/cubenet.png");
                                        this.quesImgMath2.position(windowWidth-680,30);
                                        this.quesImgMath2.size(200,200);
                                        
                                        //Recreating question3
                                        this.question3.remove();
                                        this.question3 = createElement('h2',"7)Can this net be folded into a cube?");
                                        this.question3.position(windowWidth-800,200);
            
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

                                        continueBtn.mousePressed(()=>{
                                            continueBtn.hide();

                                            //Stopping the donutVoice and hiding elements
                                            donutVoice.stop();
                                            button_back.show();
                                            this.level3.hide();
                                            this.quesImgMath2.hide();
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
                                            this.question3.remove();

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
                                            this.level3.hide();
                                            this.quesImgMath2.hide();
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
                                            this.question3.remove();

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