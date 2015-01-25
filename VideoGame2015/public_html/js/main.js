/*/ create an new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
//var renderer = PIXI.autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
//document.body.appendChild(renderer.view);

//requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("./assets/bunny.png");
// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

function animate() {
    
    requestAnimFrame( animate );
    
    // just for fun, lets rotate mr rabbit a little
    bunny.rotation += 0.1;
    
    // render the stage  
    renderer.render(stage);
}*/


/*var scenesManager = tuto.Ezelia.ScenesManager;
 
        //create
        scenesManager.create(300, 400);
 
        //create a the game scene
        var game = scenesManager.createScene('intro', Introscene);
        var game = scenesManager.createScene('bunny', stage);
 
        scenesManager.goToScene('intro');*/


//***************************************

        //get reference of ScenesManager;
        var scenesManager = tuto.Ezelia.ScenesManager;
	
        //note the scale parameter is set to true
        scenesManager.create(900, 600, true);
	
        //create a the game scene
        var game = scenesManager.createScene('game', new tuto.Ezelia.GameScene());
        var intro = scenesManager.createScene('intro', new IntroScene());
        var menu = scenesManager.createScene('start', new StartScene());
        var gamesummary = scenesManager.createScene('gamesummary', new BackgroundStoryScene(
            {
                "text":"Game Summary Here", 
                "nextScene":"start", 
            }
        ));
        
        var background = scenesManager.createScene('background1', new BackgroundStoryScene(
            {
                "text":"You’re the Khan that had began it all, Genghis Khan. Your mother, and wife had been stolen from you, but you were able to not only bring them back from their snatcher’s grasp, but as well as unite mongolian tribes into one of the greatest and most powerful nomadic empires history had ever witness. It is 1211, fall season has been inching its way, now the rusty leaves on the trees are threatening to fall upon the steppes. A year ago you insulted that coward Emperor Weishowang, and rightfully so, and claimed that you the man most fit to lead the Jin Empire. Unfortunately, the emperor surprisingly took this to offense and created an order to execute one of your ambassadors. How rude, well that just won’t do. So, you’re now committed in this war against the Jin Empire, and this next battle, the first battle in the war, will be a very decisive fight. The Battle of Badger Mouth, you will initiate and march towards the enemy with most of your army being on the offensive. Along your side are four other generals, and you five will lead your army against  Emperor Weishowang and his military elites. May this victory be yours. ", 
                "nextScene":"start", 
            }
        ));

        scenesManager.goToScene('intro');
	//scenesManager.goToScene('background1');

    