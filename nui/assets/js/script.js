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
            if (e.whenUse) {
                if (Math.round(e.health) > 50) {
                    $("#health").hide()
                } else if (Math.round(e.health) < 50) {
                    $("#health").show()
                }
                if (Math.round(e.shield) > 50) {
                    $("#shield").show()
                } else if (Math.round(e.shield) < 50) {
                    $("#shield").hide()
                }
                if (Math.round(e.hunger) > 50) {
                    $("#hunger").hide()
                } else if (Math.round(e.hunger) < 50) {
                    $("#hunger").show()
                }
                if (Math.round(e.thirst) > 50) {
                    $("#thirst").hide()
                } else if (Math.round(e.thirst) < 50) {
                    $("#thirst").show()
                }
                if (Math.round(e.thirst) > 50) {
                    $("#stress").hide()
                } else if (Math.round(e.thirst) < 50) {
                    $("#stress").show()
                }
            }

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