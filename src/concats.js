


const night = () => {

    let textItems = document.querySelectorAll(".text--item");

    textItems.forEach(item => {
        item.style.color = "White"
    });

    let displayBox = document.getElementById("appWrapp");

    displayBox.style.backgroundImage = "url(/src/img/night.png)"


}

night()



const day = () => {

    let textItems = document.querySelectorAll(".text--item");

    textItems.forEach(item => {
        item.style.color = "White"
    });


    let displayBox = document.getElementById("appWrapp");
    displayBox.style.backgroundImage = "url(/src/img/night.png)"

}