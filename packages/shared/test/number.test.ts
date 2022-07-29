import { numberWithCommas } from '@shared/utils/number'
import { describe, expect, it } from 'vitest'

describe('number', () => {
  it('numberWithCommas', () => {
    expect(numberWithCommas(0)).eq('0')
    expect(numberWithCommas(12)).eq('12')
    expect(numberWithCommas(12.12)).eq('12.12')
    expect(numberWithCommas(12345)).eq('12,345')
    expect(numberWithCommas(12345.12345)).eq('12,345.12345')
    expect(numberWithCommas(123456)).eq('123,456')
    expect(numberWithCommas(123456.123456)).eq('123,456.123456')
    expect(numberWithCommas(12345678)).eq('12,345,678')
    expect(numberWithCommas(12345678.12345678)).eq('12,345,678.12345678')
  })
})
