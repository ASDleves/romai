QUnit.module('romai', function () {
    QUnit.test('A romai függvény létezik e?', function (assert) {
        assert.ok(romai, "létezik a romai");
    });
    QUnit.test('A romai függvény-e?', function (assert) {
        assert.ok(typeof romai === "function", "fv a romai");
    });
    QUnit.test('üres  sorozat,n=0', function (assert) {
        assert.equal(romai(0),"" );
    });
    QUnit.test('n=1', function (assert) {
        assert.equal(romai(1),"I" );
    });
    QUnit.test('n=2', function (assert) {
        assert.equal(romai(2),"II" );
    });
    QUnit.test('n=3', function (assert) {
        assert.equal(romai(3),"III" );
    });
    QUnit.test('n=4', function (assert) {
        assert.equal(romai(4),"IV" );
    });
    QUnit.test('n=5', function (assert) {
        assert.equal(romai(5),"V" );
    });
    QUnit.test('n=10', function (assert) {
        assert.equal(romai(10),"X" );
    });
    QUnit.test('n=20', function (assert) {
        assert.equal(romai(20),"XX" );
    });
    QUnit.test('n=30', function (assert) {
        assert.equal(romai(30),"XXX" );
    });
    QUnit.test('n=14', function (assert) {
        assert.equal(romai(14),"XIV" );
    });QUnit.test('n=24', function (assert) {
        assert.equal(romai(24),"XXIV" );
    });

});