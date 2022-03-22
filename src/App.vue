<template>
  <div id="appV">
    <!--img alt="Vue logo" src="./assets/logo.png"!-->

    <Header class="app_header" />
    <div class="list_box">
      <List :list_name="'Incomplete Tasks'" />
      <List :done="true" :list_name="'Complete Tasks'" />
    </div>

    <Form class="app_footer" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import List from "./components/List.vue";
import Header from "./components/header.vue";
import Form from "./components/footer/form.vue";
export default {
  name: "App",
  components: {
    //HelloWorld,
    List,
    Header,
    Form,
  },
  mounted() {
    if (window.cordova) {
      document.addEventListener(
        "deviceready",
        () => {
          console.log("cordova import success");
          /*window.sqlitePlugin.echoTest(function () {
            alert("Test de acceso a sqlite correcto");
          });*/
          this.$store.state.db = window.sqlitePlugin.openDatabase({
            name: "my.db",
            location: "default",
          });

          this.$store.state.db.transaction(
            function (tx) {
              tx.executeSql(
                "CREATE TABLE IF NOT EXISTS task ( task_id INTEGER PRIMARY KEY,task_text TEXT , done BLOB );"
              );
              /*tx.executeSql(
                'INSERT INTO task (task_text, done) VALUES ("Task1", false)'
              );
              tx.executeSql(
                'INSERT INTO task (task_text, done) VALUES ("Task2", true)'
              );
              //tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);*/
            },
            function (error) {
              console.log("Transaction ERROR: " + error.message);
            },
            function () {
              console.log("Populated database OK");
            }
          );
          this.$store.commit("renderDBtask");
        },
        false
      );
    } else {
      console.log("cordova import error");
    }
  },
};
</script>

<style>
#app {
  min-height: 100%;
}
#appV {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "main"
    "footer";
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #0b222c;
}
.app_header {
  grid-area: header;
}
.list_box {
  grid-area: main;
  /*background-color: rgb(180, 97, 115);*/
  overflow: auto;
}
.app_footer {
  grid-area: footer;
}
</style>
