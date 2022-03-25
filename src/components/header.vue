<template>
  <div id="app_header">
    <h1>To Do List</h1>
    <div class="manager_box">
      <div class="load_btn" @click="loadFile()">
        <img src="@/assets/upload.png" alt="" />
      </div>
      <div class="down_btn" @click="downloadFile()">
        <img src="@/assets/download.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      path:
        "cdvfile://localhost/root/data/user/0/io.cordova.todolist" +
        "/files" +
        "/dbsql.txt",
    };
  },
  methods: {
    async loadFile() {
      console.log("file load");

    },
    downloadFile() {
      console.log("file download");
      /*var successFn = function (sql, count) {
        console.log("Exported SQL: " + sql);
        alert("Exported SQL contains " + count + " statements");
      };
      var errorFn = function (error) {
        alert("The following error occurred: " + error.message);
      };
      window.cordova.plugins.sqlitePorter.exportDbToSql(this.$store.state.db, {
        successFn: successFn,
        errorFn: errorFn,
      });
      

      //let path = window.cordova.file.dataDirectory;
      let path =
        "/Android/data/" +
        this.$store.state.packageName +
        "/files" +
        "/dbsql.txt"; //+ this.$store.state.dbName
      alert(path);

      window.resolveLocalFileSystemURL(path, function (entry) {
        var nativePath = entry.toInternalURL();
        console.log("Native URI: " + nativePath);
        alert(nativePath);
        //document.getElementById("video").src = nativePath;
      });
      /* window.requestFileSystem(
        LocalFileSystem.PERSISTENT,
        0,
        function (fs) {
          console.log("file system open: " + fs.name);
          fs.root.getFile(
            path,
            { create: true, exclusive: false },
            function (fileEntry) {
              console.log("fileEntry is file?" + fileEntry.isFile.toString());
              // fileEntry.name == 'someFile.txt'
              // fileEntry.fullPath == '/someFile.txt'
              writeFile(fileEntry, null);
            },
            function (error) {
              console.log(error)
              alert("The onErrorCreateFile: " + error.message);
            }
          );
        },
        function (error) {
          alert("The onErrorLoadFs: " + error.message);
        }
      );

      function writeFile(fileEntry, dataObj) {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function (fileWriter) {
          fileWriter.onwriteend = function () {
            console.log("Successful file write...");
            readFile(fileEntry);
          };

          fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
          };

          // If data object is not passed in,
          // create a new Blob instead.
          if (!dataObj) {
            dataObj = new Blob(["some file data"], { type: "text/plain" });
          }

          fileWriter.write(dataObj);
        });
      }
      function readFile(fileEntry) {
        fileEntry.file(
          function (file) {
            var reader = new FileReader();

            reader.onloadend = function () {
              console.log("Successful file read: " + this.result);
              //displayFileData(fileEntry.fullPath + ": " + this.result);
            };

            reader.readAsText(file);
          },
          function (error) {
            alert("The ErrorReadFile: " + error.message);
          }
        );
      }
/*
      // 列出文件夹下的文件
        window.requestFileSystem(
          LocalFileSystem.PERSISTENT,
          0,
          onFileSystemSuccess,
          onFileSystemFail
        );

      let path= window.cordova.file.dataDirectory
      //path = '/Android/data/' + this.$store.state.packageName //+ '/databases/' + this.$store.state.dbName
      alert("path:" + path);
      function onFileSystemSuccess(fileSystem) {
        var directoryEntry = fileSystem.root;
        directoryEntry.getDirectory(
          path,
          { create: true, exclusive: false },
          onDirectorySuccess,
          onDirectoryFail
        );
      }

      function onDirectorySuccess(parent) {
        var directoryReader = parent.createReader();
        directoryReader.readEntries(success, fail);
      }

      function fail(error) {
        alert("Failed to list directory contents: " + error.code);
      }

      function success(entries) {
        if (entries.length == 0) console.log("No Records");
        else {
          console.log("file:")
          for (var i = 0; i < entries.length; i++) {
              
             console.log( entries[i])
            
            //entries[i].file(function (file) {
             // console.log("file.name " + file.name);
            //}); 
          }
        }
        console.log("file list created");
      }

      function onDirectoryFail(error) {
        alert("Unable to create new directory: " + error.code);
      }

      function onFileSystemFail(evt) {
        console.log(evt.target.error.code);
      }*/
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
