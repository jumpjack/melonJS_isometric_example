import * as me from 'https://esm.run/melonjs';
import resources from './resources.js';
import PlayerEntity from './entities/entities.js';
import PlayScreen from './screens/play.js';


/**
 *
 * Initialize the application
 */
export default function onload () {
    // init the video
    if (!me.video.init(800, 600, {parent : "screen", scale : "auto"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

// initialize the debug plugin in development mode.
console.log("Loading debug panel...");
import('./debugPanel.js').then((plugin) => {
    // automatically register the debug panel
console.log("Debug panel loaded.");    
    me.utils.function.defer(me.plugin.register, this, plugin.DebugPanelPlugin, "debugPanel");
console.log("Debug panel registered.");    
});
    
me.game.world.sortOn = "y";     // debug
    // set all ressources to be loaded
    me.loader.preload(resources, () => {
me.game.world.sortOn = "y";     // debug
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new PlayScreen());

me.game.world.sortOn = "y";     // debug
        // set the fade transition effect
        me.state.transition("fade","#FFFFFF", 250);

me.game.world.sortOn = "y";     // debug
        // register our objects entity in the object pool
        me.pool.register("mainPlayer", PlayerEntity);

me.game.world.sortOn = "y";     // debug
        // switch to PLAY state
        me.state.change(me.state.PLAY);
        
me.game.world.sortOn = "y";     // debug

    });
};
