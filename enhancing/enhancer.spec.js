const { secceed, fail, repair, get } = require('./enhancer.js');

describe('enhancer', () => {
  const result = repair({ name: 'long sword', durability: 0, enchantment: 0 })
  it('tests repair', () => {
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
})
