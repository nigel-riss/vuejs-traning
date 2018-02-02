new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timeout: 1000
        },
        computed: {
            result: function() {
                return this.value != 5 ? "Not there yet!" : "DONE!";
            }
        },
        watch: {
            result: function() {
                let ctx = this;
                setTimeout(function() {
                    ctx.value = 0;
                }, ctx.timeout);
            }
        }
    });