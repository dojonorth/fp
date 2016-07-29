var price = require('../lib/pricing');

describe("Potter book pricing", () => {
  it("should return 0 for no books", () => {
      expect(price([])).toEqual(0);
  });


  it("should return 8 for one book", () => {
      expect(price([0])).toEqual(8);
  });
});
