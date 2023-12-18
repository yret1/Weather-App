import weatherCall, { newWeatherCall } from "./apiCalls.js"
import concat from "./concats.js"



let inputButton = document.getElementById("submit")


inputButton.addEventListener("click",newWeatherCall)

weatherCall()