<template>
  <div id="app_header">
    <h1>To Do List</h1>
    <div class="manager_box">
      <div class="load_btn" @click="uploadFile()">
        <img src="@/assets/upload.png" alt="" />
      </div>
      <div class="down_btn" @click="exportFile()">
        <img src="@/assets/download.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import FileManager from "../controller/filemanager.js";
export default {
  name: "Header",
  data() {
    return {
      path: "",
      fileManager: null,
    };
  },
  mounted() {
    if (window.cordova) {
      document.addEventListener("deviceready", () => {
        this.path = window.cordova.file.applicationStorageDirectory;
        window.resolveLocalFileSystemURL(
          window.cordova.file.applicationStorageDirectory,
          (fs) => {
            console.log("resolved fs", fs);
            this.fileManager = new FileManager(fs);
          },
          (err) => {
            console.log("resolve error", err);
          }
        );
      });
    }
  },
  methods: {
    async uploadFile() {
      //await
      //this.fileManager.info();
      console.log(this.fileManager.fs);
    },
    exportFile() {
      //this.fileManager.isFileExist("databases/" + this.$store.state.dbName);
      //this.fileManager.createDirectory("databases");
      let path = this.path + "databases/" + this.$store.state.dbName;
      this.fileManager.copyFile(
        path,
        this.$store.state.dbName,
        LocalFileSystem.PERSISTENT
      );
      console.log("file export");
    },
  },
};
</script>

<style>
#app_header {
  min-height: 50px;
  max-height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
}
#app_header > h1 {
  margin-left: 5px;
  color: white;
}
.manager_box {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  right: 0;
}
.load_btn,
.down_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 50px;
  width: 40px;
}

.manager_box img {
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: white;
}
</style>
