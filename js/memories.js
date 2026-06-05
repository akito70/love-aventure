const memories = [

    {
        id: 1,

        type: "photo",

        x: 1000,
        y: 3500,

        collected: false,

        text:
        "Aquí comenzó una de mis etapas favoritas ❤️"
    },

    {
        id: 2,

        type: "video",

        x: 1800,
        y: 3000,

        collected: false,

        text:
        "Hay recuerdos que siempre me hacen sonreír ❤️"
    },

    {
        id: 3,

        type: "photo",

        x: 2600,
        y: 2500,

        collected: false,

        text:
        "Cada momento contigo tiene algo especial ❤️"
    },

    {
        id: 4,

        type: "puzzle",

        x: 3300,
        y: 2200,

        collected: false,

        text:
        "Antes de continuar tendrás que resolver este pequeño desafío ❤️"
    },

    {
        id: 5,

        type: "video",

        x: 4300,
        y: 1700,

        collected: false,

        text:
        "Uno de mis recuerdos favoritos quedó guardado aquí ❤️"
    },

    {
        id: 6,

        type: "photo",

        x: 5000,
        y: 1200,

        collected: false,

        text:
        "Ya casi llegas al final de esta aventura ❤️"
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