$(document).ready(function(){
  
  // Grab visitor coords/location
  function getCoords(){
    $.getJSON("http://ip-api.com/json", function(pos){
      var latitude = pos.lat;
      var longitude = pos.lon;
      weatherData(pos.lat, pos.lon, pos.city, pos.region, pos.country);
    });
  }
  
  function weatherData(lat, lon, city, region, country){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=dd6aca295e1a77de1d8b6bcd988e84a6", function(data){
    $(".location").html(city + ", " + region + ", " + country);
    
    // Switch between different degrees
    toggleTemp(data.main.temp);
    
    // Dynamic background code depending on weather.
    weatherBackground(data.weather[0].main);
    $(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.' height=70 width=70>");
    
  });
  }
  
  function toggleTemp(temp){
    var celsius = temp;
    var fahrenheit = celsius * 9/5 + 32;
    $(".tempf").prepend(Math.round(fahrenheit));
    $(".tempc").prepend(Math.round(celsius));
    $(".tempToggleF, .tempToggleC").on("click", function(e){
      e.preventDefault();
      $(".tempf, .tempc").toggle();   
    });
  }
  
  function weatherBackground(currentWeather){
    var weather = currentWeather;
    
    switch(weather){
      
      case "Drizzle":
      case "Rain":
        $("body").css("background-image", 'url("http://wallpapercave.com/wp/lIivxOZ.jpg")');
        break;
        
      case "Thunderstorm":
        $("body").css("background-image", 'url("http://wallpapercave.com/wp/SngOt24.jpg")');
        break;
        
      case "Snow":
        $("body").css("background-image", 'url("http://cdn.paper4pc.com/images/snowy-night-wallpaper-1.jpg")');
        break;
        
      case "Atmosphere":
        $("body").css("background-image", 'url("https://images3.alphacoders.com/156/156719.jpg")');
        break;
        
      case "Clear":
        $("body").css("background-image", 'url("http://www.wallpapersxl.com/wallpapers/1920x1080/dutch-lakes/568638/dutch-lakes-north-in-flames-california-hd-568638.jpg")');
        break;
        
      case "Clouds":
        $("body").css("background-image", 'url("https://wallpaperscraft.com/image/clouds_heavy_mill_meadows_cloudy_evening_bad_weather_52101_1920x1080.jpg")');
        break;
        
      case "Extreme":
        $("body").css("background-image", 'url("http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-full-hd-1920-1080-widescreen-awesome/wallpaper-volcano-storm-1920-x-1080-full-hd.jpg")');
        break;
        
      default:
        $("body").css("background-image", 'url("http://1.bp.blogspot.com/-rQbf171Zwew/UDc7wg7eg1I/AAAAAAAABNE/x5Ydq9VSEOk/s1600/beautifull+Sunset+wallpapers+(14).jpg")');
        break;
    }
  }
  
  
  getCoords();
});
