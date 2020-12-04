import { registerCmd } from '../systems/chat';

registerCmd('anim', '/anim <name> <type> | Showing character animation by name.', summonPed);

function summonPed(player, args) {
    if (!args || !args[0]) {
        player.send(`/anim <name> <type>`);
        return;
    }

    const animName = args[0];
    const animType = args[1];

    try {
        player.playAnimation(animName, animType, 1, 47);
    } catch {
        player.send(`{FF0000}${args[0]} is not a valid animation name.`);
        return;
    }
}

function playAnimation(animDictionary, animationName, speed, flag) {
    //alt.log("play ANim "+animDictionary)
    stopAnimation();
    requestAnimDictPromise(animDictionary)
        .then(() => {
            //alt.log("play anim NOW ",animDictionary, animationName)
            game.taskPlayAnim(
                game.playerPedId(),
                animDictionary,
                animationName,
                speed,
                1,
                -1,
                flag,
                1,
                false,
                false,
                false
            );
            activeDict = animDictionary;
            activeAnim = animationName;
        })
        .catch(() => {
            alt.log('Promise returned reject anim');
        });
}

function getActiveAnim() {
    return { dict: activeDict, anim: activeAnim };
}
function stopAnimation() {
    alt.log('scriptID ' + localPlayer.scriptID + '  pedId: ' + PlayerID);
    if (activeDict == null || activeAnim == null) return;
    game.stopAnimTask(PlayerID, activeDict, activeAnim, 0);
    game.removeAnimDict(activeDict);

    game.clearPedTasks(localPlayer.scriptID);
    game.clearPedSecondaryTask(localPlayer.scriptID);
    activeDict = null;
    activeAnim = null;
}
