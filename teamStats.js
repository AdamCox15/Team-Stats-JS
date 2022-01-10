const team = {
    _players: [ 
      {firstName: 'Alex', lastName: 'Ovechkin', age: 36},
     {firstName: 'Evgeni', lastName: 'Kuznetzov', age: 32},
     {firstName: 'Tom', lastName: 'Wilson', age: 31},
    ],
    _games: [
      {opponent: 'Penguins', teamPoints: 6, opponentPoints: 2},
      {opponent: 'Rangers', teamPoints: 4, opponentPoints: 1},
      {opponent: 'Golden Knights', teamPoints: 7, opponentPoints: 0},
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(oppName, points, oppPoints) {
     const game = {
       opponent: oppName,
       points: points,
       opponentPoints: oppPoints,
       }
       this.games.push(game);
    }
  };
  
  team.addPlayer('Conner', 'McDavid', 24);
  team.addPlayer('Jesse', 'Puljujarvi', 25);
  team.addPlayer('Kirill', 'Kaprizov', 25);
  
  console.log(team.players);
  
  team.addGame('Maple Leafs', 4, 3);
  team.addGame('Red Wings', 1, 0);
  team.addGame('Wild', 2, 4);
  
  console.log(team.games);