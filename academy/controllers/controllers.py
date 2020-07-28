# -*- coding: utf-8 -*-
from odoo import http

class Academy(http.Controller):
    @http.route('/academy/academy/', auth='public', website=True)
    def index(self, **kw):
        Teachers = http.request.env['academy.teachers']
        return http.request.render('academy.index', {
            'teachers': Teachers.search([])
        })

    @http.route('/academy/<model("academy.teachers"):teacher>/', auth='public', website=True)
    def teacher(self, teacher):
        return http.request.render('academy.biography', {
            'person': teacher
        })


   





#class Academy(http.Controller):
#    @http.route('/academy/academy/', auth='public')
#    def index(self, **kw):
#        return "Hello, world"


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