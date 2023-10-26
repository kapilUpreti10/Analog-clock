let hour=document.getElementById("hourHand");
let minute=document.getElementById("minuteHand");
let second=document.getElementById("secondHand");

let displayTime=()=>{

    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let hrRotation=30*h+m/2;
    let minRotation=6*m;
    let secondRotation=6*s;

    hour.style.transform=`rotate(${hrRotation}deg)`;
    minute.style.transform=`rotate(${minRotation}deg)`;
    second.style.transform=`rotate(${secondRotation}deg)`;

}

setInterval(displayTime,1000);