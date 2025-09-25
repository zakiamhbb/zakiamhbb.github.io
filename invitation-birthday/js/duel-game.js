// JavaScript for Duel Game Page (duel-game.html)
document.addEventListener('DOMContentLoaded', function() {
    const playerAvatar = document.getElementById('player-avatar');
    const playerName = document.getElementById('player-name');
    const playerHealthFill = document.getElementById('player-health-fill');
    const playerHealthText = document.getElementById('player-health-text');
    
    const enemyAvatar = document.getElementById('enemy-avatar');
    const enemyName = document.getElementById('enemy-name');
    const enemyHealthFill = document.getElementById('enemy-health-fill');
    const enemyHealthText = document.getElementById('enemy-health-text');
    
    const roundDisplay = document.getElementById('round-display');
    const scoreDisplay = document.getElementById('score-display');
    const battleLog = document.getElementById('battle-log');
    const gameMessage = document.getElementById('game-message');
    const battleEffects = document.getElementById('battle-effects');

    const actionButtons = document.getElementById('action-buttons');
    const attackButton = document.getElementById('attack-button');
    const defendButton = document.getElementById('defend-button');
    const spellButton = document.getElementById('spell-button');
    const startGameButton = document.getElementById('start-game');
    const surrenderGameButton = document.getElementById('surrender-game');

    let player = { hp: 100, maxHp: 100, score: 0, isDefending: false };
    let enemy = {};
    let currentRound = 0;
    const maxRounds = 3;
    let gameActive = false;

    const enemies = [
        { name: 'Dragon', avatar: '🐉', hp: 120, attack: 25, spell: 'Fire Breath', spellDamage: 35 },
        { name: 'Troll', avatar: '🧌', hp: 100, attack: 20, spell: 'Club Smash', spellDamage: 30 },
        { name: 'Basilisk', avatar: '🐍', hp: 150, attack: 30, spell: 'Petrify', spellDamage: 40 },
        { name: 'Phoenix', avatar: '🔥', hp: 90, attack: 20, spell: 'Fire Storm', spellDamage: 30 },
        { name: 'Griffin', avatar: '🦅', hp: 110, attack: 22, spell: 'Dive Attack', spellDamage: 32 }
    ];

    function playMagicalSound() {
        console.log('✨ Magical sound played!');
    }

    function addLog(message, type = 'normal') {
        const entry = document.createElement('div');
        entry.classList.add('log-entry');
        entry.textContent = message;
        battleLog.prepend(entry);
        if (battleLog.children.length > 10) {
            battleLog.removeChild(battleLog.lastChild);
        }
    }

    function updateHealthBars() {
        playerHealthFill.style.width = `${(player.hp / player.maxHp) * 100}%`;
        playerHealthText.textContent = `${player.hp}/${player.maxHp} HP`;
        
        enemyHealthFill.style.width = `${(enemy.hp / enemy.maxHp) * 100}%`;
        enemyHealthText.textContent = `${enemy.hp}/${enemy.maxHp} HP`;

        playerHealthFill.style.background = player.hp > (player.maxHp / 2) ? 'linear-gradient(90deg, #228b22, #32cd32)' : 'linear-gradient(90deg, #daa520, #ff8c00)';
        if (player.hp <= (player.maxHp / 4)) playerHealthFill.style.background = 'linear-gradient(90deg, #8b0000, #ff0000)';

        enemyHealthFill.style.background = enemy.hp > (enemy.maxHp / 2) ? 'linear-gradient(90deg, #8b0000, #ff0000)' : 'linear-gradient(90deg, #daa520, #ff8c00)';
        if (enemy.hp <= (enemy.maxHp / 4)) enemyHealthFill.style.background = 'linear-gradient(90deg, #228b22, #32cd32)';
    }

    function createBattleEffect(type) {
        const effect = document.createElement('span');
        effect.classList.add('battle-effect', type);
        if (type === 'player-attack') effect.textContent = '⚔️';
        else if (type === 'enemy-attack') effect.textContent = '💥';
        else if (type === 'player-defend') effect.textContent = '🛡️';
        else if (type === 'player-spell') effect.textContent = '✨';
        else if (type === 'victory') effect.textContent = '🎉';
        else if (type === 'defeat') effect.textContent = '💀';
        battleEffects.appendChild(effect);
        effect.addEventListener('animationend', () => effect.remove());
    }

    function resetGame() {
        player.hp = player.maxHp;
        player.score = 0;
        player.isDefending = false;
        currentRound = 0;
        gameActive = false;
        scoreDisplay.textContent = player.score;
        roundDisplay.textContent = `${currentRound}/${maxRounds}`;
        gameMessage.textContent = 'Prepare for battle!';
        battleLog.innerHTML = '';
        actionButtons.style.display = 'none';
        startGameButton.style.display = 'inline-block';
        surrenderGameButton.style.display = 'inline-block';
        updateHealthBars();
    }

    function startRound() {
        currentRound++;
        if (currentRound > maxRounds) {
            endGame(true);
            return;
        }

        enemy = { ...enemies[Math.floor(Math.random() * enemies.length)] };
        enemy.maxHp = enemy.hp;
        
        enemyAvatar.textContent = enemy.avatar;
        enemyName.textContent = enemy.name;
        gameMessage.textContent = `Round ${currentRound}: A wild ${enemy.name} appears!`;
        addLog(`--- Round ${currentRound} ---`);
        addLog(`A wild ${enemy.name} (${enemy.hp} HP) appears!`);
        
        updateHealthBars();
        actionButtons.style.display = 'flex';
        startGameButton.style.display = 'none';
        surrenderGameButton.style.display = 'none';
        gameActive = true;
    }

    function playerTurn(action) {
        if (!gameActive) return;

        let playerDamage = 0;
        let enemyDamage = 0;

        player.isDefending = false;

        if (action === 'attack') {
            playerDamage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
            enemy.hp -= playerDamage;
            addLog(`You attacked ${enemy.name} for ${playerDamage} damage!`);
            createBattleEffect('player-attack');
        } else if (action === 'defend') {
            player.isDefending = true;
            addLog('You prepared to defend!');
            createBattleEffect('player-defend');
        } else if (action === 'spell') {
            playerDamage = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
            enemy.hp -= playerDamage;
            addLog(`You cast a powerful spell on ${enemy.name} for ${playerDamage} damage!`);
            createBattleEffect('player-spell');
        }

        updateHealthBars();

        if (enemy.hp <= 0) {
            player.score += enemy.maxHp;
            scoreDisplay.textContent = player.score;
            addLog(`${enemy.name} was defeated! You gained ${enemy.maxHp} points.`, 'success');
            createBattleEffect('victory');
            gameActive = false;
            setTimeout(startRound, 2000);
            return;
        }

        setTimeout(() => enemyTurn(playerDamage), 1500);
    }

    function enemyTurn(playerLastDamage) {
        if (!gameActive) return;

        let enemyAction = Math.random() < 0.7 ? 'attack' : 'spell';
        let damageTaken = 0;

        if (enemyAction === 'attack') {
            damageTaken = Math.floor(Math.random() * (enemy.attack - (enemy.attack / 2) + 1)) + (enemy.attack / 2);
            if (player.isDefending) {
                damageTaken = Math.floor(damageTaken / 2);
                addLog(`${enemy.name} attacked you, but you defended! Took ${damageTaken} damage.`, 'info');
            } else {
                addLog(`${enemy.name} attacked you for ${damageTaken} damage!`, 'error');
            }
            player.hp -= damageTaken;
            createBattleEffect('enemy-attack');
        } else {
            damageTaken = Math.floor(Math.random() * (enemy.spellDamage - (enemy.spellDamage / 2) + 1)) + (enemy.spellDamage / 2);
            if (player.isDefending) {
                damageTaken = Math.floor(damageTaken / 2);
                addLog(`${enemy.name} cast ${enemy.spell}, but you defended! Took ${damageTaken} damage.`, 'info');
            } else {
                addLog(`${enemy.name} cast ${enemy.spell} on you for ${damageTaken} damage!`, 'error');
            }
            player.hp -= damageTaken;
            createBattleEffect('enemy-attack');
        }

        updateHealthBars();

        if (player.hp <= 0) {
            endGame(false);
        }
    }

    function endGame(victory) {
        gameActive = false;
        actionButtons.style.display = 'none';
        startGameButton.style.display = 'inline-block';
        surrenderGameButton.style.display = 'inline-block';

        if (victory) {
            gameMessage.innerHTML = '🎉 <span class="success">VICTORY! You have defeated the guardians!</span>';
            addLog('You are worthy! Proceed to the invitation.', 'success');
            createBattleEffect('victory');
            
            // Calculate total score (quiz + duel)
            const quizScore = parseInt(localStorage.getItem('quizGameScore') || '0');
            const totalScore = quizScore + player.score;
            
            localStorage.setItem('duelGameCompleted', 'true');
            localStorage.setItem('duelGameScore', player.score.toString());
            localStorage.setItem('totalScore', totalScore.toString());
            
            setTimeout(() => {
                window.location.href = 'results-bridge.html';
            }, 3000);
        } else {
            gameMessage.innerHTML = '💀 <span class="error">DEFEAT! You were vanquished. Try again, young wizard.</span>';
            addLog('You were defeated. Try again!', 'error');
            createBattleEffect('defeat');
            localStorage.setItem('duelGameCompleted', 'false');
            localStorage.setItem('duelGameSkipped', 'false');
            localStorage.setItem('duelGameScore', player.score.toString());
        }
    }

    function surrenderGame() {
        gameActive = false;
        gameMessage.innerHTML = '🏳️ <span class="skipped">You surrendered the battle. Perhaps another time.</span>';
        addLog('You surrendered the challenge.', 'info');
        localStorage.setItem('duelGameSkipped', 'true');
        localStorage.setItem('duelGameCompleted', 'false');
        localStorage.setItem('duelGameScore', player.score.toString());
        setTimeout(() => {
            window.location.href = 'results-bridge.html';
        }, 2000);
    }

    // Event Listeners
    startGameButton.addEventListener('click', function() {
        playMagicalSound();
        resetGame();
        startRound();
    });
    attackButton.addEventListener('click', () => playerTurn('attack'));
    defendButton.addEventListener('click', () => playerTurn('defend'));
    spellButton.addEventListener('click', () => playerTurn('spell'));
    surrenderGameButton.addEventListener('click', surrenderGame);

    // Initial setup
    resetGame();
    console.log('⚔️ Magical Duel Arena initialized!');
});
