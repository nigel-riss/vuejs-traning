<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-main></app-main>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-main': Main
    }
}
</script>