let password = ["TrustNo1"];
let passwordField = document.querySelector(".passwordField");
let ok = document.querySelector(".passwordButton");
let checkbox = document.querySelectorAll(".check-button");
let lever = document.querySelectorAll(".lever");
let launch = document.querySelector(".launch");
const rocket = document.getElementById("rocket");

function testPass14() {
    let inputs = document.querySelectorAll('input');
    for (let item of inputs) {
        item.onchange = function () {
            console.log('HAhA pass the test No14');
        }
    }
}
testPass14();

ok.addEventListener("click", function () {
    if (passwordField.value === password[0]) {
        for (let i in checkbox) {
            checkbox[i].disabled = false;
        }
        for (let i in lever) {
            lever[i].disabled = false;
        }
        passwordField.disabled = true;
        ok.disabled = true;

    } else
        alert("Try again!");
});


setInterval(function check() {

    launch.disabled = false;

    for (let i = 0; i < lever.length; i++) {
        if (lever[i].value != 10)
            launch.disabled = true;
    }
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == false)
            launch.disabled = true;
    }
}, 1000);

launch.onclick = function () {
    let posl = 500;
    let posb = 370;
    launch.disabled = true;
    let start = setInterval(function () {
        rocket.style.left = posl + 'px';
        rocket.style.bottom = posb + 'px';
        posl += 10;
        posb += 10;
        if (posl > 1300) {
            clearInterval(start);
            launch.disabled = false;
            rocket.style.left = 500 + 'px';
            rocket.style.bottom = 370 + 'px';
        }
    }, 20);
}