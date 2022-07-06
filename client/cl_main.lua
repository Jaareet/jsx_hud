local JSX = {}

Citizen.CreateThread(function()
    while (true) do
        TriggerEvent('esx:getSharedObject', function(obj)
            JSX = obj
        end)
        Citizen.Wait(2000)
    end

    while (JSX.GetPlayerData() ~= nil) do
        Citizen.Wait(100)
    end

    JSX.PlayerData = JSX.GetPlayerData()
end)

Citizen.CreateThread(function()
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
            health = math.ceil(GetEntityHealth(PlayerPedId()) / 2),
            shield = GetPedArmour(PlayerPedId()),
            hunger = JSX.Math.Round(hunger),
            thirst = JSX.Math.Round(thirst),
            stress = JSX.Math.Round(stress) or 0,
            IsPedInAnyVehicle = IsPedInAnyVehicle(PlayerPedId()),
            whenUse = true
        })

        DisplayRadar(IsPedInAnyVehicle(PlayerPedId()))

        Citizen.Wait(IsPedInAnyVehicle(PlayerPedId()) and 500 or 1000)
    end
end)
