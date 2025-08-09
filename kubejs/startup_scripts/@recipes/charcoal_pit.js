new Schema("charcoal_pit:pottery")
    .simpleKey("result", "outputItem")
    .simpleKey("ingredient", "inputItem")
    .simpleKey("experience", "doubleNumber", 0)

/*new Schema("charcoal_pit:barrel")
	.simpleKey("fluid_out", "outputFluid")
	.simpleKey("item_in", "inputItem")
	.simpleKey("fluid_in", "inputFluid")
	.simpleKey("flags", "doubleNumber", 1)
	.simpleKey("time", "doubleNumber", 100)*/

new Schema("charcoal_pit:bloomery")
    .simpleKey("output", "outputItem")
    .simpleKey("input", "inputItem")
    .simpleKey("fail", "inputItem")
    .simpleKey("cool", "inputItem")

new Schema("charcoal_pit:orekiln")
    .simpleKey("result", "outputItem")
    .simpleKey("ingredients", "inputItemArray")