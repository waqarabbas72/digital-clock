const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');
const date = document.getElementById('date');

// let timeNow = new Date();

function nowTime(){
   let hour = new Date().getHours();
   let min = new Date().getMinutes();
   let sec = new Date().getSeconds();

   hour = hour < 10 ? "0" + hour :hour;
   min = min < 10 ? "0" + min :min;
   sec = sec < 10 ? "0" + sec :sec;

   if(hour < 12){
    ampm.textContent = "AM";
   }else{
    ampm.textContent = "PM"
   }

   hours.textContent = hour;
   minutes.textContent = min;
   seconds.textContent = sec;

   let dateNow = new Date().toDateString()
   date.textContent = dateNow;
}
setInterval(nowTime,1000)