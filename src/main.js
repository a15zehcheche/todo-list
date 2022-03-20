import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    console.log("cordova import success");
     window.sqlitePlugin.echoTest(function(){
        alert("Test de acceso a sqlite correcto")
    })
  }, false);
} else {
  console.log("cordova import error");
}
