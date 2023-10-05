const gameObject = () => {
    const objectBall = {
        home : {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson' : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    'Slam Dunks' : 1
                },
                'Reggie Evans' : {
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    'Slam Dunks' : 7
                },
                'Brook Lopez' : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1,
                    'Slam Dunks' : 15
                },
                'Mason Plumlee' : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    'Slam Dunks' : 5
                },
                'Jason Terry' : {
                    number : 31,
                    shoe : 15,
                    points : 19,
                    rebounds : 2,
                    assists : 2,
                    steals : 4,
                    blocks : 11,
                    'Slam Dunks' : 1
                }
            }
        },
        away : {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien' : {
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    'Slam Dunks' : 2
                },
                'Bismak Biyombo' : {
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists : 7,
                    steals : 7,
                    blocks : 15,
                    'Slam Dunks' : 10
                },
                'DeSagna Diop' : {
                    number : 2,
                    shoe : 14,
                    points : 24,
                    rebounds : 12,
                    assists : 12,
                    steals : 4,
                    blocks : 5,
                    'Slam Dunks' : 5
                },
                'Ben Gordon' : {
                    number : 8,
                    shoe : 15,
                    points : 33,
                    rebounds : 3,
                    assists : 2,
                    steals : 1,
                    blocks : 1,
                    'Slam Dunks' : 0
                },
                'Brendan Haywood' : {
                    number : 33,
                    shoe : 15,
                    points : 6,
                    rebounds : 12,
                    assists : 12,
                    steals : 22,
                    blocks : 5,
                    'Slam Dunks' : 12
                }
            }
        },
    }
    return objectBall;
}

console.log(gameObject());

function homeTeamName() {
    return `Home Team name:  ${gameObject().home.teamName}.`;
}

console.log(homeTeamName());

function homeTeamColors() {
    return `Home Team colors:  ${gameObject().home.colors}.`;
}

console.log(homeTeamColors());

function homeTeamPlayers() {
    const homePlayerNames = [];
    for (const playerName in gameObject().home.players) {
        homePlayerNames.push(playerName);
    }

    return `Home Team players:  ${homePlayerNames}.`;
}

console.log(homeTeamPlayers());


function awayTeamName() {
    return `Away Team name:  ${gameObject().away.teamName}.`;
}

console.log(awayTeamName());

function awayTeamColors() {
    return `Away Team colors:  ${gameObject().away.colors}.`;
}

console.log(awayTeamColors());

function awayTeamPlayers() {
    const awayPlayerNames = [];
    for (const playerName in gameObject().away.players) {
        awayPlayerNames.push(playerName);
    }

    return `Away Team players:  ${awayPlayerNames}.`;
}

console.log(awayTeamPlayers());


function numPointsScored(playerName){
    for (let player in gameObject().home.players) {
        if (player === playerName){
            return `${playerName} points: ${gameObject().home.players[`${player}`].points}`;
        }

    }
    for (let player in gameObject().away.players) {
        if (player === playerName)
            return `${playerName} points: ${gameObject().away.players[`${player}`].points}`;
    }
}
console.log(numPointsScored('Alan Anderson'));

function shoeSize(playerName){
    for (let player in gameObject().home.players) {
        if (player === playerName){
            return `${playerName} shoe: ${gameObject().home.players[`${player}`].shoe}`;
        }

    }
    for (let player in gameObject().away.players) {
        if (player === playerName)
            return `${playerName} shoe: ${gameObject().away.players[`${player}`].shoe}`;
    }
}
console.log(shoeSize('Alan Anderson'));

function teamColors(teamName) {
    if(teamName === gameObject().home.teamName)
        return `${teamName} colors:  ${gameObject().home.colors}.`;
    return `${teamName} colors:  ${gameObject().away.colors}.`;
}

console.log(teamColors('Brooklyn Nets'));
console.log(teamColors('Charlotte Hornets'));

function teamNames() {
    return `Game team names:  [ ${gameObject().home.teamName}, ${gameObject().away.teamName}].`;
}

console.log(teamNames());

function playerNumbers(teamName) {
    let jersyNumbers = [];
    if(teamName === gameObject().home.teamName){
        for(let player in gameObject().home.players){
            jersyNumbers.push(gameObject().home.players[`${player}`].number);
        }
        return `${teamName} jersey number's:  ${jersyNumbers}.`;
    }
    for(let player in gameObject().away.players){
        jersyNumbers.push(gameObject().away.players[`${player}`].number);
    }
    return `${teamName} jersey number's:  ${jersyNumbers}.`;
}

console.log(playerNumbers('Brooklyn Nets'));
console.log(playerNumbers('Charlotte Hornets'));


