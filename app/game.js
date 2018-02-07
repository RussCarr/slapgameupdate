var playerItems = []
var attacker = {
    name: "",
    health: 100,
    combatMoves: {
        combatAction: true,
        slap: {
            slapCount: 0,
            slapDamage: 1,
        },
        punch: {
            punchCount: 0,
            punchDamage: 5,
        },
        kick: {
            kickCount: 0,
            kickDamage: 10,
        },
    },

    specialMoves: {
        specialAction:false,
        doubleSlap: {
            doubleSlapCount: 0,
            doubleSlapDamage: 2,
        },
        upperPunch: {
            upperPunchCount: 0,
            upperPunchDamage: 7,
        },
        flyingKick: {
            flyingKickCount: 0,
            flyingKickDamage: 15,
        },
    },
    hitCountTotal: 0,
}

var victim = {
    name: "",
    health: 100,
    hitCountTotal: 0,
    protection:
        [
            {
                headBlock: 4,
                bodyBlock: 2,
                dodge: 3
            }
        ],
    blockCount: 0,
    blockCountTotal: 0,
}

function PlayerItems(attackMode, attackPower, attackDesc, attackEnhancementSwitch) {
    this.attackMode = attackMode;
    this.attackPower = attackPower;
    this.attackDesc = attackDesc;
    this.attackFun = attackEnhancementSwitch;
}

function addedItems() {
    doubleSlap = new PlayerItems("doubleSlap", 2.5, "You just pulled off a double slap, while they were unguarded", false)
    upperPunch = new PlayerItems("upperPunch", 8, "You just did a uppercut punch, that looked like it hurt", false)
    flyingKick = new PlayerItems("flyingKick", 25, "You just did an amazing flying kick, how did you pull that off?", false)
    playerItems.push(doubleSlap, upperPunch, flyingKick)
}

function itemOn(str) {
    
    debugger
    if (playerItems[1] == false) {
        [str].attackEnhancementSwitch == true
        enhancementProcess(str)
    } else {
        ([str].attackEnhancement == false)
        dehancementProcess(str)
    }
}

function enhancementProcess(str) {
    debugger
    if (str = 'doubleSlap') {
        attacker.combatMoves.slap.slapDamage = (attacker.combatMoves.slap.slapDamage + [str].attackPower)
    consolelog
    } else if
     (PlayerItems[str].attackMode == 'upperPunch') {
        attacker.combatMoves.slap.punchDamage = attacker.combatMoves.slap.slapDamage + PlayererItems.doubleSlap.attackPower
    } else if
        (PlayerItems[str].attackMode == 'flyingKick') {
        attacker.combatMoves.slap.kickDamage = attacker.combatMoves.slap.slapDamage + PlayererItems.doubleSlap.attackPower
    } else {
        update()
    }

}
function dehancementProcess(str) {
    if ([str].attackMode == 'doubleSlap') {
        attacker.combatMoves.slap.slapDamage = attacker.combatMoves.slap.slapDamage - PlayererItems.doubleSlap.attackPower
    } else if
     ([str].attackMode == 'upperPunch') {
        attacker.combatMoves.slap.punchDamage = attacker.combatMoves.slap.slapDamage - PlayererItems.doubleSlap.attackPower
    } else if
        ([str].attackMode == 'flyingKick') {
        attacker.combatMoves.slap.kickDamage = attacker.combatMoves.slap.slapDamage - PlayererItems.doubleSlap.attackPower
    } else {
        update()
    }

}
function attack(str) {
   // debugger
   
   if (str == "slap" || str == "kick" || str == "punch") {
     var combatAttack = attacker.combatMoves[str][str + 'Damage']; 
     var combatCount = attacker.combatMoves[str][str + 'Count'];
     actionResult()
    } else {
     var combatAttack = attacker.specialMoves[str][str + 'Damage']
     var combatCount = attacker.specialMoves[str][str + 'Count'];
    actionResult()
    }
   //var damageCounter = attacker.combatMoves[str][str + 'Damage'];
    //var damageSpecialCounter = attacker.combatMoves[str][str + 'Damage'];
    
    //var hitValue = attacker.combatMoves[str][str + 'Damage']; 

       function actionResult() {
        //var hitCountValue = 1;
        victim.hitCountTotal++ //= hitCountValue + victim.hitCountTotal;
        victim.health = (victim.health - combatAttack);
        
        

        //console.log(victim.hitCountTotal)
        //console.log(hitCountValue)
        //console.log()
        update()
    }
}
  //  else {
    //    console.log("no")
   //     return
   // }
//}



function reset() {
    victim.health = 100
    victim.hitCountTotal = 0
    attacker.slapCount = 0
    attacker.kickCount = 0
    attacker.punchCount = 0
    attacker.doubleSlapCount = 0
    attacker.flyingKickCount = 0
    attacker.upperPunchCount = 0
    update()

}
function update() {
    document.getElementById("healthDisplay").innerHTML = victim.health;
    document.getElementById("hitCounter").innerHTML = victim.hitCountTotal;
}













