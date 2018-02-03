new Vue({
    el: '#exercise',
    data: {
        effect: "",
        blueText: "blue-text",
        classesT3: "",
        classT4: "circle",
        allowT4: "true",
        stylesT5: "background: #fff000;",
        pbWidthT6: 10
    },
    methods: {
        startEffect: function () {
            var vm = this;
            setInterval(function () {
                vm.effect = vm.effect == "highlight" ? "shrink" : "highlight";
            }, 1000);
        },

        startProgress: function () {
            setInterval(() => {
                this.pbWidthT6++;
            }, 100);
        }
    },
    computed: {
        arrClassesT3: function() {
            return this.classesT3.split(" ");
        },

        allowT4Comp: function() {
            return this.allowT4 == "true";
        }
    }
});