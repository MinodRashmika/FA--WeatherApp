import mongoose from "mongoose";

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    w_ID : {
        type : String,
        required: true,
    },
    w_
})

/* ({"coord": {
    "lon":37.62,
    "lat":55.75
    },
"sys":{
    "type":1,
    "id":7323,
    "message":0.0036,
    "country":"RU",                  //2nd part of name
    "sunrise":1485753940,              // under temp, but need to convert to time
    "sunset":1485784855
},
"weather":[
    {
        "id":800,
        "main":"Clear",
        "description":"clear sky",    //description under name and date      
        "icon":"01n"}],

"main":{
    "temp":-10.5,                       //main displayed unit, in degrees c
    "pressure":1028,                    //bottom card display
    "humidity":66,                      //bottom card display
    "temp_min":-11,                     //under main temp
    "temp_max":-10
},
"visibility":10000,                     //bottom card display
"wind":{                                   //middle section of bottom card
    "speed":5,
    "deg":200
},
"clouds":{"all":0},
"dt":1485793175,
"id":524901,
"name":"Moscow"}) */                 //Name first part