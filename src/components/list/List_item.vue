<template>
  <div v-if="done && $store.state.list[index].done || !done && !$store.state.list[index].done" class="list_item" >
      <div><input type="checkbox" v-model="$store.state.list[index].done" name="" id=""></div>
      <p class="task_text" :class="{done_style:done}">{{$store.state.list[index].text}}</p>
      <div><button @click="delItem(index)">X</button></div>
  </div>
  <!--div v-if="!done && !$store.state.list[index].done" class="list_item" >
      <div><input type="checkbox" v-model="$store.state.list[index].done" name="" id=""></div>
      <p class="task_text" :class="{done_style:done}">{{$store.state.list[index].text}}</p>
      <div><button @click="delItem(index)">X</button></div>
  </div-->
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
    return {
      
    };
  },
    props: {
        done: Boolean,
        index: Number,
    },
    mounted:function(){
  
    },
    methods:{
        delItem(index){
            this.$store.commit("itemDelete",index);
        }
    },
    computed: {
  }
}
</script>

<style>
.list_item{
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    min-height: 50px;
    background-color: #F0F0F0;
    border: 1px gray solid;
    /*box-sizing: border-box;*/
    margin-top: -1px;
}

.list_item > div{
    display: flex;
    justify-content: center;
    align-items: center;
}
.list_item > .task_text{
    word-wrap: break-word;
}
.done_style{
   text-decoration: line-through;
}
</style>