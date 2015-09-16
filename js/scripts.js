function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;

  this.markedBy = null;
}

Space.prototype.markBy = function(player) {
  this.markedBy = player;
};

function Board(spaces) {
  this.spaces = [(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)];

}

Board.prototype.win = function() {
  var winningCombos = [
    [(1,1), (1,2), (1,3)], [(2,1), (2,2), (2,3)], [(3,1), (3,2), (3,3)],
    [(1,1), (2,2), (3,3)], [(3,1), (2,2), (1,3)],
    [(1,3), (2,3), (3,3)], [(1,1), (2,1), (3,1)], [(1,2), (2,2), (3,2)]
  ];

  winningCombos.forEach(function(combo){

  });
};

// -------original attempted loop
// if ((combo[0].markedBy === combo[1].markedBy) && (combo[0].markedBy === combo[2].markedBy) && (combo[1].markedBy === combo[2].markedBy)) {
//   return true;
// } else {
//   return false;
// }



// (1,1), (1,2), (1,3) #across the top
// (2,1), (2,2), (2,3)#across the middle
// (3,1), (3,2), (3,3) #across the bottom
//
//
// (1,1), (2,2), (3,3) #diagonal left to right
// (3,1), (2,2), (1,3)#diagonal right to left
//
// (1,3), (2,3), (3,3)#down the right
// (1,1), (2,1), (3,1)#down the left
// (1,2), (2,2), (3,2)#down the middle