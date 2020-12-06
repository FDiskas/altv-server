// @ts-check
/// <reference types="@altv/types" />
import * as alt from 'alt-server';
import chalk from 'chalk';
import { randomPositionAround } from '../utility/vector';
import { DEFAULT_CONFIG } from '../configuration/config';
import { WEAPON_BY_HASH } from '../gamedata/weapons';

alt.log(chalk.greenBright('Loaded: events/playerConnect'));
alt.on('playerDeath', playerDeath);

function playerDeath(victim, killer, weaponHash) {
    if (!victim || !victim.valid) {
        return;
    }

    if (killer && WEAPON_BY_HASH[weaponHash]) {
        alt.emitClient(
            null,
            'chat:Send',
            `${victim.name} was killed by ${killer.name} with ${WEAPON_BY_HASH[weaponHash]}`
        );
    }

    const randomPosition = randomPositionAround(victim.pos, DEFAULT_CONFIG.SPAWN_RANGE);
    victim.spawn(randomPosition.x, randomPosition.y, randomPosition.z, 10000);
    victim.send(`You have died and you will be spawned after 13min.`);
}
