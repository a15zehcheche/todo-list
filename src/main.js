import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'

createApp(App).use(store).mount('#app')

/*
if (window.cordova) {
  document.addEventListener('deviceready', () => {
    console.log("cordova import success");
     window.sqlitePlugin.echoTest(function(){
        alert("Test de acceso a sqlite correcto")
    })
  }, false);
} else {
  console.log("cordova import error");
}*/


