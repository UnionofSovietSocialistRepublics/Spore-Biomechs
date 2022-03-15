const Drone = extendContent(UnitType, "Drone", {});
const Baneling = extendContent(UnitType,  "Baneling", {});

Drone.constructor = () => extend(UnitEntity, {});
Drone.defaultController = () => extend(MinerAI, {});

Baneling.constructor = () => extend(UnitEntity, {});
Baneling.defaultController = () => extend(SuicideAI, {});


module.exports = {
  Drone: Drone,
  Baneling: Baneling
}
