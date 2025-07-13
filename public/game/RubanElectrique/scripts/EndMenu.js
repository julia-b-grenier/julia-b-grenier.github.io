import { drawTapeIds, drawTapeImg } from "./Utils.js";

export default class EndMenu extends Phaser.Scene
{
    constructor ()
    {
        super('EndMenu');
    }

    create ()
    {
        this.add.image(300, 300, 'background').setScale(0.75);
        
        this.tapeIds= Object.keys(this.registry.get('tape'));
        this.tapePics= Object.values(this.registry.get('tape'));
        drawTapeIds(this, this.tapeIds, 300, this.registry.get('mistakes'));
        drawTapeImg(this, this.tapePics, null);

        const title = this.add.text(150, 200, 'Ton score', { fontFamily: 'Bahnschrift Condensed', fontSize: 24, color: '#000000' });
        title.setOrigin(0.5);
        
        const score = this.add.text(150, 230, this.registry.get('score') + '/10', { fontFamily: 'Bahnschrift Condensed', fontSize: 30, color: '#000000' });
        score.setOrigin(0.5);
        
        this.add.image(300, 560, 'button').setScale(0.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.scene.start('MainGame');
            });

        this.add.text(300, 557, 'Rejouer', { 
                fontFamily: 'Bahnschrift Condensed', 
                fontSize: 24, 
                color: '#ffffff'
            })
            .setOrigin(0.5);
    }
    
}