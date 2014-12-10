var http = require("http"),
    path = require("path"),
    url = require("url"),
    express = require("express"),
    app;

app = express();

app.use("/static", express.static(path.join(process.cwd(), 'public/static')));

app.get("/app/*", function (request, response) {
    var servedPath = path.join(process.cwd(), "public", url.parse(request.url).pathname);
    response.sendFile(servedPath);
});

app.get("*", function (request, response) {
    response.sendFile(path.join(process.cwd(), "public/app/index.html"));
});

http.createServer(app).listen(8080, function () {
    console.log("Server Running");
});

module.exports = app;