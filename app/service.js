//service
function GameService() {
    //privite


    function GameMod(name, strength, Desc, ) {
        this.name = name
        this.strength = strength
        this.desc = desc
        this.active = false
    }

    function PlayerSetting(name, health, slap, punch, kick) {
        this.name = name
        this.health = health
        this.maxhealth = health
        this.combatMoves = {
            slap: slap,
            punch: punch,
            kick: kick,
        }
        this.hitCount = 0
        this.blockCount = 0
        this.upgrades = []
    }

    var attacker = new PlayerSetting("Killer", 100, 1, 5, 10);
    var victim = new PlayerSetting("Clown", 100, 15, 2, 0);

    function PlayerItem() {
        doubleSlap = new PlayerItem("doubleSlap", 2.5, "Double Slap")
        upperPunch = new PlayerItem("upperPunch", 8, "Upper Punch")
        flyingKick = new PlayerItem("flyingKick", 25, "Flying Kick")

        PlayerItems.push(doubleSlap, upperPunch, flyingKick)
    }
    //plubic


    //player attack
    function attackMods() {
        var total = 0;

        if (GameMod[str].active = true) {
            return GameMod[str].active = false

        } else if
             (str.active = false) {
            for (var i = 0; i < attacker.combatMoves.length; i++) {
                var item = attacker.upgrades[i];
                total += GameMod.strength
            }
            GameMod[str].active = true
            return total
        }
    };


    this.upgrade = function upgrade(str) {
        attacker.upgrades.push(GameMod[str])
    }

    this.fight = function fight(str) {
        victim.health = (victim.health -= attacker.combatMoves[str]);

        attacker.hitCount++

    }

    this.update = function update() {
        document.getElementById('healthDisplay').innerHTML = victim.health;
        document.getElementById('hitCounter').innerHTML = attacker.hitCount;
    }
    this.reset = function reset() {
        victim.health = 100
        attacker.hitCount = 0

    }

}

//return JSON.parse(JSON.stringify(victim))






