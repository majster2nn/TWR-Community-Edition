StartupEvents.registry("item", (event) => {
    let fuel_procs = [
        
    ]
    let fuel_vals = {
        "sawdust": 40
    }
    fuel_procs.forEach((item) => {
        let fv = fuel_vals[item]
        if (fv === 0) {
            event.create(item)
        } else {
            event.create(item)
                .burnTime(fv)
        }
    })
    }
)