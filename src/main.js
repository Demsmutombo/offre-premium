import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadTheme } from './utils/theme'

// Charger le thème sauvegardé seulement s'il existe (utilisateur a déjà choisi)
// Sinon, le thème blanc reste par défaut
loadTheme()

createApp(App).use(router).mount('#app')

