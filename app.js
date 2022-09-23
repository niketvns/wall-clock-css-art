document.addEventListener("DOMContentLoaded", getExactTime)
var hour_pointer = document.querySelector("#hour-pointer");
var minute_pointer = document.querySelector("#minute-pointer");
var second_pointer = document.querySelector("#second-pointer");


function getExactTime() {
    var hour_full = new Date().getHours();
    if (hour_full >= 12) {
        var hour = hour_full - 12;
    }
    var minute = new Date().getMinutes();
    var rotate_hour = Math.abs(hour - 3);
    var angle_rotation_hour = rotate_hour * 30;
    var angle_rotation_minute = minute * 6;
    const deg_hour = angle_rotation_hour;
    var deg_hour_minute = 0;
    if (minute != 60) {
        var deg_hour_minute = minute * 0.5;
    }
    const deg_minute = angle_rotation_minute;
    const degree_hour = deg_hour + deg_hour_minute;
    hour_pointer.style.transform = 'rotate(' + degree_hour + 'deg)';
    minute_pointer.style.transform = 'rotate(' + deg_minute + 'deg)';
}

setTimeout(function () {
    window.location.reload(1);
}, 60000);