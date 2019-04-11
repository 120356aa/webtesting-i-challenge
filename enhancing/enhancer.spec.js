const enhancer = require('./enhancer.js');

describe('enhancer', () => {
  const result = repair({ durability: 0 });
  it('tests repair', () => {
    expect(result.durability).toBe(100);
  })
})
