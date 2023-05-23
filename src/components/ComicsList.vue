<script>
import { store } from '../data/store';

export default {
    name: "ComicsList",
    props: {
        fumetti: Array
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log("ComicsList mounted", this.fumetti);
    }
}
</script>

<template>
    <section>
        <h2>Comics List</h2>
        <template v-if="store.loading == true">
            <span>La pagina sta caricando</span>
        </template>
        <div class="comics" v-else>
            <div class="card" v-for="fumetto in fumetti">
                <img :src="fumetto.thumb" :alt="fumetto.series">
                <h3>{{ fumetto.series }}</h3>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

section {
    background: crimson;
    color: white;
    padding: 1rem;

    .comics {
        @include flex(row, center, center, wrap);

        .card {
            width: 20%;
            padding: 1rem;

            img {
                width: 100%;
            }
        }
    }

}
</style>