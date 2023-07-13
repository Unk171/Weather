// var requestUrl = ' https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=0d050478da7af8cff791a18ab4834659'

var responseText = document.getElementById('response-text');
var btn = document.querySelector(".btn");
var city = document.querySelector("#cityInput");


btn.addEventListener('click', function () {
  console.log(city.value + typeof (city));

  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=0d050478da7af8cff791a18ab4834659'
  fetch(requestUrl)
    .then(function (responce) {
      if (responce.status === 200) {
        return responce.json();
      } else { alert("Enter correct city") }
    })
    .then(function (data) {

      var nameval = data.name;
      var descrip = data.weather[0].description;

      console.log(data);

      var tempature = data.main.temp;
      var wndspd = data.wind.speed;
      cityName.innerHTML = `City: <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${tempature} F</span>`
      hum.innerHTML = `Clouds: <span>${descrip}<span>`
      wind.innerHTML = `Wind Speed: <span>${wndspd} MPH<span>`
    });
    var requestUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city.value + '&units=imperial&appid=0d050478da7af8cff791a18ab4834659'

    fetch(requestUrlForecast)
    .then(function (responce) {
      if (responce.status === 200) {
        return responce.json();
      } else { alert("Enter correct city") }
    })
    .then(function (data) {

      // var nameval = data.name;
      // var descrip = data.weather[0].description;

      console.log(data);

      // var tempature = data.main.temp;
      // var wndspd = data.wind.speed;
      // cityName.innerHTML = `City: <span>${nameval}<span>`
      // temp.innerHTML = `Temperature: <span>${tempature} F</span>`
      // hum.innerHTML = `Clouds: <span>${descrip}<span>`
      // wind.innerHTML = `Wind Speed: <span>${wndspd} MPH<span>`
    });

})