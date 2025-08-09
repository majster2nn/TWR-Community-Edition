ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes
    let recipes = [

    ]
    recipes.forEach((recipe) => {
        let re = minecraft.blasting(recipe.output, recipe.input)
        if (recipe.xp) {
            re.xp(recipe.xp);
        }
        if (recipe.id) {
            re.id(recipe.id);
        }
    })
})