Ponder.registry((event) => {
    event.create("immersiveindustry:car_kiln_brick")
        .tag("immersiveindustry:ponder")
        .scene("car_kiln", "Car Kiln", "kubejs:car_kiln", (scene) => {
            scene.showBasePlate()
            scene.idle(20)
            scene.scaleSceneView(0.8)

            scene.addKeyframe()
            let block1 = [
                [4, 1, 5], [3, 1, 5], [2, 1, 5],
                [4, 1, 4], [3, 1, 4], [2, 1, 4],
                [4, 1, 3], [3, 1, 3], [2, 1, 3],
                [4, 1, 2], [3, 1, 2], [2, 1, 2],
                [4, 1, 1], [3, 1, 1], [2, 1, 1]
            ]
            block1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block2 = [
                [4, 2, 5], [3, 2, 5], [2, 2, 5],
                [4, 2, 4], [3, 2, 4], [2, 2, 4],
                [4, 2, 3], [3, 2, 3], [2, 2, 3],
                [4, 2, 2], [3, 2, 2], [2, 2, 2],
                [4, 2, 1], [2, 2, 1]
            ]
            block2.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block3 = [
                [4, 3, 5], [3, 3, 5], [2, 3, 5],
                [4, 3, 4], [3, 3, 4], [2, 3, 4],
                [4, 3, 3], [3, 3, 3], [2, 3, 3],
                [4, 3, 2], [3, 3, 2], [2, 3, 2]
            ]
            block3.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block4 = [
                [3, 4, 5],
                [4, 4, 4], [3, 4, 4], [2, 4, 4],
                [4, 4, 3], [3, 4, 3], [2, 4, 3],
                [4, 4, 2], [3, 4, 2], [2, 4, 2]
            ]
            block4.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block5 = [
                [4, 5, 3], [2, 5, 3],
                [4, 5, 2], [3, 5, 2], [2, 5, 2]
            ]
            block5.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            scene.overlay.showOutline("blue", {}, [3, 1, 1], 40)
            scene.overlay.showText(40)
                .text("R-Click to assemble")
                .pointAt([3.5, 1.5, 1])
            scene.idle(40)
            scene.showControls(20, [3.5, 1.5, 1], "right")
                .withItem("immersiveengineering:hammer")
            scene.idle(20)
            scene.world.moveSection(scene.world.showIndependentSectionImmediately([4, 7, 1, 2, 12, 5]), [0, -6, 0], 0)
            scene.world.replaceBlocks([4, 1, 1, 2, 5, 5], "minecraft:air", true)
            scene.idle(20)
        })
})