//code copied and modified from https://github.com/RactiveJS/Ractive-events-tap/blob/18aec5fae805f3e160f19408b7866fd459b6cd0c/Ractive-events-tap.js

(function ( global, factory ) {

  'use strict';

  // Common JS (i.e. browserify) environment
  if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
    factory( require( 'Ractive' ), require( 'hammerjs' ) );
  }

  // AMD?
  else if ( typeof define === 'function' && define.amd ) {
    define([ 'Ractive', 'hammerjs' ], factory );
  }

  // browser global
  else if ( global.Ractive && global.Hammer) {
    factory( global.Ractive, global.Hammer );
  }

  else {
    throw new Error( 'Could not find Ractive! It must be loaded before the swipe plugin' );
  }


}( typeof window !== 'undefined' ? window : this, function ( Ractive, Hammer ) {

  'use strict';

  var swipe = function ( node, fire ) {

    Hammer(node).on("swipe", function(event) {
      fire({
        node: node,
        original: event //actually a hammerjs event -- to get at the original event use gesture.srcEvent
      })
    });

    return {
      teardown: function () {} //probably need to define this at some point
    };
  };

  Ractive.events.swipe = swipe;

}));
