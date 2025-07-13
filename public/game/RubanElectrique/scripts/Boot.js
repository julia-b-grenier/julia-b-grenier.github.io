export default class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.image('background', 'assets/background.png');
        this.load.image('background_goal', 'assets/background_goal.png');
        this.load.image('button', 'assets/button.png');

        this.load.image('blue_tape', 'assets/blue_tape.png');
        this.load.image('red_tape', 'assets/red_tape.png');
        this.load.image('white_tape', 'assets/white_tape.png');
        this.load.image('orange_tape', 'assets/orange_tape.png');
        this.load.image('green_tape', 'assets/green_tape.png');
        this.load.image('black_tape', 'assets/black_tape.png');
        this.load.image('purple_tape', 'assets/purple_tape.png');
        this.load.image('gray_tape', 'assets/gray_tape.png');
        this.load.image('brown_tape', 'assets/brown_tape.png');
        this.load.image('yellow_tape', 'assets/yellow_tape.png');
    }

    create ()
    {
        this.registry.set('score', 0);

        
        this.registry.set('tape',
            {
                '00': 'black_tape',
                '01': 'brown_tape',
                '02': 'red_tape',
                '03': 'orange_tape',
                '04': 'yellow_tape',
                '05': 'green_tape',
                '06': 'blue_tape',
                '07': 'purple_tape',
                '08': 'gray_tape',
                '09': 'white_tape',
            }
        );

        this.scene.start('MainGame');
    }
}