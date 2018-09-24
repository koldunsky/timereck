/* eslint-disable no-useless-escape */

/**
 *
 * @param {object} el
 * @param {string} cls
 */
export function addClass(el, cls) {
  if (!el.classList.contains(cls)) {
    el.classList.add(cls);
  }
}


/**
 *
 * @param {object} el
 * @param {string} cls
 */
export function removeClass(el, cls) {
  if (el.classList.contains(cls)) {
    el.classList.remove(cls);
  }
}


/**
 *
 * @param {object} el
 * @param {string} cls
 */
export function toggleClass(el, cls) {
  if (el.classList.contains(cls)) {
    el.classList.remove(cls);
  }  else {
    el.classList.add(cls);
  }
}


/**
 *
 * @param {string} name
 * @param {string} url
 * @returns {string}
 */
export function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
