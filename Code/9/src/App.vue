<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <full-name v-model="userData.fullName"></full-name>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control" v-model="userData.email" placeholder="Email"/>
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="userData.password" placeholder="Password"/>
                    </div>
                    <!-- Store Data? Yes/No -->
                    <label>Store in database?</label>
                    
                    <div class="radio">
                        <label><input type="radio" id="store" value="Yes" v-model="userData.store"/>Yes</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" id="noStore" value="No" v-model="userData.store"/>No</label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button @click="isSubmitted = true">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.fullName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{userData.store}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./components/FullName.vue";

    export default {
        data () {
            return {
                userData: {
                    fullName: "Dhaval Patel",
                    email: "",
                    password: "",
                    store: "Yes"
                },
                isSubmitted: false
            }
        },
        components: {
            "fullName": FullName
        }
    }
</script>

<style>
</style>
