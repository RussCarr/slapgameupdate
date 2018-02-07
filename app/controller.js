//controller

//privite

function Controller() {
    var gameService = new GameService



    //plubic

    //attack


    this.fight = function fight(str) {
        gameService.fight(str)
        gameService.update()
    }
    this.update = function update() {
        gameService.update()


    }
    this.reset = function reset() {
        gameService.reset()
        gameService.update()
    }
    this.upgrade = function upgrade(str) {
        gameService.upgrade(str)
        
    }
   

}

