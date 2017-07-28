<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myon:click="clickHere" v-myon:mouseenter="enterHere" v-myon:mouseleave.skyblue="leaveHere">Click Here</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            clickHere: function() {
                alert("Clicked on button");
            },
            enterHere: function(event) {
                event.target.style.backgroundColor = "skyblue";
            },
            leaveHere: function(event) {
                event.target.style.backgroundColor = "";
            }
        },
        directives: {
            myon: {
                bind(el, binding, vnode) {
                    var event = binding.arg;
                    var fn = binding.value;
                    el.addEventListener(event, fn);
                }
            }
        }
    }
</script>

<style>
</style>
