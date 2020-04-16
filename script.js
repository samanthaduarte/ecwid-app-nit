// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.nombre = {
    'title': 'Nombre para la factura',
    'textPlaceholder': 'Nombre para la factura',
    'type': 'text',
    'tip': 'Nombre o Consumidor final',
    'required': true,
    'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();

ec.order.extraFields.nit = {
    'title': 'Número de NIT',
    'textPlaceholder': 'Package sign',
    'type': 'text',
    'tip': 'Ingrese el número de NIT',
    'required': false,
    'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();

ec.order.extraFields.direccion = {
    'title': 'Dirección',
    'textPlaceholder': 'Package sign',
    'type': 'text',
    'tip': 'Ingrese la dirección para la factura',
    'required': false,
    'checkoutDisplaySection': 'payment_details'
};

ec.refreshConfig();


