const drone = extendContent(UnitType, "drone", {});
ghost.constructor = () => extend(UnitEntity, {});
ghost.defaultController = () => extend(MinerAI, {});
