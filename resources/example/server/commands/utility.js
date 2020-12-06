// @ts-check
/// <reference types="@altv/types" />
import * as alt from 'alt-server';
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
    player.send(`/ped <name> | Spawn character by name.`);
    player.send(`/ve <name> | Summons a vehicle\n in front of a player.`);
    player.send(`/wep <name> | Summon a weapon by name.`);
    player.send(`/re | Respawn the player at spawn.`);
    player.send(`/exit | Exit (kick) from the game.`);
});
