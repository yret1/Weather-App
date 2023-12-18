import {day,night} from "./DayOrNight.js"


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

        let DorN = actuallTime.split(":");
        console.log(DorN)

        if(DorN[0] <= 19 && DorN[0] >= 6){
            day()
        }else{
            night()
        }


    })

}








export function newWeatherCall () {  


    let inputValue = document.getElementById("search").value

    if(inputValue != null || inputValue != undefined){


        let fetchstring = `http://api.weatherapi.com/v1/current.json?key=6362b7500c6d4b76a5c174725231512&q=${inputValue}&aqi=no`;

    

    fetch(fetchstring)
    .then(response => response.json())
    .then(data => {
        city.innerText = data.location.name;
        country.innerText = data.location.country;
        temp.innerText = Math.round(data.current.temp_c) + "°";
        humidity.innerText = data.current.humidity + "%";

        let meterSpeed = data.current.wind_kph / 3.6

        let flooredSpeed = Math.round(meterSpeed)

        winds.innerText = flooredSpeed + " m/s"
        feelsLike.innerText = Math.round(data.current.feelslike_c) + "°";
        condition.innerText = data.current.condition.text;

        let dataTime = data.location.localtime;
        let splitString = dataTime.split(" ")

        let actuallTime = splitString[1];

        currentTime.innerText = actuallTime


        let DorN = actuallTime.split(":");
        console.log(DorN)

        if(DorN[0] <= 19 && DorN[0] >= 6){
            day()
        }else{
            night()
        }

        

    })
}


}



export default weatherCall;