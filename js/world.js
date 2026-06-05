const treeSprite = new Image();
treeSprite.src = "./assets/sprites/tree.png";

const flowerSprite = new Image();
flowerSprite.src = "./assets/sprites/flower.png";

const rockSprite = new Image();
rockSprite.src = "./assets/sprites/rock.png";

const heartSprite = new Image();
heartSprite.src = "./assets/sprites/heart.png";

const bushSprite = new Image();
bushSprite.src = "./assets/sprites/bush.png";

const houseSprite = new Image();
houseSprite.src = "./assets/sprites/house.png";

const npcSprite = new Image();
npcSprite.src = "./assets/sprites/npc.png";

const signSprite = new Image();
signSprite.src = "./assets/sprites/sign.png";

const waterSprite = new Image();
waterSprite.src = "./assets/sprites/water.png";

const pathHorizontalSprite = new Image();
pathHorizontalSprite.src =
    "./assets/sprites/path_horizontal.png";

const pathVerticalSprite = new Image();
pathVerticalSprite.src =
    "./assets/sprites/path_vertical.png";

const decorations = [];
// CARTEL INICIAL

decorations.push({
    type:"sign",
    x:500,
    y:3700,
    width:64,
    height:64,
    solid:false
});

// NPC

decorations.push({
    type:"npc",
    x:3200,
    y:2200,
    width:64,
    height:64,
    solid:false
});

// CASA FINAL

decorations.push({
    type:"house",
    x:5500,
    y:400,
    width:300,
    height:300,
    solid:true
});

// LAGO GRANDE

decorations.push({
    type:"water",
    x:2600,
    y:1800
});
// BOSQUE SUR

for(let i=0;i<120;i++){

    decorations.push({

        type:"tree",

        x:Math.random()*1800,

        y:2400+Math.random()*1800,

        width:96,
        height:96,

        solid:true
    });
}

// BOSQUE CENTRAL

for(let i=0;i<120;i++){

    decorations.push({

        type:"tree",

        x:1800+Math.random()*2200,

        y:1200+Math.random()*1800,

        width:96,
        height:96,

        solid:true
    });
}

// BOSQUE NORTE

for(let i=0;i<150;i++){

    decorations.push({

        type:"tree",

        x:3800+Math.random()*1800,

        y:Math.random()*1800,

        width:96,
        height:96,

        solid:true
    });
}

// ROCAS

for(let i=0;i<40;i++){

    decorations.push({

        type:"rock",

        x:Math.random()*5800,

        y:Math.random()*4300,

        width:64,
        height:64,

        solid:true
    });
}

// ARBUSTOS

for(let i=0;i<80;i++){

    decorations.push({

        type:"bush",

        x:Math.random()*5800,

        y:Math.random()*4300,

        width:64,
        height:64,

        solid:true
    });
}

// FLORES

for(let i=0;i<150;i++){

    decorations.push({

        type:"flower",

        x:Math.random()*5800,

        y:Math.random()*4300,

        solid:false
    });
}

// PISTAS

decorations.push({
    type:"sign",
    x:1000,
    y:3400,
    width:64,
    height:64,
    solid:false
});

decorations.push({
    type:"sign",
    x:3100,
    y:2300,
    width:64,
    height:64,
    solid:false
});

decorations.push({
    type:"sign",
    x:5000,
    y:1000,
    width:64,
    height:64,
    solid:false
});

const collisionObjects =
    decorations.filter(
        obj => obj.solid
    );

function drawDecorations(ctx) {

    decorations.forEach(obj => {

        if (
            obj.type === "tree" &&
            treeSprite.complete
        ) {

            ctx.drawImage(
                treeSprite,
                obj.x,
                obj.y,
                96,
                96
            );
        }

        if (
            obj.type === "flower" &&
            flowerSprite.complete
        ) {

            ctx.drawImage(
                flowerSprite,
                obj.x,
                obj.y,
                40,
                40
            );
        }

        if (
            obj.type === "rock" &&
            rockSprite.complete
        ) {

            ctx.drawImage(
                rockSprite,
                obj.x,
                obj.y,
                64,
                64
            );
        }

        if (
            obj.type === "bush" &&
            bushSprite.complete
        ) {

            ctx.drawImage(
                bushSprite,
                obj.x,
                obj.y,
                64,
                64
            );
        }

        if (
            obj.type === "sign" &&
            signSprite.complete
        ) {

            ctx.drawImage(
                signSprite,
                obj.x,
                obj.y,
                64,
                64
            );
        }

        if (
            obj.type === "npc" &&
            npcSprite.complete
        ) {

            ctx.drawImage(
                npcSprite,
                obj.x,
                obj.y,
                64,
                64
            );
        }

        if (
            obj.type === "house" &&
            houseSprite.complete
        ) {

            ctx.drawImage(
                houseSprite,
                obj.x,
                obj.y,
                256,
                256
            );
        }

        if (
            obj.type === "water" &&
            waterSprite.complete
        ) {

            ctx.drawImage(
                waterSprite,
                obj.x,
                obj.y,
                128,
                128
            );
        }

        if (
            obj.type === "pathV" &&
            pathVerticalSprite.complete
        ) {

            ctx.drawImage(
                pathVerticalSprite,
                obj.x,
                obj.y,
                128,
                128
            );
        }

        if (
            obj.type === "pathH" &&
            pathHorizontalSprite.complete
        ) {

            ctx.drawImage(
                pathHorizontalSprite,
                obj.x,
                obj.y,
                128,
                128
            );
        }
    });
}