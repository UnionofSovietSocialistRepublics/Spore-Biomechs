const Drone = extend(UnitType, "Drone", {});
const Baneling = extend(UnitType,  "Baneling", {});
//this is relic of the past now
//read it if you want
Drone.constructor = () => extend(UnitEntity, {});
Drone.defaultController = () => extend(MinerAI, {});

Baneling.constructor = () => extend(UnitEntity, {});
Baneling.defaultController = () => extend(SuicideAI, {});


module.exports = {
  Drone: Drone,
  Baneling: Baneling
}
