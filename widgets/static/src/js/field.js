odoo.define('widgets.chatter', (require) => {

	const Widget = require('web.AbstractField');
	const registry = require('web.field_registry');
    
	const FieldForShare = Widget.extend({
		//xmlDependencies: ['/widgets/static-src/xml/field.xml'],
		template: 'widgets.share_button',
		events: {
			'click .js_reset_field': 'resetShareCount',
		},
		renderElement (){
			this.newValue = Intl.NumberFormat().format(this.value);
			this._super(...arguments);

		},
		async resetShareCount(ev){
			await this._setValue('0');
			this.renderElement();
		},
		isSet(){
			return true;
		}

	});
	console.warn('Dentro de field.js');

	registry.add('share_count_widget', FieldForShare);
});