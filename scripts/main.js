Events.on(EventType.ClientLoadEvent, () => {


Vars.mods.locateMod("jp").meta.author="Walter hertwell white";//js test

//Screw fog all of my homies HATE fog
Events.run(EventType.Trigger.preDraw, () => {Vars.state.rules.fog = false; Vars.state.rules.staticFog = false; Vars.state.rules.limitMapArea = false })
})