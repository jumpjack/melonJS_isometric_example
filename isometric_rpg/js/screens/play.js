import * as me from 'https://esm.run/melonjs';

class PlayScreen extends me.Stage {

    //  action to perform on state change
    onResetEvent() {
 me.game.world.sortOn = "y"; // debug
        // disable gravity
        me.game.world.gravity.set(0, 0);

        // load a level
        me.level.load("isometric");

 var level = new me.TMXTileMap("isometric", me.loader.getTMX("isometric"));
 console.log("Loaded: ", level);
me.game.world.sortOn = "y"; // debug


    }


};

export default PlayScreen;
