/**
 *
 * @param {moment} dur
 * @param {boolean} short
 * @return string
 */
export default function durationToString(dur, short = false) {
  let h = Math.floor(dur.asHours()).toString();
  h = h.length < 2 ? '0' + h : h;
  const m = ('0' + dur.minutes()).slice(-2);
  const s = ('0' + dur.seconds()).slice(-2);
  if(short && h !== '00') {
    return  `${m}:${s}`;
  } else {
    return `${h}:${m}:${s}`;
  }
}
