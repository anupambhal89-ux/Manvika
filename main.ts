scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f . . . . 
    . . . . . . . . . . . f f . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . f 5 f f . 
    5 f f f f f f f f f f f f f f . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f . . . f f f . . . . 
    . . . f . f . . . f . f . . . . 
    . . . f . f . . . f . f . . . . 
    . . . 5 . 5 . . . 5 . 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
