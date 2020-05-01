const express = require('express');
var request = require("request");
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/newEndpoint', (req, res) => res.send('This is my new End Point'));
app.get('/getWeatherCalgary', (req,res) =>{
    //making API request
   request('api.openweathermap.org/data/2.5/weather?q=calgary, CA&APPID=b150704e2ee1d13d4f99fe5fa4708f5e', 
   function(error, response, body){
       if(!error && response.statusCode == 200){
           var parsedBody = JSON.parse(body);
           var humidity = parsedBody['main']['humidity'];
           res.send({ humidity  });
       }
   }
   
   );


});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));