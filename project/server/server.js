var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8888;

var offset = "/../www/"

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd() + offset, uri);

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      console.log("couldn't find: " + filename);
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        console.log("error while loading: " + filename);
        return;
      }

      var type = "text/plain";
      var extn = path.extname(filename);
      switch(extn) {
          case ".json":
              type = "application/json"
              break;
          case ".js":
              type = "text/javascript"
              break;
          case ".html":
              type = "text/html";
              break;
          case ".css":
              type = "text/css";
              break;
          default:
              type = "text/plain";
      }


      response.writeHead(200, {"Content-Type": type});
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");