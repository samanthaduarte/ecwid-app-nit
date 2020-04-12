// Initialize the application
ec.init({
    app_id: "custom-app-25612030-1", // use your application client_id
    autoloadedflag: true, 
    autoheight: true
  });
  
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.nombre = {
    'title': 'Nombre para la factura',
    'textPlaceholder': 'N',
    'type': 'text',
    'tip': 'Nombre o Consumidor final',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.nit = {
    'title': 'Número de NIT',
    'textPlaceholder': 'Package sign',
    'type': 'text',
    'tip': 'Ingrese el número de NIT',
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.direccion = {
    'title': 'Dirección',
    'textPlaceholder': 'Package sign',
    'type': 'text',
    'tip': 'Ingrese la dirección para la factura',
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

ec.refreshConfig();