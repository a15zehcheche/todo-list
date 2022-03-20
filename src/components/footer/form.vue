<template>
   <div class="footer_box">
      <div class="input_box"><input type="text" placeholder="Something todo" /></div>
      <div class="add_button_box"><button>+</button></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.footer_box{
  min-height: 60px;
  display:grid;
  grid-template-columns: auto 52.5px;
}
.footer_box > .input_box{
  height: 100%;
  display: flex;
  justify-content: center;
}
.footer_box > .input_box > input{
  width: 100%;
  margin: 10px;
  margin-right: 2.5px;
  border-radius: 50px;
  border-width: 0px;
  outline: none;
  padding-left: 10px;
  font-size: 14px;
}

.footer_box > .add_button_box{
  height: 100%;
  display: flex;
  margin-left: 2.5px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
}
.footer_box > .add_button_box > button{
  width: 40px;
  height: 40px;
  background-color: #F94745;
  border-width: 0px;
  border-radius: 50%;
  color: white;
  font-size: 35px;
}
</style>