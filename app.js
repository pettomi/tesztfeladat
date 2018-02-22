/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'IsleofWight',

    mainView: 'IsleofWight.view.main.Main',

    requires: [
        'Ext.MessageBox',
        'IsleofWight.*'
    ],
    stores: [
        'Schedule',
        'Cities',
        'Company'
    ],

    launch: function () {
        Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
    }
});
