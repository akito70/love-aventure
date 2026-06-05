const bgMusic =
document.getElementById(
    "bgMusic"
);

let musicStarted = false;

function startMusic() {

    if (
        musicStarted ||
        !bgMusic
    ) {
        return;
    }

    musicStarted = true;

    bgMusic.volume = 0.5;

    bgMusic.play()
    .catch(err => {

        console.log(
            "Error música:",
            err
        );

        musicStarted = false;
    });
}

window.addEventListener(
    "load",
    () => {

        document.body.addEventListener(
            "touchstart",
            startMusic,
            { once:true }
        );

        document.body.addEventListener(
            "click",
            startMusic,
            { once:true }
        );

    }
);
const startScreen =
document.getElementById(
    "startScreen"
);

const startGameButton =
document.getElementById(
    "startGame"
);

if (
    startGameButton
) {

    startGameButton.addEventListener(
        "click",
        () => {

            startScreen.style.display =
                "none";

            startMusic();
        }
    );
}
const canvas = document.getElementById("gameCanvas"); 
const ctx = canvas.getContext("2d");
const memoryModal =
    document.getElementById(
        "memoryModal"
    );

const memoryImage =
    document.getElementById(
        "memoryImage"
    );

const memoryVideo =
    document.getElementById(
        "memoryVideo"
    );

const memoryText =
    document.getElementById(
        "memoryText"
    );

const closeMemory =
    document.getElementById(
        "closeMemory"
    );
    const photoMemories = {

    1:
    "assets/photos/memory1.jpg",

    3:
    "assets/photos/memory3.jpg",

    6:
    "assets/photos/memory6.jpg",

    7:
    "assets/photos/final.jpg"
};

const videoMemories = {

    2:
    "assets/videos/memory2.mp4",

    5:
    "assets/videos/memory5.mp4"
};

function openPhoto(memory) {

    memoryVideo.style.display =
        "none";

    memoryVideo.pause();

    memoryImage.style.display =
        "block";

    memoryImage.src =
        photoMemories[memory.id];

    memoryText.innerHTML =
        memory.text;

    memoryModal.style.display =
        "flex";
}
function openVideo(memory) {

    memoryImage.style.display =
        "none";

    memoryVideo.style.display =
        "block";

    memoryVideo.src =
        videoMemories[memory.id];

    memoryText.innerHTML =
        memory.text;

    memoryModal.style.display =
        "flex";
}
closeMemory.addEventListener(
    "click",
    () => {

        memoryModal.style.display =
            "none";

        memoryVideo.pause();

        if (
            activeMemory &&
            !activeMemory.collected
        ) {

            activeMemory.collected =
                true;

            collectedMemories++;
        }
    }
);
function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);

const WORLD = {

    width: 6000,
    height: 4500
};

const camera = {

    x: 0,
    y: 0
};

const player = new Player(
    300,
    3900
);
let activeQuestion = null;

function updateCamera() {

    camera.x =
        player.x -
        canvas.width / 2 +
        player.width / 2;

    camera.y =
        player.y -
        canvas.height / 2 +
        player.height / 2;

    camera.x = Math.max(
        0,
        Math.min(
            camera.x,
            WORLD.width - canvas.width
        )
    );

    camera.y = Math.max(
        0,
        Math.min(
            camera.y,
            WORLD.height - canvas.height
        )
    );
}

function drawBackground() {

    ctx.fillStyle = "#88d06b";

    ctx.fillRect(
        0,
        0,
        WORLD.width,
        WORLD.height
    );
}

function checkMemories() {

    activeMemory = null;

    memories.forEach(memory => {

        if (memory.collected) {
            return;
        }

        const dx =
            player.x - memory.x;

        const dy =
            player.y - memory.y;

        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );

        if (distance < 120) {

            activeMemory = memory;
        }
    });
}
function checkQuestions() {

    activeQuestion = null;

    questions.forEach(question => {

        if (question.completed) {
            return;
        }

        const dx =
            player.x - question.x;

        const dy =
            player.y - question.y;

        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );

        if (distance < 120) {

            activeQuestion =
                question;
        }
    });
}
function interact() {
    if (activeQuestion) {

    const answer =
        prompt(
            activeQuestion.question
        );

    if (answer !== null) {

        alert(
            activeQuestion.success
        );

        activeQuestion.completed =
            true;
    }

    return;
}

    if (
        !activeMemory ||
        puzzle.active
    ) {
        return;
    }

  if (
    activeMemory.type ===
    "puzzle"
) {

    loadPuzzle();

    return;
}

if (
    activeMemory.type ===
    "photo"
) {

    openPhoto(
        activeMemory
    );

    return;
}

if (
    activeMemory.type ===
    "video"
) {

    openVideo(
        activeMemory
    );

    return;
}

if (
    activeMemory.type ===
    "final"
) {

    openPhoto(
        activeMemory
    );

    return;
}

    if (!dialogueOpen) {

        dialogueOpen = true;

    } else {

        dialogueOpen = false;

        if (
            !activeMemory.collected
        ) {

            activeMemory.collected =
                true;

            collectedMemories++;
        }
    }
}

