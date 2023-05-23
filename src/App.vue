<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import IconList from './components/IconList.vue'
import ComicsList from './components/ComicsList.vue'
import Jumbotron from './components/Jumbotron.vue'

import { store } from './data/store';
import axios from 'axios';

import comicsDataArray from './data/comics';
import comicsDataJson from './data/comics.json';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    IconList,
    ComicsList,
    Jumbotron
  },
  data() {
    return {
      navLinks: [
        {
          title: "Characters",
          href: "https://wwww.characters.it/"
        },
        {
          title: "Comics",
          href: "https://wwww.google.it"
        },
        {
          title: "Movies",
          href: "https://wwww.movies.it"
        }
      ],
      titoloApplicazione: "DC Comics",
      listaFumettiArray: comicsDataArray,
      listaFumettiJSON: comicsDataJson,
      store //equivalente a scrivere --> store: store
    }
  },
  mounted() {
    console.log("App Mounted, store: ", this.store);
    console.log("Dati da .js: ", this.listaFumettiArray);
    console.log("Dati da .json: ", this.listaFumettiJSON);

    axios.get(this.store.urlAPI).then(r => {
      console.log("Ricevuto: ", r.data.results);
      this.store.personaggi = r.data.results;
    }).catch(err => {
      console.error("Qualcosa è andato storto");
      this.store.personaggi = [];
    });
  }
}
</script>

<template>
  <AppHeader :links="navLinks" :titolo="titoloApplicazione" />

  <main v-if="store.loading == false">
    <Jumbotron />
    <ComicsList :fumetti="listaFumettiJSON" />
    <IconList />
  </main>

  <AppFooter :links="navLinks" />
</template>

<style lang="scss" scoped>
@use './styles/partials/_variables.scss' as *;
</style>