/**
 * Monstruo al que tenemos que destruir
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        const height = BOSS_HEIGHT * game.width / 100,
            width = BOSS_WIDTH * game.width / 100,
            speed = BOSS_SPEED,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

            super(game, width, height, speed, myImage, myImageDead);
       
    }

    /**
     * Mata al oponente
     */
    collide() {
        
        if (!this.dead) {
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            super.collide();
        }

    }

    
}