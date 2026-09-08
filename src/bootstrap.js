import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

let app = null

// entry point consumed by the MFE host, and by main.js when running standalone
export const mount = (el = '#app') => {
  app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount(el)
}

export const unmount = () => {
  app?.unmount()
  app = null
}
