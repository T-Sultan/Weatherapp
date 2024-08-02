const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

 app.use(bodyParser.urlencoded({extended: true}));

    app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
   
    })
   app.post("/", function(req, res){
   const query = req.body.cityName;
       const apiKey = "be1e3262e30487d534541be6d3bdf0a8";
        const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey;
            
    
       https.get(url, function(response){
              console.log(response.statusCode);
    
    
     response.on("data", function(data){ 
        const WeatherData = JSON.parse(data);
               const temp = WeatherData.main.temp;
             const weatherDescription = WeatherData.weather[0].description;
               const icon = WeatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
             res.write("<P> The weather is currently " + weatherDescription + "<p>");
                res.write("<h1> The Temperature in "+ query +" is " + temp + "degree celcuis.</h1>");
                res.write("<img src=" + imageURL +">");
                res.send();
             })
                
       })
       
   })

    
 app.listen(3000, function() {
    console.log("My server is running on port 3000.");

    })
 































































































































































































// const query  = require("express");
// const express = require("express");
// const https = require("https");
// const  url  = require("inspector");
// const bodyParser = require("body-parser");
// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));


// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");

// });
    
//     app.post("/", function(req, res){
//     const query = request.body.cityName;
//     const apiKey = "be1e3262e30487d534541be6d3bdf0a8";
//     const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey;
//     https.get(url, function(response){
//         console.log(response.statusCode);
//     });

//         response.on("data", function(data){
//             const WeatherData = JSON.parse(data);
//             const temp = WeatherData.main.temp;
//             const weatherDescription = WeatherData.weather[0].description;
//             const icon = WeatherData.weather[0].icon;
//             const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//             res.write("<P> The weather is currently " + weatherDescription + "<p>");
//             res.write("<h1> The Temperature in "+ query +" is " + temp + "degree celcuis.</h1>");
//             res.write("<img src=" + imageURL +">");
//             res.send();
            
            
//         });
//     });
