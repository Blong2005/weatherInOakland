

var silverSwirl = "silverSwirl.jpeg";
var machoMan = "machoMan.jpeg";
var travisScott = "LMAOOOOOO.jpeg";
var baldScreamer = "baldScreamer.jpeg";
var blueSky = "blueSky.jpeg";

const backgroundImages = [blueSky, silverSwirl, machoMan, travisScott, baldScreamer];






















var body = document.body;

body.style.backgroundImage = `url(blueSky.jpeg)`;

var changeWallpaper = document.getElementById("changeWallpaper");
var wallPaperNum = 0;


changeWallpaper.onclick = function(){
  if (wallPaperNum > 3){
    wallPaperNum = -1;
  }
  else {
    wallPaperNum++;
    body.style.backgroundImage = `url(${backgroundImages[wallPaperNum]})`;
  }
}




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}






  const apiKey = "89fa1be1d7140ce4c2f6f1faf397c327";
  const city = 'Pittsburgh';          // Replace with the city you want
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch weather data
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          document.getElementById('city').textContent = city;
          const tempC = data.main.temp;
          const tempF = (9/5)*tempC + 32;
          document.getElementById('temp').textContent = tempF
          document.getElementById('weather').textContent = data.weather[0].description;
      })
      .catch(error => console.error('Error fetching the weather data:', error));