const particles = [];

for(let i=0;i<40;i++)   {

    particles.push({

        x:Math.random()*window.innerWidth,

        y:Math.random()*window.innerHeight,

        speed:1+Math.random()*3,

        size:50+Math.random()*60
    });
}

function drawFinalScreen(ctx){

    ctx.fillStyle =
    "rgba(0,0,0,0.85)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p=>{

        p.y += p.speed;

        if(
            p.y >
            canvas.height+50
        ){
            p.y = -50;
        }

        ctx.font =
        `${p.size}px Arial`;

       const symbols = [

    "❤️",
    "🌸",
    "🌹",
    "✨"
];

ctx.fillText(

    symbols[
        Math.floor(
            Math.random() *
            symbols.length
        )
    ],

    p.x,
    p.y
);
    });

    ctx.fillStyle =
    "#ffd700";

    ctx.font =
    "52px Arial";

    ctx.fillText(
        "Feliz Cumpleaños ❤️",
        canvas.width/2-230,
        150
    );

    ctx.fillStyle =
    "white";

    ctx.font =
    "28px Arial";

    ctx.fillText(
        "Gracias por compartir 37 mese conmigo, por toda la felicidad que he podido vivir a tu lado y por ser la persona maravillosa que eres ❤️ Espero que te gustara esta pequeña aventura, no es la gran cosa pero lo hice con cariño para ti, espero que te haya sacado una sonrisa y que te haya hecho recordar algunos de los momentos que hemos vivido juntos ❤️ Te amo muchísimo ❤️ ",
        canvas.width/2-250,
        240
    );

    ctx.fillText(
        "Feliz cumpleaños mi princesita❤️ ",
        canvas.width/2-140,
        300
    );
}