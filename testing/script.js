new Vue({
    el: "#app",
    data: {
        attachRed: false
    },
    divClasses: function() {
        return {
            red: this.attachRed,
            blue: !this.attachRed
        }
    }
})