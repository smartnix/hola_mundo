function validate() {
    var usr = document.getElementById("usr");
    var pass = document.getElementById("pass");

    if (usr == "admin" && pass == "admin") {

    }
    else {
        var msg = document.getElementById("msg");
        msg.innerHTML = "Usuario o password incorrectos";
        //console.log("si");
        setTimeout(function () {
            msg.innerHTML = "";
        }, 3000);
    }
}
//----------------------
var timeInterval;
var min = 0, sec = 0;

function start() {
    timeInterval = setInterval(contSec, 1000);

}

function pause() {
    if (timeInterval != null) {
        clearInterval(timeInterval);
    }

}

function stop() {
    if (timeInterval != null) {
        clearInterval(timeInterval);
    }
    clearInterval();
    putSec(0, 0, "hora");
    min = 0;
    sec = 0;
}

function contSec() {
    sec++;
    console.log(sec);
    if (sec == 60) {

        min++;
        sec = 0;
    }
    putSec(min, sec, "hora");
}

function putSec(m, s, id) {
    var hora = document.getElementById(id);
    hora.innerHTML = getFormat(m) + ":" + getFormat(s);

}
function getFormat(n) {
    var ns;

    if (n < 10) {
        ns = "0" + n;
    }
    else {
        ns = "" + n;
    }
    return ns;
}
//timeStamp corre en pagina

function initTime() {
    setInterval(function () {
        var date = new Date();
    putSec(date.getHours(), date.getMinutes(), "tiempo");
    },1000);
}





