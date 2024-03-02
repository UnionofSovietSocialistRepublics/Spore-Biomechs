Events.on(EventType.ClientLoadEvent, () => {
    var rand = (Math.floor(Math.random()*5));
    switch(rand){
        case 1:
        Vars.mods.locateMod("sporepod").meta.author="Walter white";
        Vars.mods.locateMod("sporepod").meta.subtitle="Now with extra racism";
        break;
        case 2:
        Vars.mods.locateMod("sporepod").meta.author="Walter hertwell white";
        Vars.mods.locateMod("sporepod").meta.subtitle="Charging up my racism";
        break;
        case 3:
        Vars.mods.locateMod("sporepod").meta.author="Moonupper";
        Vars.mods.locateMod("sporepod").meta.subtitle="Red sun is now over paradise";
        break;
        case 4:
        Vars.mods.locateMod("sporepod").meta.author="Water molecules";
        Vars.mods.locateMod("sporepod").meta.subtitle="Extra frosty editon";
        break;
        case 5:
        Vars.mods.locateMod("sporepod").meta.author="Horizon";
        Vars.mods.locateMod("sporepod").meta.subtitle="Billions must use java.";
        break;
        default:
        Vars.mods.locateMod("sporepod").meta.author="Frozen Water";
        Vars.mods.locateMod("sporepod").meta.subtitle="Now with extra difficulty spike (frozen farland reference)";
        break;
    }
})