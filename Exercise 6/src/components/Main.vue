<template>
    <div class="row">
        <app-server-status></app-server-status>
        <app-server-details></app-server-details>
    </div>
</template>

<script>
import ServerStatus from './servers/ServerStatus.vue';
import ServerDetails from './servers/ServerDetails.vue';
export default {
    components: {
        'app-server-status': ServerStatus,
        'app-server-details': ServerDetails
    }
}
</script>

