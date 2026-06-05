const puzzle = {

    active: false,

    solved: false,

    showCompletedImage: false,

    selectedIndex: null,

    pieces: [],

    completedImage: null
};

function loadPuzzle() {

    puzzle.pieces = [];

    puzzle.completedImage = new Image();

    puzzle.completedImage.src =
        "assets/photos/puzzle1/puzzle.jpg";

    for (let i = 1; i <= 9; i++) {

        const img = new Image();

        img.src =
            `assets/photos/puzzle1/piece${i}.png`;

        puzzle.pieces.push({

            id: i,

            correctPosition: i,

            image: img
        });
    }

    shufflePuzzle();

    puzzle.active = true;

    puzzle.solved = false;

    puzzle.showCompletedImage = false;

    puzzle.selectedIndex = null;
}

function shufflePuzzle() {

    for (
        let i = puzzle.pieces.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            puzzle.pieces[i],
            puzzle.pieces[j]
        ] =
        [
            puzzle.pieces[j],
            puzzle.pieces[i]
        ];
    }
}

function drawPuzzle(ctx, canvas) {

    if (!puzzle.active) {
        return;
    }

    ctx.fillStyle =
        "rgba(0,0,0,0.92)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    if (puzzle.showCompletedImage) {

        drawCompletedMemory(
            ctx,
            canvas
        );

        return;
    }

    ctx.fillStyle =
        "white";

    ctx.font =
        "28px Arial";

    ctx.fillText(
        "Arma este recuerdo ❤️",
        40,
        50
    );

    const tileSize = 120;

    const startX =
        canvas.width / 2 - 180;

    const startY =
        canvas.height / 2 - 180;

    puzzle.pieces.forEach(
        (piece, index) => {

            const row =
                Math.floor(index / 3);

            const col =
                index % 3;

            const x =
                startX +
                col * tileSize;

            const y =
                startY +
                row * tileSize;

            if (
                piece.image.complete &&
                piece.image.naturalWidth > 0
            ) {

                ctx.drawImage(
                    piece.image,
                    x,
                    y,
                    tileSize,
                    tileSize
                );
            }

            ctx.strokeStyle =
                "white";

            ctx.lineWidth = 2;

            ctx.strokeRect(
                x,
                y,
                tileSize,
                tileSize
            );

            if (
                puzzle.selectedIndex ===
                index
            ) {

                ctx.strokeStyle =
                    "#ffd700";

                ctx.lineWidth = 5;

                ctx.strokeRect(
                    x,
                    y,
                    tileSize,
                    tileSize
                );
            }
        }
    );
}

function drawCompletedMemory(
    ctx,
    canvas
) {

    const imageWidth =
        Math.min(
            canvas.width * 0.7,
            420
        );

    const imageHeight =
        imageWidth;

    const imageX =
        canvas.width / 2 -
        imageWidth / 2;

    const imageY = 30;

    if (
        puzzle.completedImage.complete &&
        puzzle.completedImage.naturalWidth > 0
    ) {

        ctx.drawImage(
            puzzle.completedImage,
            imageX,
            imageY,
            imageWidth,
            imageHeight
        );
    }

    ctx.fillStyle = "white";

    ctx.font =
        "32px Arial";

    ctx.fillText(
        "❤️ Recuerdo restaurado",
        canvas.width / 2 - 160,
        imageY +
        imageHeight +
        40
    );

    ctx.font =
        "24px Arial";

    ctx.fillText(
        "Amo Verte sonreír ❤️",
        canvas.width / 2 - 210,
        imageY +
        imageHeight +
        80
    );

    ctx.fillStyle =
        "#ffd700";

    ctx.fillRect(
        canvas.width / 2 - 120,
        imageY +
        imageHeight +
        120,
        240,
        60
    );

    ctx.fillStyle =
        "black";

    ctx.font =
        "28px Arial";

    ctx.fillText(
        "CONTINUAR",
        canvas.width / 2 - 90,
        imageY +
        imageHeight +
        160
    );
}

function handlePuzzleClick(
    mouseX,
    mouseY,
    canvas
) {

    if (!puzzle.active) {
        return;
    }

    if (puzzle.showCompletedImage) {

        const imageWidth =
            Math.min(
                canvas.width * 0.7,
                420
            );

        const imageHeight =
            imageWidth;

        const buttonX =
            canvas.width / 2 - 120;

        const buttonY =
            30 +
            imageHeight +
            120;

        if (
            mouseX >= buttonX &&
            mouseX <= buttonX + 240 &&
            mouseY >= buttonY &&
            mouseY <= buttonY + 60
        ) {

            puzzle.active = false;
        }

        return;
    }

    const tileSize = 120;

    const startX =
        canvas.width / 2 - 180;

    const startY =
        canvas.height / 2 - 180;

    for (
        let index = 0;
        index < puzzle.pieces.length;
        index++
    ) {

        const row =
            Math.floor(index / 3);

        const col =
            index % 3;

        const x =
            startX +
            col * tileSize;

        const y =
            startY +
            row * tileSize;

        if (
            mouseX >= x &&
            mouseX <= x + tileSize &&
            mouseY >= y &&
            mouseY <= y + tileSize
        ) {

            if (
                puzzle.selectedIndex === null
            ) {

                puzzle.selectedIndex =
                    index;

                return;
            }

            if (
                puzzle.selectedIndex ===
                index
            ) {

                puzzle.selectedIndex =
                    null;

                return;
            }

            [
                puzzle.pieces[
                    puzzle.selectedIndex
                ],
                puzzle.pieces[
                    index
                ]
            ] =
            [
                puzzle.pieces[
                    index
                ],
                puzzle.pieces[
                    puzzle.selectedIndex
                ]
            ];

            puzzle.selectedIndex =
                null;

            checkPuzzleSolved();

            return;
        }
    }
}

function checkPuzzleSolved() {

    let solved = true;

    puzzle.pieces.forEach(
        (piece, index) => {

            if (
                piece.correctPosition !==
                index + 1
            ) {

                solved = false;
            }
        }
    );

    if (solved) {

        puzzle.solved = true;

        puzzle.showCompletedImage = true;
    }
} 