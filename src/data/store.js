import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    urlAPI: "https://rickandmortyapi.com/api/character",
    personaggi: []
});