# -*- coding: utf-8 -*-
{
    'name': 'Website academy',
    'summary': 'Building a website',
    'version': '1.0',
    'category': 'Website',
    'author': 'Quadit, ',
    'website': 'https://www.quadit.mx',
    'license': 'LGPL-3',
    'depends': [
                'website',
                'website_sale',
            ],
    'sequence': 1,
    'demo': [],
    'data': [
        'security/ir.model.access.csv',
        'templates.xml',
        'data.xml',
        'views/views.xml',
        'demo.xml',
        ],
    'development_status': 'Beta',
    'maintainers': [
        'Lucía Jiménez',
    ],
    'installable': True,
}
