<script>
export default {
    name: "AppNavbar",
    props: {
        links: Array
    }
}
</script>

<template>
    <nav>
        <a v-for="link in links" :href="link.href">{{ link.title }}</a>
    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

a {
    padding: 1rem;
    text-decoration: none;
    color: white;
    font-weight: 600;

    &:hover {
        text-decoration: underline;
    }
}
</style>