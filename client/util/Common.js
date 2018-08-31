/**
 * Decode html entities
 *
 * @param  {String} input html entities string
 * @return {string}       decoded value
 */
export const htmlDecode = (input) => {
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};