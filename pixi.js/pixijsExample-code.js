// create a new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

// create a texture from an image path
// textures make images reusable, btw
var texture = PIXI.Texture.fromImage("bunny.png");
// create a new Spring using the texture
var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
// anchor = center of sprite as percentage (0 to 1)
// aka pivot
bunny.anchor.x = 1;
bunny.anchor.y = 1;

//move the sprite to the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);


function animate() {

	// loop back, keep animating
	requestAnimFrame( animate );
	
	// just for fun, lets rotate my rabbit a little
	bunny.rotation += 0.1;
	
	// render the stage
	renderer.render(stage);
}
