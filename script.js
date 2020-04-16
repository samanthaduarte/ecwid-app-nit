

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
    EcwidApp.init({
        app_id: "custom-app-25612030-1", // use your application namespace
        autoloadedflag: true, 
        autoheight: true
      });
}
script.src = 'https://d35z3p2poghz10.cloudfront.net/ecwid-sdk/js/1.2.5/ecwid-app.js';
head.appendChild(script);

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

Ecwid.refreshConfig();
