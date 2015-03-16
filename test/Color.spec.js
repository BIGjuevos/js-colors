var assert = chai.assert;
var should = chai.should();

describe('Color', function() {

  describe('#constructor()', function() {

    it('should handle our shortcut method with 3 arguments', function() {
      var color = new Colors.Color(18, 52, 86);

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), '18');
      assert.equal(color.getGreen(), '52');
      assert.equal(color.getBlue(), '86');
    });

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

    it('should accept a valid rgba', function() {
      var color = new Colors.Color('rgba(1,2,64,0.9)');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), 1);
      assert.equal(color.getGreen(), 2);
      assert.equal(color.getBlue(), 64);
      assert.equal(color.getAlpha(), 0.9);
    });

    it('should accept a valid rgb', function() {
      var color = new Colors.Color('rgb(5,2,64)');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), 5);
      assert.equal(color.getGreen(), 2);
      assert.equal(color.getBlue(), 64);
      assert.equal(color.getAlpha(), 1);
    });

    it('should accept a valid hsl', function() {
      var color = new Colors.Color('hsl(120,50%,50%)');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), 64);
      assert.equal(color.getGreen(), 191);
      assert.equal(color.getBlue(), 64);
      assert.equal(color.getAlpha(), 1);
    });

    it('should accept a valid hsla', function() {
      var color = new Colors.Color('hsla(120,50%,50%,0.56)');

      assert.equal(color.isValid(), true);
      assert.equal(color.getRed(), 64);
      assert.equal(color.getGreen(), 191);
      assert.equal(color.getBlue(), 64);
      assert.equal(color.getAlpha(), 0.56);
    });

    it('should output hsl properly', function() {
      var color = new Colors.Color('#3FBF3F');

      assert.equal(color.isValid(), true);
      assert.equal(color.getHSL(), "hsl(120,50%,50%)");
      assert.equal(color.getHSL(true), "hsla(120,50%,50%,1)");

      color = new Colors.Color(255,0,0);
      assert.equal(color.getHSL(), 'hsl(0,100%,50%)');

      color = new Colors.Color(0,0,255);
      assert.equal(color.getHSL(), 'hsl(240,100%,50%)');

      color = new Colors.Color(255,0,128);
      assert.equal(color.getHSL(), 'hsl(330,100%,50%)');

      color = new Colors.Color(128,255,255);
      assert.equal(color.getHSL(), 'hsl(180,100%,75%)');

      //thanks rounding error! t < 0
      color = new Colors.Color('hsl(100,10%,10%)');
      assert.equal(color.getHSL(), 'hsl(96,10%,10%)');

      // t > 0
      color = new Colors.Color(250,117,119);
    });

    it('should output hsl with no saturation properly', function() {
      var color = new Colors.Color('hsl(120,0%,50%)');

      assert.equal(color.isValid(), true);
      assert.equal(color.getHSL(), "hsl(0,0%,50%)");
    });

    it('should output hex properly', function() {
      var color = new Colors.Color('#3FBF3F');

      assert.equal(color.isValid(), true);
      assert.equal(color.getHex(), "3FBF3F");
      assert.equal(color.getHex(true), "#3FBF3F");
    });

    it('should compute complement', function() {
      var color = new Colors.Color('#3FBF3F');
      var complement = color.getComplement();

      assert.equal(complement.getHex(), 'BF3FBF');

      //test where complement goes over 360
      color = new Colors.Color('#E34B60');
      complement = color.getComplement();
      assert.equal(complement.getHex(), '4BE3CE');
    });

  });
});
