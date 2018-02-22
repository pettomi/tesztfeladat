/**
 * Created by Tomi on 2018-02-22.
 */

Ext.define('IsleofWight.store.Schedule',{
    extend: 'Ext.data.Store',
    alias: 'store.schedule',
    model: 'IsleofWight.model.Schedule',
    autoLoad: true,
    proxy:{
        type: 'ajax',
        url: 'http://localhost:3000/schedule'
    },


});

