{"version":3,"file":"main.js","sources":["../src/modules/harvester.js","../src/main.js"],"sourcesContent":["// 执行代码\r\nexport function run(creep) {\r\n    if (creep.store.getFreeCapacity() > 0) {\r\n        let sources = creep.room.find(FIND_SOURCES);\r\n        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {\r\n            creep.moveTo(sources[0]);\r\n        }\r\n    } else {\r\n        if (\r\n            creep.transfer(Game.spawns[\"Spawn1\"], RESOURCE_ENERGY) ==\r\n            ERR_NOT_IN_RANGE\r\n        ) {\r\n            creep.moveTo(Game.spawns[\"Spawn1\"]);\r\n        }\r\n    }\r\n}\r\n","// 游戏入口函数\r\n// 引入外部依赖\r\nimport { run } from './modules/harvester';\r\n\r\nexport const loop = function () {\r\n    // 查看Spawn1的能量剩余\r\n    console.log(Game.spawns['Spawn1'].store[RESOURCE_ENERGY]);\r\n    // 如果能量充足，则不停创建Harvest\r\n    if (Game.spawns['Spawn1'].store[RESOURCE_ENERGY] > 200) {\r\n        let index = Object.keys(Game.creeps).length;\r\n        while (Game.creeps['Harvester' + index]) {\r\n            index++;\r\n        }\r\n        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Harvester' + index);\r\n    }\r\n    for (let name in Game.creeps) {\r\n        let creep = Game.creeps[name];\r\n        run(creep);\r\n    }\r\n};\r\n"],"names":[],"mappings":";;AAAA;AACO,SAAS,GAAG,CAAC,KAAK,EAAE;AAC3B,IAAI,IAAI,KAAK,CAAC,KAAK,CAAC,eAAe,EAAE,GAAG,CAAC,EAAE;AAC3C,QAAQ,IAAI,OAAO,GAAG,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,YAAY,CAAC,CAAC;AACpD,QAAQ,IAAI,KAAK,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,IAAI,gBAAgB,EAAE;AAC3D,YAAY,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,CAAC;AACrC,SAAS;AACT,KAAK,MAAM;AACX,QAAQ;AACR,YAAY,KAAK,CAAC,QAAQ,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,EAAE,eAAe,CAAC;AAClE,YAAY,gBAAgB;AAC5B,UAAU;AACV,YAAY,KAAK,CAAC,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,CAAC;AAChD,SAAS;AACT,KAAK;AACL;;ACfA;AACA;AAEA;AACY,MAAC,IAAI,GAAG,YAAY;AAChC;AACA,IAAI,OAAO,CAAC,GAAG,CAAC,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,KAAK,CAAC,eAAe,CAAC,CAAC,CAAC;AAC9D;AACA,IAAI,IAAI,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,KAAK,CAAC,eAAe,CAAC,GAAG,GAAG,EAAE;AAC5D,QAAQ,IAAI,KAAK,GAAG,MAAM,CAAC,IAAI,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC;AACpD,QAAQ,OAAO,IAAI,CAAC,MAAM,CAAC,WAAW,GAAG,KAAK,CAAC,EAAE;AACjD,YAAY,KAAK,EAAE,CAAC;AACpB,SAAS;AACT,QAAQ,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,UAAU,CAAC,CAAC,IAAI,EAAE,KAAK,EAAE,IAAI,CAAC,EAAE,WAAW,GAAG,KAAK,CAAC,CAAC;AACnF,KAAK;AACL,IAAI,KAAK,IAAI,IAAI,IAAI,IAAI,CAAC,MAAM,EAAE;AAClC,QAAQ,IAAI,KAAK,GAAG,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC;AACtC,QAAQ,GAAG,CAAC,KAAK,CAAC,CAAC;AACnB,KAAK;AACL;;;;"}