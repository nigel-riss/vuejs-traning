new Vue({
    el: "#app",
    data: {
        gameStarted: false,
        playerHP: 0,
        monsterHP: 0,
        gameLog: []
    },
    computed: {

    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
            this.playerHP = 100;
            this.monsterHP = 100;
            this.gameLog = [];
        },

        attack: function(multiplier) {
            multiplier = multiplier || 1;
            var playerDmg = this.random(10 * multiplier);
            var monsterDmg = this.random(10);
            var logEntry = {
                player: "Player hits Monster for " + playerDmg,
                monster: "Monster hits Player for " + monsterDmg
            };
            this.gameLog.unshift(logEntry);
            this.monsterHP -= playerDmg;
            this.playerHP -= monsterDmg;
            
            this.checkGameEnd();
        },
        
        heal: function() {
            var playerHeal = this.random(10);
            var monsterDmg = this.random(10);
            var logEntry = {
                player: "Player heals Himself for " + playerHeal,
                monster: "Monster hits Player for " + monsterDmg
            };
            this.gameLog.unshift(logEntry);
            this.playerHP -= monsterDmg;
            this.playerHP += playerHeal;
            
            this.checkGameEnd();
        },

        giveUp: function() {
            this.gameStarted = false;
        },

        random: function(maxNum) {
            return Math.floor(Math.random() * maxNum) + 1;
        },

        checkGameEnd() {
            if (this.playerHP <= 0) {
                if (confirm("Sorry you've lost. Restart game?")) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
                return;
            }

            if (this.monsterHP <= 0) {
                if (confirm("Congratulations! You defeat monster! Restart game?")) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
            }
        }
    }
});