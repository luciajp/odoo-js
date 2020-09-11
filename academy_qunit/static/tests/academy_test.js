odoo.define('academy_qunit.tests', (require) => {

    const { CallQueuer } = require('academy_qunit.tools');

    QUnit.module('academy_qunit', {}, function () {

        QUnit.module('tools', {
            beforeEach () {
                this.executedCount = 0;
            }
        }, function() {
            // QUnit.only
            QUnit.test('Probar el spameo seguro de requests', function (assert) {
                assert.expect(1); 
                const done = assert.async();
                

                const request = () => new Promise((resolve) => {
                    setTimeout(() => resolve('Request done.'), 1000);
                }).then(() => {
                    this.executedCount++;
                });

                CallQueuer(request);
                CallQueuer(request);
                CallQueuer(request);
                CallQueuer(request);
                CallQueuer(request);
                CallQueuer(request);
                CallQueuer(request);
                CallQueuer(request);

                setTimeout(() => {
                    assert.equal(this.executedCount, 2);
                    done();
                }, 8000)
            });
        });
    });
});