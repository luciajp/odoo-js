from odoo import models, fields


class ProductInherit(models.Model):
	_inherit = 'product.template'

	share_count = fields.Integer(
		help="Éste campo muestra las veces compartidas")
