ItemEvents.tooltip((event) => {
    function createItemTooltip(key) {
        return Text.of(Component.translate(`tooltip.the_winter_rescue.${key}`)).gray()
    }

    let addTooltip = [
        {
            items: ["minecraft:blast_furnace", "minecraft:furnace"],
            key: ["replaced_recipe"]
        }
    ]
    addTooltip.forEach((recipe) => {
        event.add(recipe.items, recipe.key.map(createItemTooltip))
    })
})