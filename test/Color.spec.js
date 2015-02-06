var assert = chai.assert;
var should = chai.should();

describe('Color', function() {

  describe('#constructor()', function() {

    it('should parse a hexcolor (with hash) properly', function() {
      var color = new Colors.Color('#123456');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), '18');
      assert.equal(color.getGreen(), '52');
      assert.equal(color.getBlue(), '86');
    });

    it('should parse a hexcolor (without hash) properly', function() {
      var color = new Colors.Color('123456');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), '18');
      assert.equal(color.getGreen(), '52');
      assert.equal(color.getBlue(), '86');
    });

    it('should parse a hexcolor (without hash) that has letters in it properly', function() {
      var color = new Colors.Color('12340F');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), '18');
      assert.equal(color.getGreen(), '52');
      assert.equal(color.getBlue(), '15');
    });

    it('should catch out of range hex values', function() {
      var color = new Colors.Color('123Z56');

      assert.equal(color.isValid(), false);
    });

    it('should output a valid rgb from a hex', function() {
      var color = new Colors.Color('12340F');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRGB(), 'rgb(18,52,15)');
    });

    it('should output a valid rgba from a hex', function() {
      var color = new Colors.Color('12340F');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRGB(true), 'rgba(18,52,15,1.00)');
    });
  });
});
