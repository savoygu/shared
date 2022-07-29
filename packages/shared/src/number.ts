/**
 * 千位分隔符
 * @param num 数字
 * @returns
 */
// from https://stackoverflow.com/a/2901298/
export const numberWithCommas = (num: number) => {
  return `${num}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
