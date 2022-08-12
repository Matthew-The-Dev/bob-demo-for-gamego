namespace SpriteKind {
    export const image = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const text = SpriteKind.create()
}
function wanderingtrader () {
    if (loadingdone) {
        informer.sayText("Hello there, traveler! It seems you are new here. So let me walk you through the rules.")
        pause(100)
        text.sayText("Press 'A' to continue.")
    }
}
let loadingdone = 0
let informer: Sprite = null
let text: Sprite = null
text = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.text)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.sayText("Assets from Microsoft and built for TinkerGen F4.", 2000, false)
scene.setBackgroundImage(assets.image`forest`)
music.playMelody("- C D F - F - F ", 120)
mySprite.sayText("Starting in 5 seconds... Hold down left for male and right for female.", 5000, false)
pause(5000)
if (controller.left.isPressed()) {
    mySprite = sprites.create(assets.image`boywhite`, SpriteKind.Player)
    controller.moveSprite(mySprite)
} else {
    if (controller.right.isPressed()) {
        mySprite = sprites.create(assets.image`GirlWhite`, SpriteKind.Player)
        controller.moveSprite(mySprite)
    }
}
informer = sprites.create(assets.image`informer`, SpriteKind.NPC)
mySprite.sayText("Press 'A' to start!")
if (controller.A.isPressed()) {
    loadingdone = 1
    pause(100)
    wanderingtrader()
}
