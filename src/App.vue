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
    // console.log("App Mounted, store: ", this.store);
    console.log("Dati da .js: ", this.listaFumettiArray);
    console.log("Dati da .json: ", this.listaFumettiJSON);

    //Al caricamento della pagina effettuo una chiamata ad una API
    axios.get(this.store.urlAPI).then(r => {
      //Se completata correttamente stampo il dato
      console.log("Ricevuto: ", r.data.results);
      //Copio i dati nello store per riutilizzarli in altri componenti
      this.store.personaggi = r.data.results;
      //Imposto lo stato "loading" dell'applicazione su false
      this.store.loading = false;
    }).catch(errore => {
      //In caso di problemi, mostro l'errore in console
      console.error("Qualcosa è andato storto", errore);
      //Mi assicuro che il dato nello store sia un array vuoto
      this.store.personaggi = [];
      //Il caricamento è comunque finito anche in questo caso
      this.store.loading = false;
    });
  }
}
</script>

<template>
  <AppHeader :links="navLinks" :titolo="titoloApplicazione" />

  <main>
    <Jumbotron />
    <ComicsList :fumetti="listaFumettiJSON" />
    <IconList />
  </main>

  <AppFooter :links="navLinks" />
</template>

<style lang="scss" scoped>
@use './styles/partials/_variables.scss' as *;
</style>