<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group" role="button">
            <li
                    class="list-group-item" @click="selectServer(server)"
                    v-for="server in servers">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from "../../main.js";

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: "Normal" },
                    { id: 2, status: "Critical" },
                    { id: 3, status: "Critical" },
                    { id: 4, status: "Normal" },
                ]
            }
        },
        methods: {
            selectServer(server) {
                eventBus.selectServer(server);
            } 
        }
    }
</script>

<style>

</style>
