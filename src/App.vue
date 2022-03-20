<template>
  <div id="appV">
    <!--img alt="Vue logo" src="./assets/logo.png"!-->

    <Header />
    <div class="list_box">
       <List :list_name="'Incomplete Tasks'" />
      
    </div>
    
    <Form/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import List from "./components/List.vue";
import Header from "./components/header.vue";
import Form from "./components/footer/form.vue"
export default {
  name: "App",
  components: {
    //HelloWorld,
    List,
    Header,
    Form
  },
};
</script>

<style>
#app{
   min-height: 100%;
}
#appV {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #0B222C;
}
.list_box{
  /*background-color: rgb(180, 97, 115);*/
}

</style>
