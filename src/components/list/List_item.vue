<template>
  <div class="list_item">
      <div><input type="checkbox" name="" id=""></div>
      <p>{{text}}</p>
      <div><button>X</button></div>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        text: String
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

</style>