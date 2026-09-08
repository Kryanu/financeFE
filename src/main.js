// Async boundary required by Module Federation to load shared deps first
import('./bootstrap').then(({ mount }) => mount('#app'))
