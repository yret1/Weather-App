let city = document.getElementById("city");
let country = document.getElementById("country");
let temp = document.getElementById("temp");
let currentTime = document.getElementById("time");
let humidity = document.getElementById("humidity");
let condition = document.getElementById("condition")

let feelsLike = document.getElementById("feels");
let winds = document.getElementById("windspeed");




function weatherCall () {
    fetch("http://api.weatherapi.com/v1/current.json?key=6362b7500c6d4b76a5c174725231512&q=malmo&aqi=no")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        city.innerText = data.location.name;
        country.innerText = data.location.country;
        temp.innerText = data.current.temp_c + "°";
        humidity.innerText = data.current.humidity + "%";

        let meterSpeed = data.current.wind_kph / 3.6

        let flooredSpeed = Math.floor(meterSpeed)

        winds.innerText = flooredSpeed + " m/s"
        feelsLike.innerText = data.current.feelslike_c + "°";
        condition.innerText = data.current.condition.text;

        let dataTime = data.location.localtime;
        let splitString = dataTime.split(" ")

        let actuallTime = splitString[1];

        currentTime.innerText = actuallTime


        if(actuallTime >= "20" || actuallTime <= "6"){
            console.log("NIGHT")
        }else{
            console.log("Day")
        }




    })


}


export default weatherCall();