Ponder.registry((event) => {
    event.create(["charcoal_pit:sandy_collector", "immersiveengineering:creosote_bucket", "charcoal_pit:log_pile"])
        .tag("charcoal_pit:ponder")
        .scene("creosote_funnel_use", "", (scene) => {
            let dirt = "minecraft:dirt"

            scene.showBasePlate()
            scene.idle(20)

            //
            scene.addKeyframe()
            scene.world.setBlocks([2, 1, 2], "charcoal_pit:sandy_collector")
            scene.world.showSection([2, 1, 2], Direction.DOWN)
            scene.idle(20)
            scene.text(60, "The Creosote Funnel can produce a certain amount of creosote oil after a Log Pile burns", [2, 1.5, 2])
            scene.idle(60)

            //
            scene.addKeyframe()
            let dirt1 = [[2, 2, 3], [1, 2, 2], [2, 2, 1], [3, 2, 2]]
            dirt1.forEach((pos) => {
                scene.world.setBlocks(pos, dirt)
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)
            scene.text(40, "Surround it with four solid blocks on all sides.")
            scene.idle(40)

            //
            scene.addKeyframe()
            scene.world.setBlocks([2, 2, 2], "charcoal_pit:log_pile")
            scene.world.modifyBlocks([2, 2, 2], (state) => state.with("axis", "y"), false)
            scene.world.showSection([2, 2, 2], Direction.DOWN)
            scene.idle(20)
            scene.text(40, "Place a Log Pile in the center.", [2, 3.5, 2])
            scene.idle(40)

            //
            scene.addKeyframe()
            scene.showControls(20, [2, 3.5, 2], "down")
                .withItem("charcoal_pit:fire_starter")
            scene.idle(30)
            scene.world.modifyBlocks([2, 2, 2], (state) => state.with("lit", "true"), false)
            scene.world.showIndependentSectionImmediately([2, 3, 2])
            scene.world.setBlocks([2, 3, 2], "minecraft:fire")
            scene.idle(30)
            scene.world.setBlocks([2, 3, 2], dirt, false)

            //
            scene.addKeyframe()
            scene.idle(40)
            let dirt2 = [[2, 2, 3], [1, 2, 2], [2, 2, 1], [3, 2, 2], [2, 3, 2]]
            dirt2.forEach((pos) => {
                scene.world.setBlocks(pos, "minecraft:air")
            })
            scene.world.modifyBlocks([2, 2, 2], "charcoal_pit:wood_ash", false)
            scene.idle(20)
            scene.world.modifyBlocks([2, 2, 2], "minecraft:air")
            scene.idle(20)
            scene.showControls(30, [2, 2.5, 2], "down")
                .withItem("immersiveengineering:creosote_bucket")
            scene.idle(20)
        })
})