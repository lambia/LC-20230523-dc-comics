<script>
import { store } from '../data/store';

export default {
    name: "Jumbotron",
    data() {
        return {
            store
        }
    },
    methods: {
        toggleLoading() {
            this.store.loading = !this.store.loading;
        }
    }
}
</script>

<template>
    <div>
        <h2>Jumbo</h2>
        <button @click="toggleLoading">Cambia "loading"</button>
        <p>In uno scenario normale questo tasto non ha senso di esistere, ma serve a mostrarvi come possiamo cambiare un
            dato presente nello store.</p>
        <p>In questo caso dal componente
            <code>Jumbotron</code> cambiamo il valore di
            <code>store.loading</code>, che viene usato anche da
            <code>ComicsList</code>
        </p>
    </div>
</template>

<style lang="scss" scoped>
div {
    background: white;
    padding: 1rem;

    h2 {
        color: teal;
    }

    button {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }

    code {
        color: crimson
    }
}
</style>