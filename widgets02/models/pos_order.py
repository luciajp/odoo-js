# from odoo import models, fields, api

#  class PosOrder(models.Model):
#  	_inherit = 'pos.order'

#  	carrier_id = fields.Many2one('delivery.carrier', string='Delivery Method')

#  	@api.models
#  	def _order.fields(self, ui_order):
#  		res = super()._order_fields(ui_order)
#  		res['carrier_id']=ui_order.get('carrier_id', False)
#  		return res
