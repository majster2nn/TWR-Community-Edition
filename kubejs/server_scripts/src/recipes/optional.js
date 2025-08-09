ServerEvents.recipes((event) => {
    let {kubejs} = event.recipes

    /* Example
    if (Platform.isLoaded("torcherino")) {
        kubejs.shaped("minecraft:stone", [
            "XXX",
            "XXX",
            "XXX"
        ], {
            X: "#forge:nuggets"
        })
    } else if (!Platform.isLoaded("torcherino")) {
        kubejs.shaped("minecraft:stone", [
            "XXX",
            "XXX",
            "XXX"
        ], {
            X: "#forge:ingots"
        })
    }
    */
})