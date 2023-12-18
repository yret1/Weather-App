


export const night = () => {

    let textItems = document.querySelectorAll(".text--item");

    textItems.forEach(item => {
        item.style.color = "White"
    });

    let displayBox = document.getElementById("appWrapp");
    let body = document.querySelector("body");
    let main = document.querySelector(".mainwrapper");
    let header = document.querySelector("header");


    main.style.backgroundColor = "Black"
    header.style.backgroundColor = "Black"
    body.style.backgroundColor = "Black"

    displayBox.style.backgroundImage = "url(/src/img/night.png)"
    displayBox.style.boxShadow = "0 0 30px white"


}



export const day = () => {

    let textItems = document.querySelectorAll(".text--item");

    textItems.forEach(item => {
        item.style.color = "Black"
    });

    let displayBox = document.getElementById("appWrapp");
    let body = document.querySelector("body");
    let main = document.querySelector(".mainwrapper");
    let header = document.querySelector("header");





    main.style.backgroundColor = "Green"
    header.style.backgroundColor = "Green"

    body.style.backgroundColor = "Green"

    displayBox.style.backgroundImage = "url(/src/img/Day.png)"
    displayBox.style.boxShadow = "0 0 30px Black"

}