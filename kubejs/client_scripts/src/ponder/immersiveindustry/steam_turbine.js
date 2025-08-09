Ponder.registry((event) => {
    event.create("immersiveengineering:generator")
        .tag("immersiveindustry:ponder")
        .scene("steam_turbine", "Steam Turbine", "kubejs:steam_turbine", (scene) => {
            scene.showBasePlate()
            scene.idle(20)

            scene.addKeyframe()
            let block1 = [
                [7, 1, 5], [6, 1, 5], [5, 1, 5], [4, 1, 5], [3, 1, 5], [2, 1, 5], [1, 1, 5],
                [7, 1, 4], [6, 1, 4], [5, 1, 4], [4, 1, 4], [3, 1, 4], [2, 1, 4], [1, 1, 4],
                [7, 1, 3], [6, 1, 3], [5, 1, 3], [4, 1, 3], [3, 1, 3], [2, 1, 3], [1, 1, 3]
            ]
            block1.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block2 = [
                [7, 2, 5], [6, 2, 5], [5, 2, 5], [4, 2, 5], [3, 2, 5], [2, 2, 5], [1, 2, 5],
                [6, 2, 4], [5, 2, 4], [4, 2, 4], [3, 2, 4], [2, 2, 4], [1, 2, 4],
                [7, 2, 3], [6, 2, 3], [5, 2, 3], [4, 2, 3], [3, 2, 3], [2, 2, 3], [1, 2, 3]
            ]
            block2.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            let block3 = [
                [7, 3, 5], [6, 3, 5],
                [6, 3, 4], [5, 3, 4], [4, 3, 4], [3, 3, 4]
            ]
            block3.forEach((pos) => {
                scene.world.showSection(pos, Direction.DOWN)
                scene.idle(2)
            })
            scene.idle(20)

            scene.addKeyframe()
            scene.overlay.showOutline("blue", {}, [1, 2, 4], 40)
            scene.overlay.showText(40)
                .text("R-Click to assemble")
                .pointAt([1, 2.5, 4.5])
            scene.idle(40)
            scene.showControls(20, [1, 2.5, 4.5], "right")
                .withItem("immersiveengineering:hammer")
            scene.idle(20)
            scene.world.moveSection(scene.world.showIndependentSectionImmediately([7, 5, 3, 1, 8, 5]), [0, -4, 0], 0)
            scene.world.replaceBlocks([7, 1, 3, 1, 3, 5], "minecraft:air", true)
            scene.idle(20)

            scene.addKeyframe()
            scene.overlay.showOutline("blue", {}, [7, 2, 5], 40)
            scene.rotateCameraY(180)
            scene.overlay.showText(40)
                .text("Input steam here")
                .pointAt([7.5, 2.5, 5])
            scene.idle(40)
            scene.rotateCameraY(180)
            scene.idle(20)
        })
})