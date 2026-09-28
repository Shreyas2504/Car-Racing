var bgImage
var car1_img, car2_img, track
var fuelImage, coinImage, lifeImage
var obstacle1_img, obstacle2_img
var form, player, game
var playerCount, database, gameState
var allPlayers, car1, car2, fuels, coins, obstacles
var cars = []
var blastImg

function preload() {
bgImage = loadImage("assets/background.png")
car1_img = loadImage("assets/car1.png")
car2_img = loadImage("assets/car2.png")
track = loadImage("assets/track.jpg")
fuelImage = loadImage("assets/fuel.png")
coinImage = loadImage("assets/goldCoin.png")
lifeImage = loadImage("assets/life.png")
obstacle1_img = loadImage("assets/obstacle1.png")
obstacle2_img = loadImage("assets/obstacle2.png")
blastImg =loadImage("assets/blast.png")
}

function setup() {
createCanvas(windowWidth, windowHeight)
database = firebase.database()
game = new Game()
game.getState()
game.start()
}

function draw(){
background(bgImage)
if(playerCount ===2) {
    game.update(1)
}
if(gameState === 1){
    game.play()
}
if(gameState === 2) {
    game.showLeaderboard()
}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}