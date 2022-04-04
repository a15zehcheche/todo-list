export default class Filemanager {
    constructor(fs) {
        this.rootDirectoryEntry = fs;

    }
    // Getter
    get fs() {
        return this.rootDirectoryEntry
    }

    // Method
    info() {
        return "File Manager V1";
    }
    createDirectory(name) {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail=>{
                console.log("requestFileSystem error",fail)
            });
        }

        function gotFS(fileSystem) {
            fileSystem.root.getDirectory(name, { create: true }, gotDir);
        }

        function gotDir(dirEntry) {
            console.log("directory create succes", dirEntry)
            dirEntry.getFile("lockfile.txt", { create: true, exclusive: true }, gotFile);
        }

        function gotFile(fileEntry) {
            // Do something with fileEntry here
        }
    }
    /*copyFile("file:///storage/emulated/0/Android/data/com.form.parking.violation/cache/IMG-20180505-WA0004.jpg",         
        "myImg.jpg",
        LocalFileSystem.PERSISTENT);  */
    copyFile(baseFileURI, destPathName, fileSystem){
        window.resolveLocalFileSystemURL(baseFileURI, 
            function(file){        
                window.requestFileSystem(fileSystem, 0, 
                    function (fileSystem) {
                       
                        fileSystem.root.getDirectory("Databases", { create: true }, gotDir);
                       
                    });
                    function gotDir(dirEntry){
                        console.log("directory create succes", dirEntry)
                     
                        console.log(dirEntry);
                        file.copyTo(dirEntry, destPathName,
                        function(res){                        
                            console.log('copying was successful to: ' + res.nativeURL)
                            alert("Databases export to " + res.nativeURL)
                        }, 
                        function(){
                            console.log('unsuccessful copying')
                        });
                    }
            }, 
            function(){
                console.log('failure! file was not found')
            });
           
    }
    isFileExist(fileName) {
        this.rootDirectoryEntry.getFile(
            fileName, { create: false },
            fs => {
                console.log("got fileEntry", fs)
            },
            error => {
                console.log("got file error", error)
            }
        )
    }
    isDirectoryExist(directoryName) {
        this.rootDirectoryEntry.getDirectory(
            directoryName, { create: false },
            fs => {
                console.log("got directoryEntry", fs)
            },
            error => {
                console.log("got directory error", error)
            }
        )
    }
}

// import Rectangle from './filemanager.js';

//weifeng App: externalApplicationStorageDirectory, file:externalDataDirectory
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