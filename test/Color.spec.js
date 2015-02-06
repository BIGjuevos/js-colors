var assert = chai.assert;
var should = chai.should();

describe('Color', function() {
  describe('#constructor()', function() {
    it('should parse a hexcolor (with hash) properly', function() {
      var color = new Colors.Color('#123456');

      assert.equal(color.getRed(), '12');
    });
  });
});
