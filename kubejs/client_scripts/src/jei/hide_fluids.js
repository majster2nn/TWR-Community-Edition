JEIEvents.hideFluids((event) => {
    let fluidsToHide = []
    fluidsToHide.forEach((disabledFluid) => {
        if (!Fluid.of(disabledFluid).isEmpty()) {
            event.hide(disabledFluid);
        }
    })
})