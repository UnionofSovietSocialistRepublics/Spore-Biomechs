Events.on(EventType.ClientLoadEvent, () => {
    var rand = (Math.floor(Math.random()*5));
    switch(rand){
        case 1:
        Vars.mods.locateMod("jp").meta.author="Hydroabyss & Coffee molecules";
        Vars.mods.locateMod("jp").meta.subtitle="Now with extra coffee";
        break;
        case 2:
        Vars.mods.locateMod("jp").meta.author="Hydroabyss & Neoplasm Molecule";
        Vars.mods.locateMod("jp").meta.subtitle="Red sun over serpulo";
        break;
        case 3:
        Vars.mods.locateMod("jp").meta.author="ssybaordyH & seluceloM retaW";
        Vars.mods.locateMod("jp").meta.subtitle="...gnorw si gnihtemoS ?gnorw gnihtemos sI";
        break;
        case 4:
        Vars.mods.locateMod("jp").meta.author="Hydrogen & Oxygen";
        Vars.mods.locateMod("jp").meta.subtitle="2 H2 + O2 = 2 H2O!";
        break;
        case 5:
        Vars.mods.locateMod("jp").meta.author="Abyss & Duke";
        Vars.mods.locateMod("jp").meta.subtitle="Json has fallen, billion must java.";
        break;
        default:
        Vars.mods.locateMod("jp").meta.author="Hydroabyssal & Germanium";
        Vars.mods.locateMod("jp").meta.subtitle="For the Deutschland!";
        break;
    }
})