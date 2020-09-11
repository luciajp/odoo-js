odoo.define('academy_qunit.tests2', (require) => {

    const { createView, dom } = require('web.test_utils');
    const FormView = require('web.FormView');

    QUnit.module('academy_qunit', {}, function () {

        QUnit.module('widgetsBackend', {
            beforeEach () {
                this.data = {
                    'product.template': {
                        fields: {
                            share_count: {string: "share count", type: "integer"},
                        },
                        records: [{
                            id: 1,
                            share_count: 420000,
                        }]
                    },
                }
            }
        }, async function () {
            QUnit.test('Check the correct display of value.', async function (assert) {
                assert.expect(1);
                const form = await createView({
                    View: FormView,
                    data: this.data,
                    model: 'product.template', 
                    res_id: 1,
                    arch: `
                    <form>
                        <sheet>
                            <group>
                                <field name="share_count" widget="share_count"/>
                            </group>
                        </sheet>
                    </form>`,
                });
                const selector = ".o_field_widget h1:contains('420,000')";
                assert.containsOnce(form, selector, "String should be 420,000.")

                form.destroy();

            });

            QUnit.only('Check the value to be 0.', async function (assert) {
                assert.expect(1);
                const form = await createView({
                    View: FormView,
                    data: this.data,
                    model: 'product.template', 
                    res_id: 1,
                    arch: `
                    <form>
                        <sheet>
                            <group>
                                <field name="share_count" widget="share_count"/>
                            </group>
                        </sheet>
                    </form>`,
                });
                
                await dom.click(form.$('.js_reset_field'))
                assert.containsOnce(form, ".o_field_widget h1:contains('0')", "The string should be 0.")

                form.destroy();

            });

        });

    
    });
});