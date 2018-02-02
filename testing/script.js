new Vue({
    el: "#app",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        incCounter: function(step, event) {
            this.counter += step;
            console.log(event);
        },

        updCoords: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        // dummy: function(event) {
        //     event.stopPropagation();
        // },

        alertMe: function() {
            alert("Alert!");
        }
    }
})