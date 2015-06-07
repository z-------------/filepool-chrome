var socket = io("https://filepool-guardo.rhcloud.com");

var fileID;

var input = document.querySelector("#input");
var output = document.querySelector("#output");

input.addEventListener("change", function() {
    var file = this.files[0];
    if (file) {
        if (file.size < 100000000) { // 100 mb
            var now = new Date();

            var name = file.name;
            var type = file.type;
            var id = now.getTime().toString() + Math.round(Math.random() * 1000000).toString();
            fileID = id;

            socket.emit("file upload", {
                file: file,
                name: name,
                type: type,
                id: id
            });
        } else {
            alert("Your file '" + file.name + "' is too big (" + file.size + " bytes). Uploaded files cannot be bigger than 100 MB.");
        }
    }
});

socket.on("file", function(data){
    var id = data.id;
    var name = data.name;
    var type = data.type;
    var expiry = data.expiry;
    
    if (id === fileID) {
        var url = "https://filepool-guardo.rhcloud.com/file/" + id + "/" + encodeURIComponent(name);
        output.textContent = url;
    }
});