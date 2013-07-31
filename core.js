/**
 * @author Tomas Zezula
 * 
 * based on 
 * http://www.ubelly.com/2011/11/scalablejs/
 * http://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/
 * http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation
 * https://tutsplus.com/tutorial/writing-modular-javascript/
 * http://www.youtube.com/watch?feature=player_embedded&v=mKouqShWI4o
 */


Core = function() {
	var moduleData = {};
	return {
		register: function(moduleId, creator) {
			moduleData[moduleId] = {
				creator: creator,
				instance: null
			};
		},
		start: function(moduleId) {
			var data = moduleData[moduleId];
			var instance = data.instance;
			instance = data.creator(new Sandbox(this));
			instance.init();
		},
		stop: function(moduleId) {
			var data = moduleData[moduleId];
			var instance = data.instance;
			if (instance) {
				instance.destroy();
				instance = null;
			}
		},
		startAll: function() {
			this._toggleAll(this.start);
		},
		stopAll: function() {
			this._toggleAll(this.stop);
		},
		_toggleAll: function(command) {
			for (var moduleId in moduleData) {
				if (moduleData.hasOwnProperty(moduleId)) {
					command(moduleId);
				}	
			}			
		}
	}
} ();

Sandbox = function(container) {
	var subscribers = [];
	var container = container;
	// etc	
	return {
		// TODO register, publish, etc
	}
}

