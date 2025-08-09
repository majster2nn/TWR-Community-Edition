// Priority: 0

global.namespace = "the_winter_rescue"

global.debugUserName = [
    "Qi_Month",
    "YueSha"
]
ItemEvents.rightClicked((event) => {
    let {item, player} = event

    for (let i = 0; i < global.debugUserName.length; i++) {
        // Obtain item ID with sneak + r-click
        if (player.mainHandItem === item.id &&
            player.crouching &&
            player.mainHandItem !== "minecraft:air" &&
            player.username === global.debugUserName[i]) {
            player.runCommandSilent("kubejs hand")
        }
    }
})

PlayerEvents.chat((event) => {
    let {player, message, server} = event

    for (let i = 0; i < global.debugUserName.length; i++) {
        if (player.username === global.debugUserName[i]) {
            // Input -ki to remove all dropped items
            if (message.trim().equalsIgnoreCase("-ki")) {
                server.runCommandSilent("kill @e[type=item]")
                server.runCommandSilent("tellraw @a 'Dropped items have been cleared'")
                event.cancel()
            }

            // Input -kf to gain [Night Vision, Strength, Resistance] buffs
            if (message.trim().equalsIgnoreCase("-kf")) {
                player.runCommandSilent("effect give @s minecraft:night_vision infinite 255 true")
                player.runCommandSilent("effect give @s minecraft:strength infinite 255 true")
                player.runCommandSilent("effect give @s minecraft:resistance infinite 255 true")
                event.cancel()
            }

            // Input -efc to clear all buffs from self
            if (message.trim().equalsIgnoreCase("-efc")) {
                player.runCommandSilent("effect clear")
                event.cancel()
            }

            // Input -kla to clear all entities except players
            if (message.trim().equalsIgnoreCase("-kla")) {
                server.runCommandSilent("kill @e[type=!player]")
                event.cancel()
            }
        }
    }
})

PlayerEvents.loggedIn((event) => {
    let {player, server} = event

    /*
    * Get all IDs under the Tag, will be printed in
    * "logs/kubejs/server.log"
    * Change the Tag inside Ingredient.of()
    */

    for (let i = 0; i < global.debugUserName.length; i++) {
        if (player.username === global.debugUserName[i]) {
            // Iterate over Tag
            Ingredient.of("#minecraft:sand")
                .getItemIds()
                .forEach((print) => {
                    console.log(print)
                })
        }
    }
})

// View block hardness (sneak + r-click block)
BlockEvents.rightClicked((event) => {
    let {player} = event

    let blockState = event.getBlock().getBlockState()
    let pos = event.getBlock().getPos()
    let blockHardness = blockState.getDestroySpeed(event.getLevel(), pos)

    for (let i = 0; i < global.debugUserName.length; i++) {
        if (event.hand !== "MAIN_HAND" &&
            player.crouching &&
            player.username === global.debugUserName[i]) {
            player.tell(Component.translate("message.kubejs.debug.getHardness", [blockHardness]))
        }
    }
})