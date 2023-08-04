function showTime() {
    let time = new Date();
    let cDayWeek = time.getDay();
    let cDay = time.getDate()
    let cMonth = time.getMonth() + 1
    let cYear = time.getFullYear()
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
    var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = cDay + "/" + cMonth + "/" + cYear + " - "
            + hour + ":" + min + ":" + sec + " " + am_pm;
  
    return currentTime;
  }

export default showTime;