/*var attacker = {
    name: "",
    health: 100,
    combatMoves: {
        combatAction: true,
        slap: {
            name: "Slap",
            slapCount: 0,
            slapDamage: 1,

        },
        doubleSlap: {
            name: "Double Slap",
            doubleSlapCount: 0,
            doubleSlapDamage: 2,
            enhansementOn: true

            
        },
        punch: {
            name: "Punch",
            punchCount: 0,
            punchDamage: 5,
            

        },
        upperPunch: {
            name: "Upper Punch",
            upperPunchCount: 0,
            upperPunchDamage: 3,
        },
        
        kick: {
            name: "Kick",
            kickCount: 0,
            kickDamage: 10,
            
        },
        flyingKick: {
            name: "Flying Kick",
            flyingKickCount: 0,
            flyingKickDamage: 5,
        },
        
        
    },
    
    specialMoves: {
        specialAction: false,
        doubleSlap: {
            doubleSlapCount: 0,
            doubleSlapDamage: 2,
            enhansementOn: true,
        },
        upperPunch: {
            upperPunchCount: 0,
            upperPunchDamage: 3,
        },
        flyingKick: {
            flyingKickCount: 0,
            flyingKickDamage: 5,
        },
        
        hitCountTotal: 0,
        damageAttack: 0,
    },
}

var victim = {
    name: "",
    health: 100,
    hitCountTotal: 0,
    protection:
        [
            {
                headBlock: 1,
                bodyBlock: 2,
                dodge: 5,
                standStill: 0,
            }
        ],
    blockCount: 0,
    blockCountTotal: 0,
}

function PlayerItems(attackMode, attackPower, attackDesc, attackEnhancementSwitch) {
    this.attackMode = attackMode;
    this.attackPower = attackPower;
    this.attackDesc = attackDesc;
    this.attackFun = attackEnhancementSwitch;
}

function addedItems() {
    doubleSlap = new PlayerItems("doubleSlap", 2.5, "You just pulled off a double slap, while they were unguarded", false)
    upperPunch = new PlayerItems("upperPunch", 8, "You just did a uppercut punch, that looked like it hurt", false)
    flyingKick = new PlayerItems("flyingKick", 25, "You just did an amazing flying kick, how did you pull that off?", false)
    playerItems.push(doubleSlap, upperPunch, flyingKick)
}

function itemOn(str) {
    if (PlayerItems[str][attackEnhancement] == false) {
        PlayerItems[str].attackEnhancement == true
        enhancementProcess(str)
    } else {
        (PlayerItems[str].attackEnhancement == false)
        dehancementProcess(str)
    }
}

function enhancementProcess(str) {
    debugger
    if (str = 'doubleSlap') {
        attacker.combatMoves.slap.slapDamage = attacker.combatMoves.slap.slapDamage + [str].attackPower
    
    } else if
     (PlayerItems[str].attackMode == 'upperPunch') {
        attacker.combatMoves.slap.punchDamage = attacker.combatMoves.slap.slapDamage + PlayererItems.doubleSlap.attackPower
    } else if
        (PlayerItems[str].attackMode == 'flyingKick') {
        attacker.combatMoves.slap.kickDamage = attacker.combatMoves.slap.slapDamage + PlayererItems.doubleSlap.attackPower
    } else {
        update()
    }

}
function deenhancementProcess() {
    if (PlayerItems[str].attackmode == 'doubleSlap') {
        attacker.combatMoves.slap.slapDamage = attacker.combatMoves.slap.slapDamage - PlayererItems.doubleSlap.attackPower
    } else if
     (PlayerItems[str].attackmode == 'upperPunch') {
        attacker.combatMoves.slap.punchDamage = attacker.combatMoves.slap.slapDamage - PlayererItems.doubleSlap.attackPower
    } else if
        (PlayerItems[str].attackmode == 'flyingKick') {
        attacker.combatMoves.slap.kickDamage = attacker.combatMoves.slap.slapDamage - PlayererItems.doubleSlap.attackPower
    } else {
        update()
    }

}



function attack(str) {
    debugger
    if ((str === "slap") || (str === "kick") || (str === "punch")) {
        attacker.damageAttack = attacker.combatMoves[str][str + 'Damage'];
        document.getElementById('weaponUsed').innerHTML = attacker.combatMoves[str].name
        var hitCounter = attacker.combatMoves[str][str + 'Count'];
        console.log(hitcounter)
        actionResult()
    } else {
        return
    }
}

function getRanMod() {

    var test = attacker.damageAttack
    var choices = compChoice[1, 1, 1, 1];
    var compChoice = choices[Math.floor(Math.random() * 3)]



    for (var i = 0; i < victim.protection.length; i++) {
        compChoice = victim.protection[i];
    }


    var damageAttackMath = (test - compChoice);
    attacker.damageAttack = damageAttackMath
    console.log(damageAttackMath)
    actionResult()
}




function actionResult() {
    var test = attacker.damageAttack
    console.log(test)
    victim.hitCountTotal++
    victim.health = (victim.health - test);
    update()

}




//var playerItems = []



/*
function draw() {
    var template = ''
    for (var i = 0; i < playerItems.length; i++) {
        var items = playerItems[i]
        var itemsmoves = (items.attackFun)
        template += `
        <button onclick="${itemsmoves}">${items.attackMode}</button>
        `
 
 
    }
    document.getElementById('PlayerItems').innerHTML = template
    update()
}
 
 
function specialMoves() {
    addedItems()
    var moves = ''
    moves += `
            
`
document.getElementById('PlayerItems').innerHTML = "template"
update()
}
 
function victimInfo() {
attacker.name = prompt("What your name?", "Web Stalker?");
 
   victim.name = prompt("Please enter the name of who you want to bring pain to?", "maybe Mr. Trump...?");
play()
}
 
 
function play() {
   var template = '' 
   template += `
   
`
document.getElementById("start").innerHTML = template
console.log("help")
}
 
 
 
function reset() {
    victim.health = 100
    victim.hitCountTotal = 0
    attacker.slapCount = 0
    attacker.kickCount = 0
    attacker.punchCount = 0
    attacker.doubleSlapCount = 0
    attacker.flyingKickCount = 0
    attacker.upperPunchCount = 0
    update()
    
}

function update() {
    document.getElementById("healthDisplay").innerHTML = victim.health;
    document.getElementById("hitCounter").innerHTML = victim.hitCountTotal;
}

*/

for (let i = 0; i < numb.length; i++) {
    const numb = numb[i];
    
}