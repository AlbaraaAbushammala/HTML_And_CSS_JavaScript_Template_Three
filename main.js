
let countDownDate = new Date("Dec 10, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));               
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;;

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 *  60 *  60) );  
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;;    

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60 ));
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;;    
    
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000);
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds; 


}, 1000);