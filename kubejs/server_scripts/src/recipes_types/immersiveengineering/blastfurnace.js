ServerEvents.recipes((event) => {
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:ingot_steel"})
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:storage_steel"})
    event.remove({type: "immersiveengineering:blast_furnace", output: "frostedheart:cast_iron_block"})

    let blastFurnaceRecipes = [
        ["frostedheart:cast_iron_ingot", "minecraft:iron_ingot", 600, 1],
        ["frostedheart:cast_iron_block", "minecraft:iron_block", 5400, 9],
        ['kubejs:rough_graphite_electrode', 'kubejs:shaped_bounded_graphite', 2000, 1],
        ['frostedheart:refractory_brick', 'frostedheart:fire_clay_ball', 100, 0],
        ['charcoal_pit:sandy_brick_item', 'charcoal_pit:unfired_sandy_brick', 100, 0],
        ['minecraft:brick', 'charcoal_pit:unfired_brick', 100, 0],
    ]
    blastFurnaceRecipes.forEach(([output, input, time, slag], index) => {
        addBlastFurnaceRecipe(event, output, input, time, slag, index)
    })

})

function addBlastFurnaceRecipe(event, output, input, time, slagAmount, id) {
  let recipe = {
    type: "immersiveengineering:blast_furnace",
    input: typeof input === "string" ? { item: input } : input,
    result: { item: output },
    time: time
  };

  if (slagAmount > 0) {
    recipe.slag = {
      item: "immersiveengineering:slag",
      count: slagAmount
    };
  }

  event.custom(recipe).id(id);
}