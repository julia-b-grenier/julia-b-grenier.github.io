export function drawTapeIds(scene, tapeIds, x, mistakes)
{
    for (let index = 0; index < tapeIds.length; index++) {
        const id = scene.add.text(x, 40 + 50 * index, tapeIds[index], { fontFamily: 'Bahnschrift Condensed', fontSize: 20, color: '#000000' });
        if (mistakes != null && mistakes.includes(tapeIds[index])) {
            id.setColor('#990D35');
        }
        id.label = 'id_' + tapeIds[index];
        id.startPoint = new Phaser.Math.Vector2(id.x + 30, id.y + 10);
        id.lineGraphics = scene.add.graphics({ lineStyle: { width: 2, color: 0x000000 } });        
    }
}

export function drawTapeImg(scene, tapeNames, tapeSprites)
{
    for (let index = 0; index < tapeNames.length; index++) {
        const tape = scene.add.image(440, 50 + 50 * index, tapeNames[index]).setScale(0.1);
        if (tapeSprites != null) {
            tape.name = tapeNames[index];
            tape.setInteractive({ draggable: true });
            tapeSprites.push(tape);
        }
    }

    if (tapeSprites != null) {
        let draggingSprite = null;

        scene.input.on('dragstart', (pointer, gameObject) => {
            draggingSprite = gameObject;
            gameObject.setDepth(1000);
            gameObject.setAlpha(0.75);
        });

        scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.y = dragY;
        });

        scene.input.on('dragend', (pointer, gameObject) => {
            gameObject.setAlpha(1);

            // Find closest image position to snap to
            let tapeToSwapWith = gameObject;
            let closestDist = 30;
            for (let i = 0; i < tapeSprites.length; i++) {
                if (tapeSprites[i] === gameObject) continue;
                const dist = Math.abs(gameObject.y - tapeSprites[i].y);
                if (dist < closestDist) {
                    closestDist = dist;
                    tapeToSwapWith = tapeSprites[i];
                }
            }

            // Remove and insert dragged sprite at new index
            if (tapeToSwapWith != null) {
                Phaser.Utils.Array.Swap(tapeSprites, gameObject, tapeToSwapWith);
            }

            // Reposition all sprites to snap to their column slot
            realignColumn(tapeSprites);
        });
    }
}

export function realignColumn(tapeSprites) {
    for (let i = 0; i < tapeSprites.length; i++) {
        const sprite = tapeSprites[i];
        sprite.setY(50 + 50 * i);
        sprite.setData('index', i);
    }
};