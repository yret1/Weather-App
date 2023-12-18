import weatherCall, { newWeatherCall } from "./apiCalls.js"



let inputButton = document.getElementById("submit")


inputButton.addEventListener("click",newWeatherCall)

weatherCall()