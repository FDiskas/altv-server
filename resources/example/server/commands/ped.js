import { registerCmd } from '../systems/chat';

registerCmd('ped', '/ped <name> | Spawn character by name.', summonPed);

function summonPed(player, args) {
    if (!args || !args[0]) {
        player.send(`/ped <name>`);
        return;
    }

    const pedName = args[0];

    try {
        player.model = pedName;
    } catch {
        player.send(`{FF0000}${args[0]} is not a valid ped name.`);
        return;
    }
}
