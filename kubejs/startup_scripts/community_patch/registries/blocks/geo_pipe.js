StartupEvents.registry('block', event =>{
    event.create('geo_pipe')
    .displayName('Geothermal Pipe')
    .mapColor('metal')
    .soundType('metal')
    .hardness(1)
    .resistance(1)
    .tagBlock('minecraft:mineable/pickaxe')
})