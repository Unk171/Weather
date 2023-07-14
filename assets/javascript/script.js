// variables 
var responseText = document.getElementById('response-text');
var btn = document.querySelector(".btn");
var city = document.querySelector("#cityInput");
var oldCity = $('#cityName');
var x = localStorage.getItem("story");
// check storage null 
if (x === null) { } else {
  var story = x.split(",");
  // create search history list 
  for (var i = 0; i < story.length; i++) {
    var butt = $('<button>>');
    var buttons = $('#buttons');
    butt.addClass('list-group-item list-group-item-action');
    butt.attr('id', 'cityName');
    buttons.append(butt);
    butt.text(story[i]);
  }
};

// button event 
btn.addEventListener('click', function () {
  var cityString = JSON.stringify(city.value);
  if (x === null) {
    // first city 
    story = [cityString];
    var butt = $('<button>');
    var buttons = $('#buttons');
    butt.addClass('list-group-item list-group-item-action');
    butt.attr('type', 'button');
    butt.attr('id', 'cityName');
    buttons.append(butt);
    butt.text(story);
  } else {
    story.push(cityString);
  }
  localStorage.setItem('story', story);
  // request to openweather for today result 
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=0d050478da7af8cff791a18ab4834659'
  fetch(requestUrl)
    .then(function (responce) {
      if (responce.status === 200) {
        return responce.json();
      } else { alert("Enter correct city") }
    })
    .then(function (data) {
      // render result 
      var nameval = data.name;
      var unixtime = data.dt;
      var time = dayjs.unix(unixtime).format('MMM D, YYYY');
      var descrip = data.weather[0].description;
      var humi = data.main.humidity;
      var tempature = data.main.temp;
      var wndspd = data.wind.speed;
      today.innerHTML = `Today: <span>${time}<span>`
      cityName.innerHTML = `City: <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${tempature} F</span>`
      clouds.innerHTML = `Clouds: <span>${descrip}<span>`
      hum.innerHTML = `Humidity: <span>${humi}%<span>`
      wind.innerHTML = `Wind Speed: <span>${wndspd} MPH<span>`
    });
  // request for 5 days 
  var requestUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city.value + '&units=imperial&appid=0d050478da7af8cff791a18ab4834659'
  fetch(requestUrlForecast)
    .then(function (responce) {
      if (responce.status === 200) {
        return responce.json();
      } else { alert("Enter correct city") }
    })
    .then(function (data) {
      // create varibles for results 
      var unixtime = data.list[6].dt;
      var time1 = dayjs.unix(unixtime).format('MMM D, YYYY');
      var descrip1 = data.list[6].weather[0].description;
      var tempature1 = data.list[6].main.temp;
      var wndspd1 = data.list[6].wind.speed;
      var humi1 = data.list[6].main.humidity;

      var unixtime = data.list[14].dt;
      var time2 = dayjs.unix(unixtime).format('MMM D, YYYY');
      var descrip2 = data.list[14].weather[0].description;
      var tempature2 = data.list[14].main.temp;
      var wndspd2 = data.list[14].wind.speed;
      var humi2 = data.list[14].main.humidity;

      var unixtime = data.list[22].dt;
      var time3 = dayjs.unix(unixtime).format('MMM D, YYYY');
      var descrip3 = data.list[22].weather[0].description;
      var tempature3 = data.list[22].main.temp;
      var wndspd3 = data.list[22].wind.speed;
      var humi3 = data.list[22].main.humidity;

      var unixtime = data.list[30].dt;
      var time4 = dayjs.unix(unixtime).format('MMM D, YYYY');
      var descrip4 = data.list[30].weather[0].description;
      var tempature4 = data.list[30].main.temp;
      var wndspd4 = data.list[30].wind.speed;
      var humi4 = data.list[30].main.humidity;

      var unixtime = data.list[38].dt;
      var time5 = dayjs.unix(unixtime).format('MMM D, YYYY');
      var descrip5 = data.list[38].weather[0].description;
      var tempature5 = data.list[38].main.temp;
      var wndspd5 = data.list[38].wind.speed;
      var humi5 = data.list[38].main.humidity;
      // displaing results 
      temp1.innerHTML = `Temperature: <span>${tempature1} F</span>`
      clouds1.innerHTML = `Clouds: <span>${descrip1}<span>`
      wind1.innerHTML = `Wind Speed: <span>${wndspd1} MPH<span>`
      hum1.innerHTML = `Humidity: <span>${humi1}%<span>`
      today1.innerHTML = `Today: <span>${time1}<span>`

      temp2.innerHTML = `Temperature: <span>${tempature2} F</span>`
      clouds2.innerHTML = `Clouds: <span>${descrip2}<span>`
      wind2.innerHTML = `Wind Speed: <span>${wndspd2} MPH<span>`
      hum2.innerHTML = `Humidity: <span>${humi2}%<span>`
      today2.innerHTML = `Today: <span>${time2}<span>`

      temp3.innerHTML = `Temperature: <span>${tempature3} F</span>`
      clouds3.innerHTML = `Clouds: <span>${descrip3}<span>`
      wind3.innerHTML = `Wind Speed: <span>${wndspd3} MPH<span>`
      hum3.innerHTML = `Humidity: <span>${humi3}%<span>`
      today3.innerHTML = `Today: <span>${time3}<span>`

      temp4.innerHTML = `Temperature: <span>${tempature4} F</span>`
      clouds4.innerHTML = `Clouds: <span>${descrip4}<span>`
      wind4.innerHTML = `Wind Speed: <span>${wndspd4} MPH<span>`
      hum4.innerHTML = `Humidity: <span>${humi4}%<span>`
      today4.innerHTML = `Today: <span>${time4}<span>`

      temp5.innerHTML = `Temperature: <span>${tempature5} F</span>`
      clouds5.innerHTML = `Clouds: <span>${descrip5}<span>`
      wind5.innerHTML = `Wind Speed: <span>${wndspd5} MPH<span>`
      hum5.innerHTML = `Humidity: <span>${humi5}%<span>`
      today5.innerHTML = `Today: <span>${time5}<span>`
    });
});

oldCity.on('click', function (event) {
  var y = event.target;
  console.log("🚀 ~ file: script.js:142 ~ oldCity.addEventListener ~ y:", y)

})