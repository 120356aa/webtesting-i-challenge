const { succeed, fail, repair, get } = require('./enhancer.js');

describe('enhancer', () => {
  const result = repair({ name: 'long sword', durability: 0, enchantment: 0 })
  it('repair', () => {
    expect(result.durability).toBe(100);
  });

  it('succeed, enchantment tester', () => {
    const succeedResult = succeed({
      name: 'long sword',
      durability: 100,
      enchantment: 0
    })
    expect(succeedResult.enchantment).toBe(1)
  });

  it('fail, enchantment tester', () => {
    const failResult = fail({
      name: 'long sword',
      durability: 100,
      enchantment: 17
    })
    expect(failResult.enchantment).toBe(16)
  })
})
