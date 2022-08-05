/**
 * 千位分隔符
 * @param x 数字
 * @returns
 */
// from https://stackoverflow.com/a/2901298/
export const numberWithCommas = (x: number) => {
  // return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') // Safari not support lookbehind
  const parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
