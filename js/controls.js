const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    shift: false
};


function setupKeyboard() {

    window.addEventListener('keydown', (event) => {

        const key = event.key.toLowerCase();

        if (key === 'w' || key === 'arrowup') {
            keys.w = true;
        }

        if (key === 'a' || key === 'arrowleft') {
            keys.a = true;
        }

        if (key === 's' || key === 'arrowdown') {
            keys.s = true;
        }

        if (key === 'd' || key === 'arrowright') {
            keys.d = true;
        }

        if (key === 'shift') {
            keys.shift = true;
        }

    });


    window.addEventListener('keyup', (event) => {

        const key = event.key.toLowerCase();

        if (key === 'w' || key === 'arrowup') {
            keys.w = false;
        }

        if (key === 'a' || key === 'arrowleft') {
            keys.a = false;
        }

        if (key === 's' || key === 'arrowdown') {
            keys.s = false;
        }

        if (key === 'd' || key === 'arrowright') {
            keys.d = false;
        }

        if (key === 'shift') {
            keys.shift = false;
        }

    });

}


function setupMobileControls() {

    const buttons =
        document.querySelectorAll(
            '#mobile-controls [data-key]'
        );


    buttons.forEach(button => {

        const key = button.dataset.key;


        button.addEventListener(
            'pointerdown',
            event => {

                event.preventDefault();

                keys[key] = true;

            }
        );


        button.addEventListener(
            'pointerup',
            event => {

                event.preventDefault();

                keys[key] = false;

            }
        );


        button.addEventListener(
            'pointercancel',
            () => {

                keys[key] = false;

            }
        );


        button.addEventListener(
            'pointerleave',
            () => {

                keys[key] = false;

            }
        );

    });


    const runButton =
        document.getElementById('mobile-run');


    if (runButton) {

        runButton.addEventListener(
            'pointerdown',
            event => {

                event.preventDefault();

                keys.shift = true;

            }
        );


        runButton.addEventListener(
            'pointerup',
            () => {

                keys.shift = false;

            }
        );


        runButton.addEventListener(
            'pointercancel',
            () => {

                keys.shift = false;

            }
        );

    }

}


export function initializeControls() {

    setupKeyboard();

    setupMobileControls();

}


export function getKeys() {

    return keys;

}