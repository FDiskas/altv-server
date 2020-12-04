import { registerCmd } from '../systems/chat';

registerCmd('coords', '/coords | Returns current coordinates to chat and console.', player => {
    const coords = player.pos;
    player.send(JSON.stringify(coords));
    console.log(coords);
});

registerCmd('players', '/players | Returns current player count.', player => {
    player.send(`Player Count: ${alt.Player.all.length}`);
});

registerCmd('help', '/help | Returns available commands to console.', player => {
    const coords = player.pos;
    player.send(`
    /ped <name> | Spawn character by name.
    /ve <name> | Summons a vehicle in front of a player.
    /wep <name> | Summon a weapon by name.
    /re | Respawn the player at spawn.
    /exit | Exit (kick) from the game.
    `);
    console.log(coords);
});
