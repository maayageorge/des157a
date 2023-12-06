(function (){
    "use strict";
    console.log('reading js');

    const start = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const dice = document.getElementById('dice');
    const actions = document.getElementById('actions');
    const cont = document.querySelector('#continue');
    const score = document.getElementById('score');

    const angelSound = new Audio ('sounds/sparkle.mp3');
	const devilSound = new Audio ('sounds/negative.mp3');
    const winSound = new Audio ('sounds/win.mp3');

    cont.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('main').className = 'showing';
        document.getElementById('overlay').className = 'hidden';
    })

    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className= 'hidden';
        }
    });

    document.querySelector('#gamerules').addEventListener('click', function(){
        document.getElementById('overlay').className = 'showing';
        start.style.display = 'block';
        document.querySelector('article').innerHTML = `<h2>ㅤᵕ̈⸝⸝ How to Play</h2>
        <p>There are two players. The player whose turn it is rolls the dice. The total of the roll increases the score of the chosen player, unless either die comes up as a "one". If this happens, this player's turn is over,
                and it is the other player’s turn. After each roll, the current player can either roll again, (assuming a
                "one" was not rolled) or if the current player feels that luck is running thin, they can pass to the other
                player. The first player to get to get a score of 30 wins. Oh, and if you roll two "ones" (snake
                eyes), your current score gets zeroed out. So don’t do that.</p>
         <button id="close">close</button>`
        document.querySelector('#close').addEventListener('click', function(){
            document.getElementById('overlay').className = 'hidden';
        })
    });

    let gameData = {
        dice: [
            "images/dice1-.png",
            "images/dice2-.png",
            "images/dice3-.png",
            "images/dice4-.png",
            "images/dice5-.png",
            "images/dice6-.png",
        ],
        players: ["angel", "lilith"],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
    };

    start.addEventListener("click", function () {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = "<h2>the game has started</h2><br>";
        gameControl.innerHTML += '<button id="quit">wanna quit?</button>';
        gameControl.innerHTML += '<button id="gamerules">rules</button>';


        document.getElementById("quit").addEventListener("click", function () {
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>roll the dice for ${gameData.players[gameData.index]}</p>`;
        actions.innerHTML = '<button id="roll">roll the dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            console.log("roll the dice");
            throwDice();
        });
    }

    function throwDice() {
        actions.innerHTML = '';
        dice.innerHTML = '';

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        dice.innerHTML += `<img class="dice" src="${
            gameData.dice[gameData.roll1 - 1]
        }">
        <img class="dice" src="${gameData.dice[gameData.roll2 - 1]}">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;

       // if two 1's are rolled...
		if(gameData.rollSum === 2 ){ 
            devilSound.play();
			game.innerHTML += '<p>you got snake eyes :(</p>';
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
		}

        // if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
            devilSound.play();
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>sorry, one of your rolls was a one, switching to  ${gameData.players[gameData.index]}</p>`;
			setTimeout(setUpTurn, 2000);
		}

		// if neither die is a 1...
		else {
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actions.innerHTML = '<button id="rollagain">roll again</button> or <button id="pass">pass</button>'; 

			document.getElementById('rollagain').addEventListener('click', function () {
				throwDice();
			});

			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});

			checkWinningCondition();
		}

	}

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd){
            showCurrentScore();
            winSound.play();
            score.innerHTML = `<h2 id="winner">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actions.innerHTML = "";

            const initialColor = 'white'; 
            const hoverColor = 'cornsilk'; 
            const initialBoxShadow = '#ADCFFF 0 -12px 6px inset'; 
            const hoverBoxShadow = '#FFC229 0 -6px 8px inset'; 
            document.getElementById("quit").style.backgroundColor = initialColor;
            document.getElementById("quit").style.boxShadow = initialBoxShadow;
            document.getElementById("quit").addEventListener('mouseover', function () {
                document.getElementById("quit").style.backgroundColor = hoverColor;
                document.getElementById("quit").style.boxShadow = hoverBoxShadow;
            });
            document.getElementById("quit").addEventListener('mouseout', function () {
                document.getElementById("quit").style.backgroundColor = initialColor;
                document.getElementById("quit").style.boxShadow = initialBoxShadow;
            });
            document.getElementById("quit").innerHTML = "start new game!";

            return true;

        } else {
            angelSound.play();
            showCurrentScore();
            return false;
        }
    }


    function showCurrentScore() {
        score1.style.display = "block";
        score2.style.display = "block";
        score1.innerHTML = `<p>♱ score: ${gameData.score[0]} ₊ ⊹</p>`;
        score2.innerHTML = `<p>⛧ score: ${gameData.score[1]} ₊ ⊹</p>`;
    }

})();