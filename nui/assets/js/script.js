$(() => {
    addEventListener('message', event => {
        const e = event.data

        if (e.type === 'toggleHud') {
            const body = document.getElementById('statusHud');

            if (e.toggle) {
                body.style.opacity = '1';
            } else if (e.toggle === false) {
                body.style.opacity = '0';
            }
        }

        if (e.type === 'updateElements') {
            document.getElementById('healthVal').innerHTML = e.health;
            document.getElementById('shieldVal').innerHTML = e.shield;
            document.getElementById('hungerVal').innerHTML = e.hunger;
            document.getElementById('thirstVal').innerHTML = e.thirst;
            document.getElementById('stressVal').innerHTML = e.stress;

            if (e.IsPedInAnyVehicle) {
                $('#statusHud').css({ 'left': '15%' })
            } else {
                $('#statusHud').css({ 'left': '1%' })
            }
        }
    })
})