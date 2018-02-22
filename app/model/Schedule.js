/**
 * Created by Tomi on 2018-02-22.
 */

Ext.define('IsleofWight.model.Schedule', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'companyId',
        type: 'int',
        reference: 'IsleofWight.model.Company',
    },
        {
            name: 'from',
            type: 'int',
            reference: 'IsleofWight.model.Cities'
        },
        {
            name: 'to',
            type: 'int',
            reference: 'IsleofWight.model.Cities'
        },
        {
            name: 'leaves',
            type: 'string'
        },
        {
            name: 'arrives',
            type: 'string'
        }

    ],
    hasOne: 'Company'
});

