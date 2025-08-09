Ponder.registry((event) => {
    event.create(["minecraft:charcoal", "charcoal_pit:log_pile", "charcoal_pit:wood_ash"])
        .tag("charcoal_pit:ponder")
        .scene("basic_usage", "", (scene) => {
            let dirt = "minecraft:dirt"

            scene.showBasePlate()
            scene.idle(20)

            scene.addKeyframe()
            scene.world.setBlocks([2, 1, 2], "charcoal_pit:log_pile")
            scene.world.showSection([2, 1, 2], Direction.DOWN)
            scene.world.modifyBlocks([2, 1, 2], (state) => state.with("axis", "y"), false)
            scene.idle(20)

            scene.addKeyframe()

            let dirtBlock = [
                [2, 1, 3],
                [1, 1, 2],
                [2, 1, 1],
                [3, 1, 2]
            ]
            dirtBlock.forEach((pos) => {
                scene.world.setBlocks(pos, dirt)
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            scene.showControls(20, [2, 2.5, 2], "down")
                .withItem("charcoal_pit:fire_starter")
            scene.idle(30)
            scene.addKeyframe()
            scene.world.modifyBlocks([2, 1, 2], (state) => state.with("lit", "true"), false)
            scene.world.setBlocks([2, 2, 2], "minecraft:fire", false)

            scene.world.showIndependentSectionImmediately([2, 2, 2])
            scene.idle(20)
            scene.world.setBlocks([2, 4, 2], dirt)
            scene.world.moveSection(scene.world.showIndependentSection([2, 4, 2], Direction.DOWN), [0, -2, 0], 0)
            scene.world.setBlocks([2, 2, 2], "minecraft:air", false)

            scene.addKeyframe()
            scene.idle(40)

            let air1 = [
                [2, 1, 3],
                [1, 1, 2],
                [2, 1, 1],
                [3, 1, 2],
                [2, 4, 2]
            ]
            air1.forEach((pos) => {
                scene.world.setBlocks(pos, "minecraft:air")
            })
            scene.world.setBlocks([2, 1, 2], "charcoal_pit:wood_ash", false)
            scene.idle(20)
            scene.world.setBlocks([2, 1, 2], "minecraft:air")

            let charcoal1 = scene.world.createItemEntity([2.5, 2, 2.5], Direction.DOWN, "7x minecraft:charcoal")
            let ash1 = scene.world.createItemEntity([2.5, 2, 2.5], Direction.DOWN, "2x charcoal_pit:ash")

            scene.idle(40)
            scene.world.removeEntity(charcoal1)
            scene.world.removeEntity(ash1)

            //
            scene.addKeyframe()
            scene.idle(20)

            let dirt2 = [
                [3, 1, 4], [2, 1, 4], [1, 1, 4],
                [0, 1, 3], [0, 1, 2], [0, 1, 1],
                [1, 1, 0], [2, 1, 0], [3, 1, 0],
                [4, 1, 1], [4, 1, 2], [4, 1, 3]
            ]
            dirt2.forEach((pos) => {
                scene.world.setBlocks(pos, dirt)
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })

            scene.world.setBlocks([3, 6, 1, 1, 6, 3], "charcoal_pit:log_pile")
            scene.world.modifyBlocks([3, 6, 1, 1, 6, 3], (state) => state.with("axis", "y"), false)
            scene.world.moveSection(scene.world.showIndependentSection([3, 6, 1, 1, 6, 3], Direction.DOWN), [0, -5, 0], 0)
            scene.idle(20)

            scene.addKeyframe()
            scene.showControls(20, [2, 2.5, 2], "down")
                .withItem("charcoal_pit:fire_starter")
            scene.idle(30)
            scene.world.modifyBlocks([3, 6, 1, 1, 6, 3], (state) => state.with("lit", "true"), false)
            scene.world.setBlocks([3, 7, 1, 1, 7, 3], "minecraft:fire", false)
            scene.world.moveSection(scene.world.showIndependentSectionImmediately([3, 7, 1, 1, 7, 3]), [0, -5, 0], 0)
            scene.idle(20)
            scene.world.setBlocks([3, 7, 1, 1, 7, 3], "minecraft:air", false)

            scene.world.setBlocks([3, 8, 1, 1, 8, 3], dirt, false)
            scene.world.moveSection(scene.world.showIndependentSection([3, 8, 1, 1, 8, 3], Direction.DOWN), [0, -6, 0], 0)
            scene.idle(20)

            scene.addKeyframe()

            let air2 = [
                [3, 1, 4], [2, 1, 4], [1, 1, 4],
                [0, 1, 3], [0, 1, 2], [0, 1, 1],
                [1, 1, 0], [2, 1, 0], [3, 1, 0],
                [4, 1, 1], [4, 1, 2], [4, 1, 3]
            ]
            air2.forEach((pos) => {
                scene.world.setBlocks(pos, "minecraft:air")
            })
            scene.world.setBlocks([3, 8, 1, 1, 8, 3], "minecraft:air")
            scene.world.setBlocks([3, 6, 1, 1, 6, 3], "charcoal_pit:wood_ash")
            scene.idle(20)
            scene.world.setBlocks([3, 6, 1, 1, 6, 3], "minecraft:air")

            let createItemEntity = [
                [3.5, 1.5, 3.5], [2.5, 1.5, 3.5], [1.5, 1.5, 3.5],
                [3.5, 1.5, 2.5], [2.5, 1.5, 2.5], [1.5, 1.5, 2.5],
                [3.5, 1.5, 1.5], [2.5, 1.5, 1.5], [1.5, 1.5, 1.5],
            ]
            createItemEntity.forEach((pos) => {
                scene.world.createItemEntity(pos, Direction.DOWN, "7x minecraft:charcoal")
                scene.world.createItemEntity(pos, Direction.DOWN, "2x charcoal_pit:ash")
            })
            scene.idle(20)
        })
})