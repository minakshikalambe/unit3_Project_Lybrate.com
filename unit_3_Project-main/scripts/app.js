var timer_arr = ["7 mins", "4 mins", "8 mins", "3 mins"]

var info_arr = ["20 year old male from Aligarh asked about pimples", "40 year old female from Daman asked about chest pain", "23 year old male from Bangalore just asked about weight loss ", "26 year old female from Chennai just asked about migrane"];


let timer_id = document.getElementById('ticker-data-timing');
let info_id = document.getElementById('ticker-data-info');

function timerAndInfo() {
    let i = 0;
    setInterval(function () {
        
        if (i == 3) {
            i = 0;
        }

        timer_id.textContent = timer_arr[i];
        info_id.textContent = info_arr[i];

        i = i + 1;
    },2000)
}

timerAndInfo();