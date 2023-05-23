<script>
export default {
    name: "AppFooter",
    props: {
        links: Array
    }
}
</script>

<template>
    <footer>
        <nav>
            <a v-for="link in links" :href="link.href">{{ link.title }}</a>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background: #CCC;
    padding: 1rem;

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