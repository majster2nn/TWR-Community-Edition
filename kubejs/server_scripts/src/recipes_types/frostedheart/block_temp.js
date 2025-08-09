ServerEvents.recipes((event) => {

    event.custom({
        type: "frostedheart:block_temp",
        block: "charcoal_pit:log_pile",
        must_lit: true,
        temperature: 300.0
    })

})