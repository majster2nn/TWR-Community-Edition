Ponder.registry((event) => {
    // Tier 1
    event.create(["frostedheart:generator", "frostedheart:generator_core_t1", "frostedheart:generator_amplifier_r1", "frostedheart:generator_brick"])
        .tag("frostedheart:ponder")
        .scene("basic_usage", "", "kubejs:generator_t1", (scene) => {
            scene.showBasePlate()
            scene.idle(20)

            // Generic build
            let block1 = [
                [4, 1, 0, 0, 1, 4],
                [4, 2, 0, 0, 2, 4],
                [4, 3, 0, 0, 3, 4],
                [4, 4, 0, 0, 4, 4]
            ]
            block1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.addKeyframe()
                scene.idle(40)
            })

            // text
            scene.addKeyframe()
            scene.overlay.showOutline("blue", {}, [2.5, 2, 1], 40)
            scene.overlay.showText(40)
                .text("R-Click to assemble")
                .pointAt([2.5, 2.5, 1])
            scene.idle(20)
            scene.showControls(40, [2, 2.5, 1], "right")
                .withItem("immersiveengineering:hammer")
            scene.world.moveSection(scene.world.showIndependentSectionImmediately([1, 6, 1, 3, 10, 3]), [0, -5, 0], 0)
            scene.world.replaceBlocks([1, 1, 1, 3, 4, 3], "minecraft:air", true)
            scene.idle(40)
        })

    // Tier 2
    event.create(["frostedheart:generator_t2", "frostedheart:invar_block"])
        .tag("frostedheart:ponder")
        .scene("basic_usage", "", "kubejs:generator_t2", (scene) => {
            scene.scaleSceneView(0.5)
            scene.showBasePlate()
            scene.idle(10)

            // Generic build
            let block1 = [
                [4, 1, 0, 0, 1, 4],
                [4, 2, 0, 0, 2, 4],
                [4, 3, 0, 0, 3, 4],
                [4, 4, 0, 0, 4, 4],
                [4, 5, 0, 0, 5, 4],
                [4, 6, 0, 0, 6, 4],
                [4, 7, 0, 0, 7, 4]
            ]
            block1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.addKeyframe()
                scene.idle(40)
            })

            // text
            scene.addKeyframe()
            scene.overlay.showOutline("blue", {}, [2.5, 2, 1], 40)
            scene.overlay.showText(40)
                .text("R-Click to assemble")
                .pointAt([2.5, 2.5, 1])
            scene.idle(20)
            scene.showControls(40, [2.5, 2, 1], "right")
                .withItem("immersiveengineering:hammer")
            scene.world.moveSection(scene.world.showIndependentSectionImmediately([1, 8, 1, 3, 15, 3]), [0, -8, 0], 0)
            scene.world.replaceBlocks([1, 1, 1, 3, 7, 3], "minecraft:air", true)
            scene.idle(40)
        })
})