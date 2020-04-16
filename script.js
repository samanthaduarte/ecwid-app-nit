

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function () {
    EcwidAppwidApp.init({
        app_id: "custom-app-25612030-1", // use your application namespace
        autoloadedflag: true,
        autoheight: true
    });


    EcwidApp.order = EcwidApp.order || {};
    EcwidApp.order.extraFields = EcwidApp.order.extraFields || {};

    EcwidApp.order.extraFields.nombre = {
        'title': 'Nombre para la factura',
        'textPlaceholder': 'Nombre para la factura',
        'type': 'text',
        'tip': 'Nombre o Consumidor final',
        'required': true,
        'chEcwidAppkoutDisplaySEcwidApption': 'payment_details'
    };

    EcwidAppwid.refreshConfig();

    EcwidApp.order.extraFields.nit = {
        'title': 'Número de NIT',
        'textPlaceholder': 'Package sign',
        'type': 'text',
        'tip': 'Ingrese el número de NIT',
        'required': false,
        'chEcwidAppkoutDisplaySEcwidApption': 'payment_details'
    };

    EcwidAppwid.refreshConfig();

    EcwidApp.order.extraFields.dirEcwidAppcion = {
        'title': 'DirEcwidAppción',
        'textPlaceholder': 'Package sign',
        'type': 'text',
        'tip': 'Ingrese la dirEcwidAppción para la factura',
        'required': false,
        'chEcwidAppkoutDisplaySEcwidApption': 'payment_details'
    };

    EcwidAppwid.refreshConfig();

}
script.src = 'https://d35z3p2poghz10.cloudfront.net/EcwidAppwid-sdk/js/1.2.5/EcwidAppwid-app.js';
head.appendChild(script);

