/**
 * Created by Tomi on 2018-02-22.
 */

Ext.define('IsleofWight.view.main.Main',{
    extend: 'Ext.tab.Panel',
    controller: 'main',
    requires: [
        'Ext.Button',
        'Ext.field.Text',
        'Ext.grid.Grid',
        'IsleofWight.store.Schedule',
        'Ext.field.Select'
    ],
    viewModel: {
        data: {
            place: ''
        }
    },

    items: [{
        title: 'Home',
        items:[
            {

            }
        ]

    },{
        title: 'List',
        items: [
            // {
            //     xtype: 'textfield',
            //     label: 'Your Location',
            //     bind: '{place}',
            //     itemId: 'LocationField'
            //
            //
            // },
            {
                xtype: 'fieldset',

                title: 'Choose your location',
                items: [{
                    xtype: 'selectfield',
                    itemId: 'LocationList',
                    label: 'Choose one',
                    options: [{
                        text: 'Siófok',
                        value: 1
                    }, {
                        text: 'Veszprém',
                        value: 2
                    }, {
                        text: 'Székesfehérvár',
                        value: 3
                    },
                        {
                            text: 'Budapest',
                            value: 3
                        }]
                }]},
            {
                xtype: 'grid',
                itemId: 'Grid',
                flex: 1,
                height: 500,
                title: 'boats',
                iconCls: 'x-fa fa-users',
                store: {
                    type: 'schedule'
                },

                columns: [{
                    text: 'Company',
                    dataIndex: 'company',
                    flex: 1,
                    renderer: function(value, record) {
                        return Ext.getStore('Company').getById(Number(value)).data.name;
                    }
                }, {
                    text: 'From',
                    dataIndex: 'from',
                    flex: 1,
                    renderer: function(value, record) {
                        return Ext.getStore('Cities').getById(Number(value)).data.name;
                    }
                }, {
                    text: 'To',
                    dataIndex: 'to',
                    flex: 1,
                    renderer: function(value, record) {
                        return Ext.getStore('Cities').getById(Number(value)).data.name;
                    }
                },{
                    text: 'Leaves',
                    dataIndex: 'leaves',
                    flex: 1
                },{
                    text: 'Arrives',
                    dataIndex: 'arrives',
                    flex: 1
                }
                ]
            }

        ],
    }]


});
