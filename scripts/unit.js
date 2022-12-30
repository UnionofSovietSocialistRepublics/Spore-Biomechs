const Drone = extendContent(UnitType, "Drone", {});
const Baneling = extendContent(UnitType,  "Baneling", {});
const Interceptor = extendContent(UnitType,  "Interceptor", {});

Drone.constructor = () => extend(UnitEntity, {});
Drone.defaultController = () => extend(MinerAI, {});

Baneling.constructor = () => extend(UnitEntity, {});
Baneling.defaultController = () => extend(SuicideAI, {});

Interceptor.constructor = () => extend(UnitEntity, {});
Interceptor.defaultController = () => extend(FlyingAI, {});


module.exports = {
  Drone: Drone,
  Baneling: Baneling,
  Interceptor: Interceptor
}
