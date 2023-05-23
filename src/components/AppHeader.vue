<script>
import AppNavbar from './AppNavbar.vue'

export default {
    name: "AppHeader",
    components: {
        AppNavbar
    },
    props: {
        links: Array,
        titolo: String
    },
    mounted() {
        console.log("AppHeader mounted", this.links);
    }
}
</script>

<template>
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg" alt="logo" />
        <h1>{{ titolo }}</h1>
        <AppNavbar :links="links" />

        <!-- <nav>
            <a v-for="link in links" :href="link.href">{{ link.title }}</a>
        </nav> -->
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

header {
    height: 80px;
    background: cadetblue;
    padding: 1rem;

    @include flex(row, space-between);

    img {
        height: 50px;
    }

    a {
        padding: 1rem;
        text-decoration: none;
        color: white;
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>