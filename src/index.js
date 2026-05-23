const express = require("express");

//inicializando una app de express
const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "Saludos desde mi app de Node(MODIFICADO) ULTIMO"});

});

app.listen(3000, function(){
    console.log("Servidor CORRIENDO en 3000 (ULTIMA MODIFICACION)");
});