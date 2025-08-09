BlockEvents.modification((event) => {
    let cogwheelSoundType = [
        "bronze",
        "cast_iron",
        "steel"
    ]
    cogwheelSoundType.forEach((materials) => {
        event.modify(`steampowered:${materials}_large_cogwheel`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
        event.modify(`steampowered:${materials}_cogwheel`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
    })

    let lanternSoundType = [
        // SteamPowered
        "steampowered:bronze_boiler",
        "steampowered:bronze_burner",
        "steampowered:bronze_steam_engine",
        "steampowered:bronze_flywheel",
        "steampowered:cast_iron_boiler",
        "steampowered:cast_iron_burner",
        "steampowered:cast_iron_steam_engine",
        "steampowered:cast_iron_flywheel",
        "steampowered:steel_boiler",
        "steampowered:steel_burner",
        "steampowered:steel_steam_engine",
        "steampowered:steel_flywheel"
    ]
    lanternSoundType.forEach((item) => {
        event.modify(item, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
    })
})