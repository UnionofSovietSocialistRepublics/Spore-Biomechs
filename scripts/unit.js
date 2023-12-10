const Drone = extend(UnitType, "Drone", {});
const Harvester = extend(UnitType,  "Harvester", {});
const Baneling = extend(UnitType,  "Baneling", {});
//this is relic of the past now
//read it if you want
Drone.constructor = () => extend(UnitEntity, {});
Drone.defaultController = () => extend(MinerAI, {});

Harvester.constructor = () => extend(UnitEntity, {});
Harvester.defaultController = () => extend(MinerAI, {});

Baneling.constructor = () => extend(UnitEntity, {});
Baneling.defaultController = () => extend(SuicideAI, {});