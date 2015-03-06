'use strict';

// Added tests to save time vs. always try/catch and parse
module.exports = function(x) {
  if (typeof x !== 'string') return null
  if (x[0] !== '{' && x[0] !== '[') return null
  try { return JSON.parse(x) }
  catch (e) { return null }
}
