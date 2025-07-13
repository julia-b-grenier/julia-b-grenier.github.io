import { drawTapeIds, drawTapeImg } from "./Utils.js";

export default class MainGame extends Phaser.Scene
{
    constructor ()
    {
        super('MainGame');
    }

    create ()
    {
        this.add.image(300, 300, 'background').setScale(0.75);

        const title = this.add.text(150, 150, 
            'Connais-tu ton code de couleur?', 
            { 
                fontFamily: 'Bahnschrift Condensed', 
                fontSize: 24, 
                color: '#000000',
                align: 'center',
                wordWrap: {
                    width: 200,
                    useAdvancedWrap: true
                },
            }
        ).setOrigin(0.5);

        this.add.image(150, 300, 'background_goal').setScale(0.75);

        const goal = this.add.text(150, 300, 
            'Objectif: Associer les couleurs de ruban électrique au chiffre approprié', 
            { 
                fontFamily: 'Bahnschrift Condensed', 
                fontSize: 18, 
                color: '#000000',
                align: 'center',
                wordWrap: {
                    width: 200,
                    useAdvancedWrap: true
                },
            }
        ).setOrigin(0.5);

        this.tapeIds = Object.keys(this.registry.get('tape'));
        this.tapeNames = Object.values(this.registry.get('tape'));
        this.tapeSprites = [];
        this.shuffle(this.tapeNames);
        drawTapeIds(this, this.tapeIds, 300, null);
        drawTapeImg(this, this.tapeNames, this.tapeSprites);
        
        this.add.image(300, 560, 'button').setScale(0.5)
            .setInteractive()
            .on('pointerdown', () => {
                this.validate();
            });
        
        this.add.text(300, 557, 'Valider', { 
            fontFamily: 'Bahnschrift Condensed', 
            fontSize: 24, 
            color: '#ffffff'
        })
        .setOrigin(0.5);
    }

    shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }


    validate ()
    {
        this.registry.set('mistakes', []);
        const answer = this.registry.get('tape');
        let i=0;
        for (const key in answer) {
            console.log(`${answer[key]}: ${this.tapeSprites[i].name}`);
            if (answer[key] != this.tapeSprites[i].name) {
                this.registry.get('mistakes').push(key);
            }
            i++;
        }

        this.registry.set('score', 10 - this.registry.get('mistakes').length);
        this.scene.start('EndMenu');
    }
}