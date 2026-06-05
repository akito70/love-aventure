const keys = {};

let interactPressed = false;

function activateKey(key) {

    keys[key] = true;
}

function deactivateKey(key) {

    keys[key] = false;
}

window.addEventListener(
    "keydown",
    (e) => {

        keys[e.key] = true;

        if (
            typeof startMusic ===
            "function"
        ) {

            startMusic();
        }
    }
);

window.addEventListener(
    "keyup",
    (e) => {

        keys[e.key] = false;
    }
);

const mobileButtons = {

    up: "w",
    down: "s",
    left: "a",
    right: "d"
};

Object.keys(mobileButtons).forEach(id => {

    const button =
        document.getElementById(id);

    if (!button) {
        return;
    }

    button.addEventListener(
        "touchstart",
        (e) => {

            e.preventDefault();

            activateKey(
                mobileButtons[id]
            );

            if (
                typeof startMusic ===
                "function"
            ) {

                startMusic();
            }
        }
    );

    button.addEventListener(
        "touchend",
        (e) => {

            e.preventDefault();

            deactivateKey(
                mobileButtons[id]
            );
        }
    );

    button.addEventListener(
        "touchcancel",
        (e) => {

            e.preventDefault();

            deactivateKey(
                mobileButtons[id]
            );
        }
    );
});

const interactBtn =
    document.getElementById(
        "interactBtn"
    );

if (interactBtn) {

    interactBtn.addEventListener(
        "touchstart",
        (e) => {

            e.preventDefault();

            interactPressed = true;

            if (
                typeof startMusic ===
                "function"
            ) {

                startMusic();
            }
        }
    );

    interactBtn.addEventListener(
        "click",
        (e) => {

            e.preventDefault();

            interactPressed = true;

            if (
                typeof startMusic ===
                "function"
            ) {

                startMusic();
            }
        }
    );
}