setTimer(1000, 'test', 5);



function setTimer(value, htmlElement, totalTime) {
    millis = (1000 / value) * totalTime;
    console.log(millis);
    var index = 0;
    var placeNumber = document.getElementsByClassName(htmlElement)[0];
    var timer = setInterval(incrementNumber, millis);

    function incrementNumber() {
        index++;
        placeNumber.innerHTML = index;
        if (index == value) {
            clearInterval(timer);
        }
    }
}
// console.log(incrementNumber(index));
// console.log(placeNumber);