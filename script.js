import ec from "./test.mjs";

// Initialize the application
ec.init({
    app_id: "custom-app-25612030-1", 
    autoloadedflag: true, 
    autoheight: true
  });
  
var storeData = EcwidApp.getPayload();
var storeId = storeData.store_id;
var accessToken = storeData.access_token;
var language = storeData.lang;
var viewMode = storeData.view_mode;

if (storeData.public_token !== undefined){
    var publicToken = storeData.public_token;
}

if (storeData.app_state !== undefined){
    var appState = storeData.app_state;
}

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
