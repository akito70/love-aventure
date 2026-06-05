const memories = [

    {
        id: 1,

        type: "photo",

        x: 1000,
        y: 3500,

        collected: false,

        text:
        "Hola princesita, este es el comienzo de nuestra aventura, tenemos muchas cosas por vivir juntos, muchos lugares por visitar y mas momentos por compartir❤️ Sigue buscando, hay muchos recuerdos guardados en este mundo esperando a ser descubiertos ❤️"
    },

    {
        id: 2,

        type: "video",

        x: 1800,
        y: 3000,

        collected: false,

        text:
        "Eres mi compañera en todas nuestras travesuras. Quien comparte conmigo uno y mil besos, desde tiernos hasta mañosos pero que contigo siempre querre uno mas muak  ❤️"
    },

    {
        id: 3,

        type: "photo",

        x: 2600,
        y: 2500,

        collected: false,

        text:
        "Soy tuyo y tu eres mia, mi niña, mi princesita, mi amor, mi Esthercita te amo mucho... continuaa buscando preciosa ❤️"
    },

    {
        id: 4,

        type: "puzzle",

        x: 3300,
        y: 2200,

        collected: false,

        text:
        "Un pequeño desafio para ti, lograste resolverlo?❤️"
    },

    {
        id: 5,

        type: "video",

        x: 4300,
        y: 1700,

        collected: false,

        text:
        "Un par de momentos felieces y recuerdos  ❤️"
    },

    {
        id: 6,

        type: "video",

        x: 5000,
        y: 1200,

        collected: false,

        text:
        "Jsjsjsj amor poder compartir mi vida contigo, cuando nos casemos y recordemos todas las locuras que hemos vivido reiremos mucho hasta terminar besandote y decirte que te amo❤️"
    },

    {
        id: 7,

        type: "final",

        x: 5500,
        y: 700,

        collected: false,

        text:
        "La última sorpresa te está esperando ❤️"
    }

];

let activeMemory = null;

let dialogueOpen = false;

let collectedMemories = 0;