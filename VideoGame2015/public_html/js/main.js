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

var background_badgermouth = scenesManager.createScene('background1', new BackgroundStoryScene(
    {
        "text":"You’re the Khan that had began it all, Genghis Khan. Your mother, and wife had been stolen from you, but you were able to not only bring them back from their snatcher’s grasp, but as well as unite mongolian tribes into one of the greatest and most powerful nomadic empires history had ever witness. It is 1211, fall season has been inching its way, now the rusty leaves on the trees are threatening to fall upon the steppes. A year ago you insulted that coward Emperor Weishowang, and rightfully so, and claimed that you the man most fit to lead the Jin Empire. Unfortunately, the emperor surprisingly took this to offense and created an order to execute one of your ambassadors. How rude, well that just won’t do. So, you’re now committed in this war against the Jin Empire, and this next battle, the first battle in the war, will be a very decisive fight. The Battle of Badger Mouth, you will initiate and march towards the enemy with most of your army being on the offensive. Along your side are four other generals, and you five will lead your army against  Emperor Weishowang and his military elites. May this victory be yours. ", 
        "nextScene":"strategy_badgermouth", 
    }
));

var strategy_badgermouth = scenesManager.createScene('strategy_badgermouth', new StrategyScene(
	//new BackgroundStoryScene(
    {
	// Object with current info details: ex. {'khan':'Ghengis Khan', 'khanPic':'assets/khanpic_ghengis', 'date':'Summer 1226'}
	"currentInfo": {
	    'khan': "Ghengis Khan (1162 - 1227)",
	    'khanPic': "assets/lill mongol.png",
	    'date': "Fall 1211",
	},
	// Object with battle details: ex. {'name':'Battle of Badger Mouth', 'description':'Enemy has strong...', 'map':'assets/map_bm.png'}
        "battleInfo":{
	    'name': "Battle of Badger Mouth",
	    'description': "Enemy has many many foot soldiers",
	    'map': "assets/map1219.png"
	},
	"wariorsAvaliable":[1],   // Array of warrior ids: ex. [1, 2, 4]
        "text":"You’re the Khan that had began it all, Genghis Khan. Your mother, and wife had been stolen from you, but you were able to not only bring them back from their snatcher’s grasp, but as well as unite mongolian tribes into one of the greatest and most powerful nomadic empires history had ever witness. It is 1211, fall season has been inching its way, now the rusty leaves on the trees are threatening to fall upon the steppes. A year ago you insulted that coward Emperor Weishowang, and rightfully so, and claimed that you the man most fit to lead the Jin Empire. Unfortunately, the emperor surprisingly took this to offense and created an order to execute one of your ambassadors. How rude, well that just won’t do. So, you’re now committed in this war against the Jin Empire, and this next battle, the first battle in the war, will be a very decisive fight. The Battle of Badger Mouth, you will initiate and march towards the enemy with most of your army being on the offensive. Along your side are four other generals, and you five will lead your army against  Emperor Weishowang and his military elites. May this victory be yours. ", 
        "nextScene":"start", 
    }
));

scenesManager.goToScene('strategy_badgermouth');
