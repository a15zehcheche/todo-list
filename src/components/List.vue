<template>
  <div class="list">
    <div class="list_header">
      <p>{{ list_name }} {{ taskCount }}</p>
      <div class="down_arrow">
        <img @click="showList()" src="@/assets/down-arrow.png" alt="" />
      </div>
    </div>
    <div class="item_box" :class="{ display: show }">
      <Item
        :done="done"
        :index="index"
        v-for="(item, index) in this.$store.state.list"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Item from "./list/List_item.vue";
export default {
  name: "App",
  components: {
    Item,
  },
  props: {
    done: Boolean,
    list_name: String,
  },
  data() {
    return {
      show: true,
      count: 0,
    };
  },
  methods: {
    showList() {
      this.show = !this.show;
    },
  },
  computed: {
    taskCount: function () {
      // `this` points to the vm instance

      let ele = this;
      ele.count = 0;
      /*if (ele.done) {
        for (let i = 0; i < this.$store.state.list.length; i++) {
          if (this.$store.state.list[i].done) {
            ele.count++;
          }
        }
      } else {
        for (let i = 0; i < this.$store.state.list.length; i++) {
          if (!this.$store.state.list[i].done) {
            ele.count++;
          }
        }
      }*/

      for (let i = 0; i < this.$store.state.list.length; i++) {
        if (ele.done) {
          if (this.$store.state.list[i].done) {
            ele.count++;
          }
        }else{
            if (!this.$store.state.list[i].done) {
            ele.count++;
          }
        }
      }

      return this.count;
    },
  },
};
</script>

<style>
.list {
  margin: 5px;
}
.list > .list_header {
  background-color: #ffdc65;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 50px;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
}
.list > .list_header > * {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list > .list_header > .down_arrow {
  max-width: 50px;
  max-height: 50px;
}
.list > .list_header > .down_arrow > img {
  max-width: 80%;
  max-height: 80%;
}
.display {
  height: auto;
  max-height: 600px !important;
  overflow: scroll !important;
}
.item_box {
  -webkit-transition: max-height 0.5s;
  -moz-transition: max-height 0.5s;
  -ms-transition: max-height 0.5s;
  -o-transition: max-height 0.5s;
  transition: max-height 0.5s;
  background: #e5feff;
  overflow: hidden;
  max-height: 0;
}
</style>
