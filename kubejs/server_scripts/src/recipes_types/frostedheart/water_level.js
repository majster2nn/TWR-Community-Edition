ServerEvents.recipes((event) => {

    const soups = [
        'caupona:nail_soup',
        'caupona:acquacotta',
        'caupona:bisque',
        'caupona:borscht',
        'caupona:borscht_cream',
        'caupona:congee',
        'caupona:cream_of_mushroom_soup',
        'caupona:cream_of_meat_soup',
        'caupona:custard',
        'caupona:dilute_soup',
        'caupona:egg_drop_soup',
        'caupona:egg_tongsui',
        'caupona:fish_chowder',
        'caupona:fish_soup',
        'caupona:fricassee',
        'caupona:goji_tongsui',
        'caupona:goulash',
        'caupona:gruel',
        'caupona:hodgepodge',
        'caupona:meat_soup',
        'caupona:mushroom_soup',
        'caupona:nettle_soup',
        'caupona:okroshka',
        'caupona:porridge',
        'caupona:poultry_soup',
        'caupona:pumpkin_soup',
        'caupona:pumpkin_soup_cream',
        'caupona:rice_pudding',
        'caupona:scalded_milk',
        'caupona:seaweed_soup',
        'caupona:stock',
        'caupona:stracciatella',
        'caupona:ukha',
        'caupona:vegetable_chowder',
        'caupona:vegetable_soup',
        'caupona:walnut_soup'
    ]

    soups.forEach((fluidName) => {
        // For now, allow all containers
        event.custom({
            type: "frostedheart:water_level_and_effect",
            fluid: fluidName,
            waterLevel: 5,
            waterSaturationLevel: 6
        })
        // thermos
        // event.custom({
        //     type: "frostedheart:water_level_and_effect",
        //     ingredient: {
        //         "tag": "frostedheart:thermos"
        //     },
        //     fluid: fluidName,
        //     waterLevel: 5,
        //     waterSaturationLevel: 6
        // })
        // caupona bowls
        // event.custom({
        //     type: "frostedheart:water_level_and_effect",
        //     ingredient: {
        //         "tag": "caupona:stews"
        //     },
        //     fluid: fluidName,
        //     waterLevel: 5,
        //     waterSaturationLevel: 6
        // })
    })
})