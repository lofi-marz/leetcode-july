/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
	let angle = Math.abs(6*minutes-(30*hour + 0.5*minutes));
	//if (angle > 180) angle = (360-angle);
	return Math.min(360-angle, angle);
};

console.log(angleClock(4,50));