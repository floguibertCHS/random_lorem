const express = require('express');

var application = express();

const loremIpsum = require('lorem-ipsum')

application.listen(2000);

application.get('/', function(request, response) {
    response.send(loremIpsum({ 
        count: 3,                     
        units: 'paragraphs',           
        format: 'html'               
}))
})

// const express = require('express');//this is a constant request since we are using this framework.(library)

// let app = express();//this gives access to the express functionality

// const loremIpsum = require('lorem-ipsum');//library requirement offering up Lorem


// app.listen(3000)//the running on port 3000. This tells express where to serve files.

// let output = loremIpsum ({  //giving us access to lorem and defining what we want.
//     count: 3,                     
//     units: 'paragraphs',           
//     format: 'html'               
// })

// app.get('/', function(req, res){ //when express makes a get request on this on this route.
//     res.send(output);// send as a response the arguement on line 10.
// })