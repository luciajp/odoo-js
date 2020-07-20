odoo.define('widgets.chatter', (require) => {

    const { PortalComposer } = require('portal.composer');

    PortalComposer.include({
        xmlDependencies: ['/widgets/static/src/xml/portal.xml'],
        events: {
        	'click .btn-danger': (ev) => {
        		ev.preventDefault();
        		this.$('textarea').val(null);
        	},
        },
	});

});