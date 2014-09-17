(function(global) {
	var getTime = function() {
		return Date.now();
	};
	var WatchStop = {
		fps: function(func, fpsNum) {
			var canContinue = true, 
				frameDuration = 1000 / fpsNum,
				initFrame = Math.floor(getTime() / frameDuration);
			var cancel = function() {
				canContinue = false;
			};
			var info = {
				last: cancel,
				frame: 0
			};
			var functionCaller = function() {
				func(info);
				if(canContinue) {
					var curTime = getTime(), curFrame = Math.floor(curTime / frameDuration) + 1;
					info.frame = curFrame - initFrame;
					setTimeout(functionCaller, curFrame * frameDuration - curTime);
				}
			};
			functionCaller();
		},
	};
	global.WatchStop = WatchStop;
})(this);
