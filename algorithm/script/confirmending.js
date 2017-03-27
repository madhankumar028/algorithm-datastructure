// Freecodecamp basic algorithm

/**
 * [confirmEnding description]
 *
 * @public
 * @param  {[String]} str
 * @param  {[String]} target
 * @return {[Boolean]}
 */
export function confirmEnding(str, target) {
	return target === str.substr(str.length - 1) ? true : isSubstring(str, target);	
}

/**
 * [isSubstring description]
 *
 * @private
 * @param  {[String]}  string
 * @param  {[String]}  target
 * @return {Boolean}
 */
function isSubstring(string, target) {
  return string.includes(target) ? false : endsWith(string, target);
}

/**
 * [endsWith description]
 *
 * @private
 * @param  {[String]} string
 * @param  {[String]} target
 * @return {[Boolean]}
 */
function endsWith(string, target) {
  return string.includes(target) ? true : false;
}