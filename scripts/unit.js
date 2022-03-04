const Drone = extendContent(UnitType, "Drone", {});
Drone.constructor = () => extend(UnitEntity, {});
Drone.defaultController = () => extend(MinerAI, {});

module.exports = {
  Drone: Drone
}
