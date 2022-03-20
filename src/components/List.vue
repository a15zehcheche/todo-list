<template>
  <div class="list">
      <div class="list_header">
        <p>{{list_name}}</p>
        <div class="down_arrow"><img src="@/assets/down-arrow.png" alt=""></div>
      </div>
      <Item  :text="item.text" v-for="(item,index) in this.$store.state.list" :key="index"/>
      
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
.list > .list_header > .down_arrow{
  max-width: 50px;
  max-height: 50px;
}
.list > .list_header > .down_arrow > img{
  max-width: 80%;
  max-height: 80%;
}
</style>