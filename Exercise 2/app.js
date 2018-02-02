new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert("I'm alert!");
        },

        storeValue: function(event) {
            this.value = event.target.value;
        }
    }
});