function playerStats(playerName){
    for (let player in gameObject().home.players) {
        if (player === playerName){
            return `${playerName} stats: ${JSON.stringify(gameObject().home.players[`${player}`])}`;
        }

    }
    for (let player in gameObject().away.players) {
        if (player === playerName)
            return `${playerName} stats: ${JSON.stringify(gameObject().away.players[`${player}`])}`;
    }
}
console.log(playerStats('Alan Anderson'));

function bigShoeRebounds(){
    let bigShoe = 0;
    let playerName = '';
    let playerBigShoeRebounds = '';
    for(let player in gameObject().home.players){
        if(gameObject().home.players[player].shoe > bigShoe){
            playerName = player;
            playerBigShoeRebounds = gameObject().home.players[player].rebounds
            bigShoe = gameObject().home.players[player].shoe;
        }
    }

    for(let player in gameObject().away.players){
        if(gameObject().away.players[player].shoe > bigShoe){
            playerName = player;
            playerBigShoeRebounds = gameObject().away.players[player].rebounds
            bigShoe = gameObject().away.players[player].shoe;
        }
    }
    return `${playerName} has the biggest shoe size which is ${bigShoe}, and his rebounds number is ${playerBigShoeRebounds}.`;
    
}
console.log(bigShoeRebounds());

function mostPointsScored(){
    let mostScoredPoints = 0, playerName = '';
    for(let player in gameObject().home.players){
        if(gameObject().home.players[player].points > mostScoredPoints){
            playerName = player;
            mostScoredPoints = gameObject().home.players[player].points
        }
    }

    for(let player in gameObject().away.players){
        if(gameObject().away.players[player].points > mostScoredPoints){
            playerName = player;
            mostScoredPoints = gameObject().away.players[player].points
        }
    }
    return `${playerName} has the most points scored which is ${mostScoredPoints}.`;
}
console.log(mostPointsScored());

function winningTeam(){

    let sumHomePoints = 0, sumAwayPoints = 0;
    let winnerTeam = '' , loserTeam = '';
    let winnerPoints = 0, loserPoints = 0;

    Object.values(gameObject().home.players).map(element => {
        sumHomePoints += element.points
    });

    Object.values(gameObject().away.players).map(element => {
         sumAwayPoints += element.points
    });

    if ( sumHomePoints > sumAwayPoints){
        winnerTeam = gameObject().home.teamName;
        loserTeam = gameObject().away.teamName;
        winnerPoints = sumHomePoints;
        loserPoints = sumAwayPoints;
    }else {
        winnerTeam = gameObject().away.teamName;
        loserTeam = gameObject().home.teamName;
        winnerPoints = sumAwayPoints;
        loserPoints = sumHomePoints;
    }

    return `The winner Team is ${winnerTeam} with ${winnerPoints} points, while loser team is ${loserTeam} with ${loserPoints} points.`;
}
console.log(winningTeam());

function playerWithLongestName(){
    let longestName = '';
    for(let player in gameObject().home.players){
        if (player.length > longestName.length){
            longestName = player
        }
    }

    for(let player in gameObject().away.players){
        if (player.length > longestName.length){
            longestName = player
        }
    }

    return `The player with longest name is ${longestName}, with ${longestName.length} charaacters.`
}

console.log(playerWithLongestName());

function doesLongNameStealATon(){
    let mostSteal = 0;
    let homeSteals = 0, awaySteals = 0;
    let playerHomeSteals = '',playerAwaySteals = '';
    let LongNamePlayerMostSteals = 0;
    let longestName = '';

    for(let player in gameObject().home.players){
        if (player.length > longestName.length){
            longestName = player;
            // console.log(player, typeof player)
        }
    }

    for(let player in gameObject().away.players){
        if (player.length > longestName.length){
            longestName = player;
            // console.log(longestName, typeof longestName)
        }
    }

    Object.values(gameObject().away.players).map(player => {
        if( player.steals > homeSteals){
            playerHomeSteals = player;
            homeSteals = player.steals;
        }
    });

    Object.values(gameObject().away.players).map(player => {
        if( player.steals > awaySteals){
            playerAwaySteals = player;
            awaySteals = player.steals;
        }
    });

    if (homeSteals > awaySteals){
        mostSteal = homeSteals;
    }else {
        mostSteal = awaySteals;
    } 

    if (gameObject().home.players[longestName]){
        LongNamePlayerMostSteals = gameObject().home.players[longestName].steals;
    }else {
        LongNamePlayerMostSteals = gameObject().away.players[longestName].steals;

    }
    return `that is ${mostSteal === LongNamePlayerMostSteals}, the player ${longestName} has the longest name among players, and he has the most steals records which is ${mostSteal}`;
}
console.log(doesLongNameStealATon());