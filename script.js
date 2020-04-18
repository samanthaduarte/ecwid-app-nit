// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.nombre = {
    'title': 'Nombre para la factura',
    'textPlaceholder': 'Nombre o Consumidor final',
    'type': 'text',
    'tip': '',
    'required': true,
    'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();

ec.order.extraFields.nit = {
    'title': 'Número de NIT',
    'textPlaceholder': 'Ingrese el número de NIT',
    'type': 'text',
    'tip': '',
    'required': false,
    'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();

ec.order.extraFields.direccion = {
    'title': 'Dirección',
    'textPlaceholder': 'Ingrese la dirección para la factura',
    'type': 'text',
    'tip': '',
    'required': false,
    'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();


