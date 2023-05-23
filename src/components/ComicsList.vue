<script>
export default {
    name: "ComicsList",
    props: {
        fumetti: Array
    },
    mounted() {
        console.log("ComicsList mounted", this.fumetti);
    }
}
</script>

<template>
    <h2>Comics List</h2>
    <section>
        <div class="card" v-for="fumetto in fumetti">
            <img :src="fumetto.thumb" :alt="fumetto.series">
            <h3>{{ fumetto.series }}</h3>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

section {
    background: crimson;
    padding: 1rem;
    @include flex(row, center, center, wrap);

    .card {
        width: 20%;
        padding: 1rem;

        img {
            width: 100%;
        }
    }
}
</style>