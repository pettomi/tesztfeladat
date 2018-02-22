/**
 * Created by Tomi on 2018-02-22.
 */

Ext.define('IsleofWight.store.Company',{
    extend: 'Ext.data.Store',
    alias: 'store.company',
    model: 'IsleofWight.model.Company',
    autoLoad: true,
    proxy:{
        type: 'ajax',
        url: 'http://localhost:3000/companies'
    },


});