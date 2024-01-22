console.log("lets write javascript");

const searchBox = document.querySelector("#searchInput")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const apiKey = "56f53ea20c1b25732db4c87a9bffff23"
function KtoC(K){
    return Math.floor(K - 273.15)
}
const Url =(city)=>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56f53ea20c1b25732db4c87a9bffff23`;

async function getWeatherDetails(city) {
  const resp = await fetch(Url(city), {origin: "cors"});
  if(resp.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  const data = await resp.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name
  document.querySelector(".temp").innerHTML = KtoC(data.main.temp) + "°C"
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//add images on condition
if(data.weather[0].main == "Clear"){
  weatherIcon.src = "weather-app-img/images/Clear.png"
}
else if(data.weather[0].main == "Clouds"){
  weatherIcon.src = "weather-app-img/images/Clear.png"
}
else if(data.weather[0].main == "Rain"){
  weatherIcon.src = "weather-app-img/images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "weather-app-img/images/dirizzle.png"
}
else if(data.weather[0].main == "Mist"){
  weatherIcon.src = "weather-app-img/images/mist.png"
}
}
searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const city = searchBox.value;
    if(city){
        getWeatherDetails(city)
    }
    
})
