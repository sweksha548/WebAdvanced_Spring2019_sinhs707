
/*var data = [
  {
    "id": 0,
    "country": "New Delhi, India",
    "flag": "json_gallery/4.png",
    "weather" : "Sunny",
    "temp" : "68 F",
    "day" : "Wed",
    "time" : "06:42:24 am"
  },

  {
    "id": 1,
    "country": "New York, USA", 
    "flag": "json_gallery/5.jpg",
    "weather" : "Clear",
    "temp" : "45 F",
    "day" : "Wed"
  },

  {
    "id": 2,
    "country": "London, UK",
    "flag": "json_gallery/6.png",
    "weather" : "Partly cloudy",
    "temp" : "52 F",
    "day" : "Wed",
    "time" : "01:13:24 am"
  },


  {
    "id": 3,
    "country": "Tokyo, Japan",
    "flag": "json_gallery/7.png",
    "weather" : "Partly cloudy",
    "temp" : "59 F",
    "day" : "Wed",
    "time" : "10:14:24 am"
  }

]*/
var i, x;

var text = '{"data":[' +
'{"id": 0, "country": "New Delhi, India","temp":"68 F","weather" : "Sunny","day":"Wed", "time" : "06:42:24 am"},' +
'{"id": 1,"country": "New York, USA","temp" : "45 F","weather" : "Clear","day" : "Wed"},' +
'{"id": 2,"country": "London, UK","temp" : "52 F","weather" : "Partly cloudy","day" : "Wed", "time" : "01:13:24 am"},' +
'{"id": 3,"country": "Tokyo, Japan","temp" : "59 F","weather" : "Partly cloudy","day" : "Wed", "time" : "10:14:24 am"}]}';


obj = JSON.parse(text);

document.getElementById("demo1").innerHTML =	obj.data[1].country + "<br>" + 
											obj.data[1].temp + "<br>" + 
											obj.data[1].weather + "<br>" + 
											obj.data[1].day;

/*for (i in obj.data) {
  x += obj.data[i].country + "<br>" + obj.data[i].temp + "<br>" + obj.data[i].day + "<br>";
}

document.getElementById("demo").innerHTML = x;*/

