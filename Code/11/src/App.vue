<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>String is {{ text }}</h3>
                <br />
                <h4>Using Filters:</h4>
                <h5>Reverse string is {{ text | reverse }}</h5>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                
                <h5>String with count is {{ text | appendCount }}</h5>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <br />
                <br />
                <h4>Using Computed:</h4>
                <h5>Reverse string is {{ reverseText }}</h5>
                <h5>String with count is {{ appendCount }}</h5>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { appMixins } from './appMixins.js';
    export default {
        mixins: [appMixins],
        data() {
            return {
                text: "Hello Dhaval"
            }
        },
        filters: {
            reverse(value) {
                return value.split('').reverse().join('');
            }
        },
        computed: {
            reverseText() {
                return this.text.split('').reverse().join('');
            }
        }
    }
</script>

<style>
</style>