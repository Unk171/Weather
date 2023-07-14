// var requestUrl = ' https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=0d050478da7af8cff791a18ab4834659'

var responseText = document.getElementById('response-text');
var btn = document.querySelector(".btn");
var city = document.querySelector("#cityInput");
var x = localStorage.getItem("story");
var story = x.split(",");
console.log("🚀 ~ file: script.js:8 ~ story:", story, typeof(story));

for (var i = 0; i < story.length; i++){

  console.log("🚀 ~ file: script.js:46 ~ i:", i)
  
  var butt = $('button');
  var buttons = $('#buttons');
  butt.addClass('list-group-item list-group-item-action');
  butt.attr('type', 'button');
  console.log(story[i]);
  butt.text(story[i]);
  buttons.append(butt);
};



btn.addEventListener('click', function () {
  console.log(city.value + typeof (city));
  var cityString = JSON.stringify(city.value);
  console.log("🚀 ~ file: script.js:13 ~ cityString:", cityString, typeof(cityString))
  if (story === null) {
    story = [cityString]
  } else {
    story.push(cityString);

  }
  localStorage.setItem('story', story);

  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=0d050478da7af8cff791a18ab4834659'
  fetch(requestUrl)
    .then(function (responce) {
      if (responce.status === 200) {
        return responce.json();
      } else { alert("Enter correct city") }
    })
    .then(function (data) {

      console.log(data);
      var nameval = data.name;
      var descrip = data.weather[0].description;
      var humi = data.main.humidity;
      var tempature = data.main.temp;
      var wndspd = data.wind.speed;
      cityName.innerHTML = `City: <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${tempature} F</span>`
      clouds.innerHTML = `Clouds: <span>${descrip}<span>`
      hum.innerHTML = `Humidity: <span>${humi}%<span>`
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
      console.log(data);
     
      var descrip1 = data.list[6].weather[0].description;
      var tempature1 = data.list[6].main.temp;
      var wndspd1 = data.list[6].wind.speed;
      var humi1 = data.list[6].main.humidity;

      var descrip2 = data.list[14].weather[0].description;
      var tempature2 = data.list[14].main.temp;
      var wndspd2 = data.list[14].wind.speed;
      var humi2 = data.list[14].main.humidity;

      var descrip3 = data.list[22].weather[0].description;
      var tempature3 = data.list[22].main.temp;
      var wndspd3 = data.list[22].wind.speed;
      var humi3 = data.list[22].main.humidity;

      var descrip4 = data.list[30].weather[0].description;
      var tempature4 = data.list[30].main.temp;
      var wndspd4 = data.list[30].wind.speed;
      var humi4 = data.list[30].main.humidity;

      var descrip5 = data.list[38].weather[0].description;
      var tempature5 = data.list[38].main.temp;
      var wndspd5 = data.list[38].wind.speed;
      var humi5 = data.list[38].main.humidity;

      temp1.innerHTML = `Temperature: <span>${tempature1} F</span>`
      clouds1.innerHTML = `Clouds: <span>${descrip1}<span>`
      wind1.innerHTML = `Wind Speed: <span>${wndspd1} MPH<span>`
      hum1.innerHTML = `Humidity: <span>${humi1}%<span>`

      temp2.innerHTML = `Temperature: <span>${tempature2} F</span>`
      clouds2.innerHTML = `Clouds: <span>${descrip2}<span>`
      wind2.innerHTML = `Wind Speed: <span>${wndspd2} MPH<span>`
      hum2.innerHTML = `Humidity: <span>${humi2}%<span>`

      temp3.innerHTML = `Temperature: <span>${tempature3} F</span>`
      clouds3.innerHTML = `Clouds: <span>${descrip3}<span>`
      wind3.innerHTML = `Wind Speed: <span>${wndspd3} MPH<span>`
      hum3.innerHTML = `Humidity: <span>${humi3}%<span>`

      temp4.innerHTML = `Temperature: <span>${tempature4} F</span>`
      clouds4.innerHTML = `Clouds: <span>${descrip4}<span>`
      wind4.innerHTML = `Wind Speed: <span>${wndspd4} MPH<span>`
      hum4.innerHTML = `Humidity: <span>${humi4}%<span>`

      temp5.innerHTML = `Temperature: <span>${tempature5} F</span>`
      clouds5.innerHTML = `Clouds: <span>${descrip5}<span>`
      wind5.innerHTML = `Wind Speed: <span>${wndspd5} MPH<span>`
      hum5.innerHTML = `Humidity: <span>${humi5}%<span>`


      // }
    });

})