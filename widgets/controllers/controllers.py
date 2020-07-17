# -*- coding: utf-8 -*-
from odoo import http

# class OdooPractica/odooModulov(http.Controller):
#     @http.route('/odoo_practica/odoo_modulov/odoo_practica/odoo_modulov/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/odoo_practica/odoo_modulov/odoo_practica/odoo_modulov/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('odoo_practica/odoo_modulov.listing', {
#             'root': '/odoo_practica/odoo_modulov/odoo_practica/odoo_modulov',
#             'objects': http.request.env['odoo_practica/odoo_modulov.odoo_practica/odoo_modulov'].search([]),
#         })

#     @http.route('/odoo_practica/odoo_modulov/odoo_practica/odoo_modulov/objects/<model("odoo_practica/odoo_modulov.odoo_practica/odoo_modulov"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('odoo_practica/odoo_modulov.object', {
#             'object': obj
#         })