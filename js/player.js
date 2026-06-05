class Player {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.width = 64;
        this.height = 64;

        this.speed = 4;

        this.sprite = new Image();
        this.sprite.src = "./assets/sprites/player.png";
    }

    update() {

        let nextX = this.x;
        let nextY = this.y;

        if (keys["w"] || keys["ArrowUp"]) {
            nextY -= this.speed;
        }

        if (keys["s"] || keys["ArrowDown"]) {
            nextY += this.speed;
        }

        if (keys["a"] || keys["ArrowLeft"]) {
            nextX -= this.speed;
        }

        if (keys["d"] || keys["ArrowRight"]) {
            nextX += this.speed;
        }

        if (
            !CollisionSystem.willCollide(
                this,
                nextX,
                this.y,
                collisionObjects
            )
        ) {
            this.x = nextX;
        }

        if (
            !CollisionSystem.willCollide(
                this,
                this.x,
                nextY,
                collisionObjects
            )
        ) {
            this.y = nextY;
        }

        this.x = Math.max(
            0,
            Math.min(
                this.x,
                WORLD.width - this.width
            )
        );

        this.y = Math.max(
            0,
            Math.min(
                this.y,
                WORLD.height - this.height
            )
        );
    }

    draw(ctx) {

        if (
            this.sprite.complete &&
            this.sprite.naturalWidth > 0
        ) {

            ctx.drawImage(
                this.sprite,
                this.x,
                this.y,
                this.width,
                this.height
            );

        } else {

            ctx.fillStyle = "#ff69b4";

            ctx.fillRect(
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
    }
}