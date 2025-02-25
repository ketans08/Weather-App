

const apikey = "203edba91d09bde5d80cccc343e5bab7";


const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchbox=document.querySelector(".search input");


const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");


async function checkweather(city) {
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        
        weathericon.src=`images/${data.weather[0].main}.png`;
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

    


}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
});




