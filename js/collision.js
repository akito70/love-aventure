class CollisionSystem {

    static checkRectCollision(a, b) {

        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }

    static willCollide(player, nextX, nextY, objects) {

       const futurePlayer = {

    x: nextX + 18,
    y: nextY + 38,

    width: 28,
    height: 20
};

        for (const object of objects) {

            if (!object.solid) {
                continue;
            }

            let collisionBox = {

                x: object.x,
                y: object.y,
                width: object.width,
                height: object.height
            };

            if (object.type === "tree") {

                collisionBox = {

                    x: object.x + 28,
                    y: object.y + 55,

                    width: 40,
                    height: 35
                };
            }

            if (
                CollisionSystem.checkRectCollision(
                    futurePlayer,
                    collisionBox
                )
            ) {
                return true;
            }
        }

        return false;
    }
}