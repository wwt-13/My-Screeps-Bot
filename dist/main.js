"use strict";

function run(creep) {
    if (creep.store.getFreeCapacity() > 0) {
        let sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    } else {
        if (
            creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) ==
            ERR_NOT_IN_RANGE
        ) {
            creep.moveTo(Game.spawns["Spawn1"]);
        }
    }
}

// 游戏入口函数
// 引入外部依赖

const loop = function () {
    // 查看Spawn1的能量剩余
    console.log(Game.spawns["Spawn1"].store[RESOURCE_ENERGY]);
    // 如果能量充足，则不停创建Harvest
    if (Game.spawns["Spawn1"].store[RESOURCE_ENERGY] >= 200) {
        let index = Object.keys(Game.creeps).length;
        while (Game.creeps["Harvester" + index]) {
            index++;
        }
        Game.spawns["Spawn1"].spawnCreep(
            [WORK, CARRY, MOVE],
            "Harvester" + index
        );
    }
    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        run(creep);
    }
};

exports.loop = loop;
//# sourceMappingURL=main.js.map
