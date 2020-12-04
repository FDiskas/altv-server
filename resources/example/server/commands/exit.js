import { registerCmd } from '../systems/chat';

registerCmd('logout', '/logout | Exit the game.', summonPed);
registerCmd('exit', '/exit | Exit the game.', summonPed);

function summonPed(player) {
    try {
        player.kick('Logged out');
    } catch {
        return;
    }
}
