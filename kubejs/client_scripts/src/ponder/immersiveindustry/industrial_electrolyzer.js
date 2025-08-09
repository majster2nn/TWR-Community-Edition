Ponder.registry((event) => {
    event.create(["immersiveengineering:graphite_electrode", "kubejs:shaped_bounded_graphite", "kubejs:rough_graphite_electrode", "kubejs:bounded_graphite"])
        .tag("immersiveindustry:ponder")
        .scene("industrial_electrolyzer", "Industrial Electrolyzer", "kubejs:industrial_electrolyzer", (scene) => {
            scene.showBasePlate()
            scene.idle(20)

            scene.addKeyframe()
            let block1 = [
                [5, 1, 4], [4, 1, 4], [3, 1, 4], [2, 1, 4], [1, 1, 4],
                [5, 1, 3], [4, 1, 3], [3, 1, 3], [2, 1, 3], [1, 1, 3],
                [5, 1, 2], [4, 1, 2], [3, 1, 2], [2, 1, 2], [1, 1, 2]
            ]
            block1.forEach((pos) => {
                scene.world.showSection(pos, Facing.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block2 = [
                [5, 2, 4], [4, 2, 4], [3, 2, 4], [2, 2, 4], [1, 2, 4],
                [5, 2, 3], [4, 2, 3], [3, 2, 3], [2, 2, 3], [1, 2, 3],
                [5, 2, 2], [4, 2, 2], [3, 2, 2], [2, 2, 2], [1, 2, 2]
            ]
            block2.forEach((pos) => {
                scene.world.showSection(pos, Facing.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block3 = [
                [5, 3, 3], [4, 3, 3], [3, 3, 3], [2, 3, 3], [1, 3, 3]
            ]
            block3.forEach((pos) => {
                scene.world.showSection(pos, Facing.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            scene.overlay.showOutline("blue", {}, [1, 2, 3], 40)
            scene.overlay.showText(40)
                .text("R-Click to assemble")
                .pointAt([1, 2.5, 3.5])
            scene.idle(40)
            scene.showControls(20, [1, 2.5, 3], "right")
                .withItem("immersiveengineering:hammer")
            scene.idle(20)
            scene.world.moveSection(scene.world.showIndependentSectionImmediately([5, 4, 2, 1, 7, 4]), [0, -4, 0], 0)
            scene.world.replaceBlocks([5, 1, 2, 1, 3, 4], "minecraft:air", true)
            scene.idle(20)
        })
})