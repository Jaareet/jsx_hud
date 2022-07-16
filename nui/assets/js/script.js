$(() => {
    addEventListener('message', event => {
        const e = event.data

        if (e.type === 'updateElements') {
            if (e.hud.methods.whenUse) {
                if (Math.round(e.status.data.health) >= 80) {
                    $("#health").hide()
                } else if (Math.round(e.status.data.health) <= 80) {
                    $("#health").show()
                }
                if (Math.round(e.status.data.shield) >= 80) {
                    $("#shield").show()
                } else if (Math.round(e.status.data.shield) <= 80) {
                    $("#shield").hide()
                }
                if (Math.round(e.status.data.hunger) >= 80) {
                    $("#hunger").hide()
                } else if (Math.round(e.status.data.hunger) <= 80) {
                    $("#hunger").show()
                }
                if (Math.round(e.status.data.thirst) >= 80) {
                    $("#thirst").hide()
                } else if (Math.round(e.status.data.thirst) <= 80) {
                    $("#thirst").show()
                }
                if (Math.round(e.status.data.stress) >= 80) {
                    $("#stress").hide()
                } else if (Math.round(e.status.data.stress) <= 80) {
                    $("#stress").show()
                }
            }

            $('#healthVal').text(e.status.data.health + '%')
            $('#shieldVal').text(e.status.data.shield + '%')
            $('#hungerVal').text(e.status.data.hunger + '%')
            $('#thirstVal').text(e.status.data.thirst + '%')
            $('#stressVal').text(e.status.data.stress + '%')

            if (e.global.IsPedInAnyVehicle) {
                $('.statusHud').css({ 'left': '16%' })
            } else {
                $('.statusHud').css({ 'left': '1%' })
            }
        }
    })
})