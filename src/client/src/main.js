import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

import piniaPluginPersistedState from "pinia-plugin-persistedstate"

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)

app.mount("#app")
