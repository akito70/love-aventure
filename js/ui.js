
function drawUI(ctx) {

    ctx.fillStyle = "rgba(0,0,0,0.6)";

    ctx.fillRect(
        15,
        15,
        180,
        50
    );

    ctx.fillStyle = "white";

    ctx.font = "24px Arial";

    ctx.fillText(
        `Recuerdos: ${collectedMemories}/${memories.length}`,
        25,
        48
    );
}