local JSX = exports['es_extended']:getSharedObject()

RegisterNetEvent('esx:playerLoaded', function(xPlayer)
    JSX.PlayerData = xPlayer

    while (JSX.PlayerData ~= nil) do
        Citizen.Wait(50)
    end

    StartHudLoop()
end)

RegisterNetEvent('onResourceStart', function(xResource)
    if (xResource == GetCurrentResourceName()) then
        JSX.PlayerData = JSX.GetPlayerData()

        while (JSX.PlayerData ~= nil) do
            Citizen.Wait(50)
        end

        StartHudLoop()
    end
end)

function StartHudLoop()
    Citizen.CreateThread(function()
        local health, shield = 0, 0

        while (true) do
            TriggerEvent('esx_status:getStatus', 'hunger', function(status)
                hunger = math.ceil(status.val / 10000)
            end)

            TriggerEvent('esx_status:getStatus', 'thirst', function(status)
                thirst = math.ceil(status.val / 10000)
            end)

            TriggerEvent('esx_status:getStatus', 'stress', function(status)
                stress = math.ceil(status.val / 10000)
            end)

            SendNUIMessage({
                type = 'updateElements',

                hud = {
                    methods = {
                        whenUse = true
                    }
                },

                status = {
                    data = {
                        health = math.ceil(GetEntityHealth(PlayerPedId()) / 2),
                        shield = GetPedArmour(PlayerPedId()),
                        hunger = JSX.Math.Round(hunger),
                        thirst = JSX.Math.Round(thirst),
                        stress = JSX.Math.Round(stress or 100)
                    }
                },

                global = {
                    IsPedInAnyVehicle = IsPedInAnyVehicle(PlayerPedId())
                }
            })

            DisplayRadar(IsPedInAnyVehicle(PlayerPedId()))

            Citizen.Wait(IsPedInAnyVehicle(PlayerPedId()) and 500 or 1000)
        end
    end)
end
