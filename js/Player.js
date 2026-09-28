class Player {
    constructor() {
        this.name = null
        this.index = null
        this.positionX = 0
        this.positionY = 0 
        this.rank = 0
        this.fuel = 185
        this.life = 185
        this.score = 0
    }

    addPlayer() {
        var playerIndex = "players/player" + this.index
        if(this.index === 1) {
            this.positionX = width/2 - 100
        }
        else{
            this.positionX = width/2 + 100
        }
        database.ref(playerIndex).set({
            name : this.name,
            positionX : this.positionX,
            positionY : this.positionY,
            rank : this.rank,
            score : this.score
        })
    }

    getDistance() {
        database.ref("players/player" + this.playerIndex).on("value", (data)=>{
            var value = data.val()
            this.positionX = value.positionX
            this.positionY = value.positionY
        })
    }

    getCount() {
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val()
        })
    }

    updateCount(count) {
        database.ref("/").update({
            playerCount : count
        })
    } 

    update() {
        database.ref("players/player" + this.index).update({
            positionX : this.positionX,
            positionY : this.positionY,
            rank : this.rank,
            life : this.life,
            score : this.score
        })
    }

    static getPlayersInfo() {
        database.ref("players").on("value", (data)=>{
            allPlayers = data.val()
        })
    }

    getCarsAtEnd() {
        database.ref("carsAtEnd").on("value", (data)=>{
            this.rank = data.val()
        })
    }

    static updateCarsAtEnd(rank) {
        database.ref("/").update({
            carsAtEnd : rank
        })
    }
}