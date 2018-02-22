/**
 * Created by Tomi on 2018-02-22.
 */

Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    control : {
        '#LocationField': {
            change: 'onChangeLocationField'
        },
        '#LocationList':{
            change: 'onChangeLocationList'
        }
    },
    requires: [
        'Ext.MessageBox',
        'store.schedule'
    ],
    onChangeLocationField: function(textfield, newValue, oldValue) {
        const grid = this.getView().down('#Grid');
        const gridStore = grid.getStore();
        gridStore.filter('from', newValue);

        var time=new Date;
        var hours = time.getHours();
        var minutes= time.getMinutes();

        var timefilter = new Ext.util.Filter({
            filterFn: function(item) {
                console.log(item);
                console.log(item.data.leaves);
                console.log(hours+':'+minutes);
                return item.data.leaves>=hours+':'+minutes;
            }
        });
        gridStore.filter(timefilter);

        gridStore.sort('leaves','ASC' );
    },

    onChangeLocationList: function(list, newValue, oldValue) {
        const grid = this.getView().down('#Grid');
        const gridStore = grid.getStore();
        console.log('uj ertek: '+newValue);
        gridStore.filter('from', newValue);

        var time=new Date;
        var hours = time.getHours();
        var minutes= time.getMinutes();

        var timefilter = new Ext.util.Filter({
            filterFn: function(item) {
                console.log(item);
                console.log(item.data.leaves);
                console.log(hours+':'+minutes);
                return item.data.leaves>=hours+':'+minutes;
            }
        });
        gridStore.filter(timefilter);
        console.log('elso: '+gridStore.getAt(1).data.from);
     //   gridStore.filter('leaves' ,gridStore.getAt(1).data.leaves); ez dobná ki az elsőt
        gridStore.sort('leaves','ASC' );
    },
    onGo: function () {
         //   mystore.filter('from', 'place');
            Ext.Msg.alert('done');
    }
});
