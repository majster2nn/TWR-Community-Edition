Ponder.registry(event => {
    event
        .create("mbd2:low_pressure_boiler_output")
        .scene(
            "intro_scene", 
            "Low Pressure Boiler", 
            "kubejs:low_pressure_boiler",
            (scene, util) => {
                // scene.world.setBlocks([2, 1, 3, 3, 1, 3], "frostedheart:refractory_bricks", true);
                // scene.world.setBlock([3, 1, 2], "mbd2:low_pressure_boiler_output", true);
                // scene.world.setBlock([2, 1, 2], "mbd2:low_pressure_boiler_input", true);

                // scene.idle(20*2);
                // scene.addKeyframe();

                // scene.world.setBlocks([2, 2, 2, 3, 2, 3], "steampowered:bronze_boiler", true);

                // scene.idle(20*2);
                // scene.addKeyframe();

                // scene.world.setBlocks([2, 3, 2, 3, 3, 3], "steampowered:bronze_boiler", true);

                for (let x = 0; x < 2; x++) {
                    for (let z = 0; z < 2; z++) {
                        scene.world.showSection([x, 0, z], Facing.DOWN);
                        scene.idle(3);
                    }
                }

                scene.idle(20*2);
                scene.addKeyframe();

                for (let x = 0; x < 2; x++) {
                    for (let z = 0; z < 2; z++) {
                        scene.world.showSection([x, 1, z], Facing.DOWN);
                        scene.idle(3);
                    }
                }

                scene.idle(20*2);
                scene.addKeyframe();

                for (let x = 0; x < 2; x++) {
                    for (let z = 0; z < 2; z++) {
                        scene.world.showSection([x, 2, z], Facing.DOWN);
                        scene.idle(3);
                    }
                }

                scene.idle(20*2);
                scene.addKeyframe();

                scene.overlay.showOutline("blue", {}, [0, 0, 1], 70)
                scene.showControls(90, [0, 1, 1.5], "down").rightClick().withItem("immersiveengineering:hammer");
                scene.idle(20);
            
                scene.text(70, "Right-click to assemble the boiler", [0, 0.5, 1.5]).placeNearTarget();
                scene.idle(20*3);

                scene.addKeyframe();
        }
    )
})

function fadeInSection(scene, selection, movingOffset, direction) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
}