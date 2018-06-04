const glb = {
  leftBoundary: 0,
  rightBoundary: 404,
  topBoundary: 0,
  bottomBoundary: 415,
  dx: 101,
  dy: 83,
}

// Enemies our player must avoid
class Enemy {

  constructor(y, vel) {
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = y;
    this.vel = vel;
    this.halfWidth = 45;

  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= glb.rightBoundary) {
      this.x = -this.x;
    } else {
      this.x += this.vel * dt;
    }

    //collision detection

    if (player.x < this.x + 80 &&
      player.x + 80 > this.x &&
      player.y < this.y + 60 &&
      60 + player.y > this.y) {
      player.resetPlayer();
    };
  };

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    this.halfWidth = 30;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  update() {

  };

  resetGame() {

    // let div = document.getElementById('winText');
    // div.innerHTML = "You won ! Resetting the game in a second.";

    setTimeout(function() {

      alert('You Won ! Press okay to play again !');
    }, 200);

    setTimeout(function() {

      location.reload();
    }, 250);

  }

  resetPlayer() {

    location.reload();
  }

  handleInput(code) {
    switch (code) {
      case "left":
        if (this.x != glb.leftBoundary) {
          this.x -= glb.dx;
        } else {}
        break;

      case "right":
        if (this.x != glb.rightBoundary) {
          this.x += glb.dx;
        } else {}
        break;

      case "up":

        if (this.y != glb.topBoundary) {
          this.y -= glb.dy;
        }
        if (this.y == 0) {
          this.resetGame();
        } else {}

        break;

      case "down":
        if (this.y != glb.bottomBoundary) {
          this.y += glb.dy;
        } else {}
        break;

    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [new Enemy(404 - 83 * 1, 200), new Enemy(404 - 83 * 2, 240), new Enemy(404 - 83 * 3, 180), new Enemy(404 - 83 * 3, 220), new Enemy(404 - 83 * 4, 220)];

const player = new Player(202, 83 * 5);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
