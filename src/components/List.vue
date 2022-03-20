<template>
  <div class="list">
      <div class="list_header">
        <p>{{list_name}}</p>
        <div><p>down</p></div>
      </div>
      <Item v-for="n in 10" :key="n"/>
      
  </div>
</template>

<script>
import Item from "./list/List_item.vue"
export default {
  name: "App",
  components: {
    Item,
  },
  props: {
    list_name: String
  }
}
</script>

<style>

.list {
  margin: 5px;

}
.list > .list_header{
  background-color: #FFDC65;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 50px;
  border-color: gray;
  border-style: solid;
  border-width: 1px;

}
.list > .list_header > *{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>