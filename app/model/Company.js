/**
 * Created by Tomi on 2018-02-22.
 */

Ext.define('IsleofWight.model.Company',{
    extend: 'Ext.data.Model',

    fields:[{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }
    ]
});