window.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key.toLowerCase() === "e"
        ) {

            interact();
        }
    }
);

canvas.addEventListener(
    "click",
    (e) => {

        if (!puzzle.active) {
            return;
        }

        handlePuzzleClick(
            e.clientX,
            e.clientY,
            canvas
        );

    if (puzzle.solved) {

    const puzzleMemory =
        memories.find(
            m => m.type === "puzzle"
        );

    if (
        puzzleMemory &&
        !puzzleMemory.collected
    ) {

        puzzleMemory.collected =
            true;

        collectedMemories++;
    }
}
}
    
);

canvas.addEventListener(
    "touchend",
    (e) => {

        if (!puzzle.active) {
            return;
        }

        e.preventDefault();

        const touch =
            e.changedTouches[0];

        handlePuzzleClick(
            touch.clientX,
            touch.clientY,
            canvas
        );

        if (puzzle.solved) {

    const puzzleMemory =
        memories.find(
            m => m.type === "puzzle"
        );

    if (
        puzzleMemory &&
        !puzzleMemory.collected
    ) {

        puzzleMemory.collected =
            true;

        collectedMemories++;
    }
}
    },
    {
        passive: false
    }
);

function drawMemories() {

    memories.forEach(memory => {

        if (memory.collected) {
            return;
        }

        if (
            heartSprite.complete &&
            heartSprite.naturalWidth > 0
        ) {

            ctx.drawImage(
                heartSprite,
                memory.x - 24,
                memory.y - 24,
                48,
                48
            );

        } else {

            ctx.fillStyle = "red";

            ctx.beginPath();

            ctx.arc(
                memory.x,
                memory.y,
                20,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }
    });
}

function update() {

    if (
        typeof interactPressed !==
        "undefined" &&
        interactPressed
    ) {

        interact();

        interactPressed = false;
    }

    if (puzzle.active) {
        return;
    }

    if (!dialogueOpen) {

        player.update();
    }

  updateCamera();

checkMemories();

checkQuestions();
}

function drawInteractionHint() {

    if (
        activeMemory &&
        !dialogueOpen &&
        !puzzle.active
    ) {

        ctx.fillStyle =
            "white";

        ctx.font =
            "24px Arial";

        ctx.fillText(
            "Toca el corazon para ver este recuerdo ❤️",
            canvas.width / 2 - 100,
            60
        );
      
    }
    if (
    activeQuestion &&
    !puzzle.active
) {

    ctx.fillStyle =
        "#ffd700";

    ctx.font =
        "24px Arial";

    ctx.fillText(
        "Toca para responder la pregunta 💬",
        canvas.width / 2 - 160,
        100
    );
}
}

function drawDialogue() {

    if (
        !dialogueOpen ||
        !activeMemory
    ) {
        return;
    }

    ctx.fillStyle =
        "rgba(0,0,0,0.8)";

    ctx.fillRect(
        50,
        canvas.height - 220,
        canvas.width - 100,
        170
    );

    ctx.fillStyle =
        "white";

    ctx.font =
        "24px Arial";

    ctx.fillText(
        activeMemory.text,
        80,
        canvas.height - 130
    );
}

function drawVictoryMessage() {

    if (
        collectedMemories ===
        memories.length
    ) {

        ctx.fillStyle =
            "rgba(0,0,0,0.7)";

        ctx.fillRect(
            canvas.width / 2 - 250,
            80,
            500,
            80
        );

        ctx.fillStyle =
            "#ffd700";

        ctx.font =
            "32px Arial";

        ctx.fillText(
            "¡Encontraste todos los recuerdos!",
            canvas.width / 2 - 220,
            130
        );
    }
}

function draw() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.save();

    ctx.translate(
        -camera.x,
        -camera.y
    );

    drawBackground();

    drawDecorations(ctx);

    drawMemories();

    player.draw(ctx);

    ctx.restore();

    drawInteractionHint();

    drawDialogue();

    if (
    collectedMemories ===
    memories.length
) {

    drawFinalScreen(ctx);

} else {

    drawVictoryMessage();
}

    drawUI(ctx);

    if (puzzle.active) {

        drawPuzzle(
            ctx,
            canvas
        );
    }
}

function gameLoop() {

    update();

    draw();

    requestAnimationFrame(
        gameLoop
    );
}

gameLoop();