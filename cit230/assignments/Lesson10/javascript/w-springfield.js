var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=01020,us&appid=8faf2aeb014a98d61a4d6e19d3be3f65&units=imperial', true);

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);


    document.getElementById('city').innerHTML = weatherInfo.name;
    document.getElementById('temperature').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/"+iconcode+".png";
    document.getElementById('weathericon').src = icon_path;
}