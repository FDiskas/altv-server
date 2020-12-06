import { registerCmd } from '../systems/chat';
import { DEFAULT_CONFIG } from '../configuration/config';
import { randomPositionAround } from '../utility/vector';

registerCmd('respawn', '/respawn | Respawn the player at spawn.', handleRespawn);
registerCmd('spawn', '/spawn | Respawn the player at spawn.', handleRespawn);
registerCmd('re', '/re | Respawn the player at spawn.', handleRespawn);

function handleRespawn(player) {
    const randomModelNumber = Math.floor(Math.random() * DEFAULT_CONFIG.RANDOM_PLAYER_MODELS.length);
    const randomModel = DEFAULT_CONFIG.RANDOM_PLAYER_MODELS[randomModelNumber];

    const randomPosition = randomPositionAround(DEFAULT_CONFIG.SPAWN, DEFAULT_CONFIG.SPAWN_RANGE);
    player.model = randomModel;
    player.spawn(randomPosition.x, randomPosition.y, randomPosition.z, 0);
    player.send(`You were respawned as ${randomModel}.`);
}
