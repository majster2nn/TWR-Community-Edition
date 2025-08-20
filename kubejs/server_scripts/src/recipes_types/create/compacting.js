ServerEvents.recipes((event) => {
    let {create} = event.recipes
    let items = [
        {
            output: "frostedheart:crushed_raw_bauxite",
            input: "frostedheart:bauxite"
        },
        {
            output: "4x frostedheart:kaolin",
            input: "frostedheart:kaolin_block"
        },

        {
            output: "2x kubejs:wet_coal_briquette",
            input: "kubejs:wet_coal_dust"
        },
        {
            output: "3x kubejs:creosoted_coal_briquette",
            input: ["#forge:dusts/coal_coke", Fluid.of("immersiveengineering:creosote", 100)]
        },
		
        {
            output: "kubejs:creosoted_charcoal_briquette",
            input: ["kubejs:charcoal_dust", Fluid.of("immersiveengineering:creosote", 260)]
        },
        {
            output: "kubejs:creosoted_sawdust_briquette",
            input: ["4x #forge:dusts/wood", Fluid.of("immersiveengineering:creosote", 25)]
        },
        {
            output: "4x kubejs:bound_coal_briquette",
            input: ["2x #kubejs:fuel_glue", "#forge:dusts/coal_coke"]
        },
        {
            output: "3x kubejs:bound_charcoal_briquette",
            input: ["4x #kubejs:fuel_glue", "2x kubejs:charcoal_dust"]
        },
        {
            output: "4x kubejs:bound_coal_briquette",
            input: [Fluid.of("create:honey", 125), "#forge:dusts/coal_coke"]
        },
        {
            output: "3x kubejs:bound_charcoal_briquette",
            input: [Fluid.of("create:honey", 250), "2x kubejs:charcoal_dust"]
        },
        {
            output: "6x frostedheart:chocolate",
            input: [Fluid.of("frostedheart:protein", 900), "frostedheart:generator_ash"]
        },

        {
            output: "charcoal_pit:coal_pile",
            input: ["8x minecraft:coal"]
        },
        {
            output: "kubejs:wet_straw_briquette",
            input: ["8x charcoal_pit:straw"]
        },
        {
            output: ["2x frostedheart:packed_snow"],
            input: ["2x minecraft:snow_block"]
        }
    ]
    let heated = [
        {
            output: "2x frostedheart:compressed_biscuits",
            input: [Fluid.of("minecraft:water", 400), "2x create:wheat_flour"]
        },
		{
            output: "9x frostedheart:vulcanized_rubber",
            input: [ Fluid.of("frostedheart:latex", 1000)]
        },
        {
            output: "2x frostedheart:compressed_biscuits",
            input: [Fluid.of("minecraft:water", 400), "3x frostedheart:rye_flour"]
        },
        {
            output: "5x frostedheart:compressed_biscuits",
            input: [Fluid.of("immersiveengineering:plantoil", 100), "6x frostedheart:rye_flour"]
        },
		{
			input: [Fluid.of("frostedheart:pulp",100)],
			output: ["minecraft:paper"]
		},
        {
            output: "5x frostedheart:compressed_biscuits",
            input: [Fluid.of("immersiveengineering:plantoil", 100), "4x create:wheat_flour"]
        },
    	{
			input: ['create:brass_sheet', 'frostedheart:cast_iron_sheet'],
			output: ["create:sturdy_sheet"]
		},
    ]
    items.forEach((item, index) => {
        create.compacting(item.output, item.input)
            .id(`the_winter_rescue:create/compacting/${index}`)
    })
    heated.forEach((item, index) => {
        create.compacting(item.output, item.input)
            .id(`the_winter_rescue:create/compacting/heated/${index}`)
            .heated()
    })
})