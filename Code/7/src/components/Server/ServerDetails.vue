<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server">Status of server {{server.id}} is {{server.status}}</p>
        <p v-else>Please select server.</p>
        <button @click="server.status = 'Normal'">Reset server</button>
    </div>

</template>

<script>
    import { eventBus } from "../../main.js"

    export default {
        data: function() {
            return {
                server: null
            }
        },
        created() {
            eventBus.$on("server-changed", (server) => {
                this.server = server;
            });
        }
    }

</script>

<style>

</style>
