/**
 * Created by Tomi on 2018-02-22.
 */

Ext.define('IsleofWight.store.Cities',{
    extend: 'Ext.data.Store',
    alias: 'store.cities',
    model: 'IsleofWight.model.Cities',
    autoLoad: true,
    proxy:{
        type: 'ajax',
        url: 'http://localhost:3000/cities'
    },


});