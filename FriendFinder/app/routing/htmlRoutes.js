function htmlRoutes (app, path) {

    app.get("/:serve", function(req, res) {
        var action = req.params.serve;
        if (action === "survey") {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        } else{
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    });

    app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}


module.exports = htmlRoutes;