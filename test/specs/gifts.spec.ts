import { getGifts } from "../../src/utils"

test('GetGiftsTest', () => {
    const giftsResult = getGifts()
    expect(giftsResult).toEqual({"bici": 3, "coche": 2, "pelota": 1, "peluche": 1 })
})