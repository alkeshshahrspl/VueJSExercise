<template>
    <div>
        <!-- First Name -->
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" class="form-control" :value="firstName" @input="updateName('firstName', $event)" placeholder="First Name"/>
        </div>
        <!-- Last Name -->
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" class="form-control" :value="lastName" @input="updateName('lastName', $event)" placeholder="Last Name"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        // data () {
        //     return {
        //         firstName: this.value.split(" ")[0],
        //         lastName: this.value.split(" ")[1]
        //     }
        // },
        methods: {
            updateName(field, event) {
                let name = "";
                if (field == "firstName") {
                    name = event.target.value + " " + this.lastName;
                } else if (field == "lastName") {
                    name = this.firstName + " " + event.target.value;
                } else {

                }
                this.value = name;
                this.$emit("input", this.value);
            }
        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        }
    }
</script>

<style>
    
</style>